import { allBlogs } from "contentlayer/generated";
import ListLayoutTags from "@/app/components/list-layout-tags";

export default function TagPage({ params }) {
  const tag = params.tag;
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  const filteredPosts = allBlogs.filter(
    (post) => post.tags && post.tags.includes(tag)
  );
  return <ListLayoutTags posts={filteredPosts} title={title} />;
}
