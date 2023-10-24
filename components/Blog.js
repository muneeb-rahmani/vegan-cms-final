import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import LoadMore from './LoadMore';

// import Thumbnail from '@/public/assets/thumbnail.jpg'
// import LoadingScreen from './Loading';

const fetchPosts = async (endCursor = null) => {
  const condition = `after: "${endCursor}", first: 6, where: {orderby: {field: DATE, order: DESC}}`;
  const url = process.env.BACKEND_API;

  const query = `
    query {
      posts(${condition}) {
        nodes {
          date
          slug
          title
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  width
                  sourceUrl
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  console.log(data)
  return data.data.posts.nodes;
};

const defaultImageUrl = '/assets/thumbnail.jpg';



const Blog = () => {
  const [posts, setPosts] = useState([]);
  // console.log(posts);
  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  // if(!posts) {
  //   <LoadingScreen />
  // }

  return (
    
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {posts.map((post)=> (
        
      
      <div className="p-4 md:w-1/3" key={post.slug}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-56 w-full object-cover object-center"
          src={post.featuredImage ? post.featuredImage.node.mediaDetails.sizes[3].sourceUrl : defaultImageUrl}
          alt="blog" width={401} height={720} />
          <Link href={post.slug}>
          <div className="p-6">
          {post.categories.nodes.map((category)=> (
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category.name}</h2>
          ))}
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
            
            <div className="flex items-center flex-wrap ">
              
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
               {post.date}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
          </Link>
        </div>
      </div>
   
      ))}

    </div>
  </div>
  <LoadMore posts={posts} setPosts={setPosts} />
</section>

  );
};

export default Blog;
