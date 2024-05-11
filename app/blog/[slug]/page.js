import { allBlogs, allAuthors } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import BlogLayout from "@/app/components/blog-layout";

function getMainContent(post) {
  const { filePath, path, slug, date, title, tags } = post;
  return {
    filePath,
    path,
    slug,
    date,
    title,
    tags,
  };
}

export default function Page({ params }) {
  const post = allBlogs.find((p) => p.slug === params.slug);
  const authorDetails = allAuthors;
  const MDXContent = useMDXComponent(post.body.code);
  const postIndex = allBlogs.findIndex((p) => p.slug === params.slug);
  if (postIndex === -1) {
    return notFound();
  }
  const prev = allBlogs[postIndex + 1];
  const next = allBlogs[postIndex - 1];
  const content = getMainContent(post);

  return (
    <BlogLayout
      content={content}
      authorDetails={authorDetails}
      next={next}
      prev={prev}
    >
      <MDXContent></MDXContent>
    </BlogLayout>
  );
}
