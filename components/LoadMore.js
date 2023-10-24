import React from 'react'
import {fetchPosts} from '@/components/Blog'

const LoadMore = ({posts, setPosts}) => {
    const handleOnClick = async (e) => {
        let clickedBtn = e.target;
        
        const getMorePosts = await fetchPosts(posts.pageInfo.endCursor);

        let updatedPosts = {
            pageInfo: {

            },
            nodes: []
        }

        updatedPosts.pageInfo = getMorePosts.pageInfo;

        posts.nodes.map((node) => { updatedPosts.nodes.push(node);
        });
    }
  return (
    <button className='bg-sky-700 hover:bg-sky-900 rounded-full px-5 py-2 text-white flex mx-auto'
    onClick={handleOnClick}>
        
        Load More Posts
    </button>
  )
}

export default LoadMore