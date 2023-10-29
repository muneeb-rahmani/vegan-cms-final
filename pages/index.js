import React from 'react'
import {getAllPosts} from '@/lib/posts'
import Link from 'next/link'
import GridBlog from '@/components/GridBlog'

export async function getStaticProps() {
    const allPosts = await getAllPosts()

    return {
        props: {
            allPosts: allPosts,
        },
    }
}

const Home = ({allPosts}) => {
    // console.log(allPosts)
  return (
    <>
        <div  className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
    {allPosts.nodes.map((post) => (

        
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
    </>
  )
}

export default Home