import ListLayoutTags from "./components/list-layout-tags";
import { allBlogs } from "contentlayer/generated";

// import "highlight.js/styles/atom-one-dark.css";

const POSTS_PER_PAGE = 5;
export default function Home() {
  const posts = allBlogs;
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };
  return (
    <ListLayoutTags
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  );
}
