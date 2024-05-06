import Link from 'next/link'
// import { compareDesc, format, parseISO } from 'date-fns'
// import { allBlogs, Post } from 'contentlayer/generated'
// import { useMDXComponent } from 'next-contentlayer2/hooks';

import "highlight.js/styles/atom-one-dark.css";


// function PostCard(post) {
//   const MDXContent = useMDXComponent(post.body.code);
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.date), 'LLLL d, yyyy')}
//       </time>
//       {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
//       <MDXContent></MDXContent>
//       {/* {post.body.code()} */}
//     </div>
//   )
// }

export default function Home() {
  return (
    <div className="mx-auto max-w-xl py-8 prose">
      sf
    </div>
  )
}
