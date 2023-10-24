// import Link from 'next/link';
// import React, { useState, useEffect } from 'react'
// // import {fetchPosts} from '@/lib/graphql'

// const fetchPosts = async () => {
//   const url = process.env.BACKEND_API;
//     const query = `
//     query {
//       posts {
//         nodes {
//           date
//           slug
//           title
//           featuredImage {
//             node {
//               mediaDetails {
//                 file
//                 sizes {
//                   width
//                   sourceUrl
//                   height
//                 }
//               }
//             }
//           }
//           categories {
//             nodes {
//               name
//               slug
//             }
//           }
//         }
//         pageInfo {
//           endCursor
//           hasNextPage
//           hasPreviousPage
//           startCursor
//         }
//       }
//     }
//     `;
  
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({query}),
//     });
  
//     const data = await response.json();
//     // console.log(data)
//     return data.data.posts.nodes;
//   };

// export async function getStaticProps () {

//   const allPosts = await fetchPosts();
//   console.log(allPosts)
//   return {
//     props: {
//       allPosts: allPosts,
//     },
//   }
// }
// const GridBlog = ({allPosts}) => {

//   return (
//     <div>
//         <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">

//           {allPosts.nodes.map((post)=> {
//             <Link href={post.slug}>
//           <div className="p-4 md:w-1/3" >
//         <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//           <img className="lg:h-48 md:h-56 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
            
//             <div className="flex items-center flex-wrap ">
//               <img className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75" />
//               <span className="text-gray-400 mx-3 inline-flex items-center lg:mx-auto md:mx-3 leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//                 Admin
//               </span>
//               <span className="text-gray-400 mx-3 inline-flex items-center lg:mx-auto md:mx-1 leading-none text-sm pr-3 py-1 border-gray-200">
//                 {post.date}
//               </span>
              
//             </div>
//           </div>
//         </div>
//       </div>
//       </Link>
//           })}
 
      

//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default GridBlog