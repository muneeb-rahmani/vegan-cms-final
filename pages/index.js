import React, { useState } from 'react'
import {getPostList} from '@/lib/posts'
import Link from 'next/link'
import GridBlog from '@/components/GridBlog'
import LoadMore from '@/components/LoadMore'


export async function getStaticProps() {
    const allPosts = await getPostList()

    return {
        props: {
            allPosts: allPosts,
        },
    }
}

const Home = ({allPosts}) => {
    const [posts, setPosts] = useState(allPosts)
    // console.log(allPosts)
  return (
    <>
        <div  className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
    {posts.nodes.map((post) => (

        
        <GridBlog
        key={post.id}
        listSlug={post.slug}
        listTitle={post.title}
        listsDate={post.date}
        listFeatured={post.featuredImage.node.mediaDetails.sizes[3].sourceUrl}
        listCategeorySlug={post.categories.nodes[0].slug}
        listCategeory={post.categories.nodes[0].name}
        />
        ))}
        </div>
        </div>
        <LoadMore posts={posts} setPosts={setPosts}/>
    </>
  )
}

export default Home