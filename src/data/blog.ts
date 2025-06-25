import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

/**
 * Blog post metadata as defined in the frontmatter.
 */
export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

/**
 * Blog post object returned by getPost and getAllPosts.
 */
export type BlogPost = {
  source: string;
  metadata: Metadata;
  slug: string;
};

/**
 * Get all MDX files in a directory.
 */
function getMDXFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
    return [];
  }
}

/**
 * Convert markdown content to HTML using unified pipeline.
 */
export async function markdownToHTML(markdown: string): Promise<string> {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

/**
 * Validate that the metadata object contains required fields.
 */
function validateMetadata(metadata: any, slug: string): Metadata {
  const required = ["title", "publishedAt", "summary"];
  for (const key of required) {
    if (!metadata[key]) {
      throw new Error(`Missing required metadata field "${key}" in post "${slug}"`);
    }
  }
  return metadata as Metadata;
}

/**
 * Get a single blog post by slug.
 * @param slug The slug (filename without extension)
 * @returns BlogPost object
 */
export async function getPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  let source: string;
  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    throw new Error(`Could not read post file: ${filePath}`);
  }
  let rawContent: string, metadata: any;
  try {
    const parsed = matter(source);
    rawContent = parsed.content;
    metadata = parsed.data;
  } catch (err) {
    throw new Error(`Could not parse frontmatter for post "${slug}": ${err}`);
  }
  const validMetadata = validateMetadata(metadata, slug);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: validMetadata,
    slug,
  };
}

/**
 * Get all blog posts in a directory, sorted by publishedAt descending.
 * @param dir Directory containing MDX files
 * @returns Array of BlogPost objects
 */
async function getAllPosts(dir: string): Promise<BlogPost[]> {
  const mdxFiles = getMDXFiles(dir);
  const posts: BlogPost[] = [];
  for (const file of mdxFiles) {
    const slug = path.basename(file, path.extname(file));
    try {
      const post = await getPost(slug);
      posts.push(post);
    } catch (err) {
      console.warn(`Skipping post "${slug}": ${err}`);
    }
  }
  // Sort by publishedAt descending
  return posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

/**
 * Get all blog posts from the content directory.
 * @returns Array of BlogPost objects
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "content");
  return getAllPosts(contentDir);
}
