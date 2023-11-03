import React, { useState } from 'react'
import { getPostList } from '@/lib/posts';

const LoadMore = ({posts, setPosts}) => {

    const [buttonText, setButtonText] = useState("Load more posts");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleOnClick = async (e) => {
      if (posts && posts.pageInfo) {

        setButtonText('Loading...');
        setButtonDisabled(true)
        
        const getMorePosts = await getPostList(posts.pageInfo.endCursor);

        let updatedPosts = {
            pageInfo: {

            },
            nodes: []
        }

        updatedPosts.pageInfo = getMorePosts.pageInfo;

        posts.nodes.map((node) => { updatedPosts.nodes.push(node);
        });

        getMorePosts.nodes.map((node)=> {
          updatedPosts.nodes.push(node)
        })

        updatedPosts.nodes = [...posts.nodes, ...getMorePosts.nodes];
        setPosts(updatedPosts)

        if(getMorePosts.pageInfo.hasNextPage) {
            setButtonText('Load more posts')
            setButtonDisabled(false)
        } else {
            setButtonText('No more posts to load')
            setButtonDisabled(true)
        }
    }}
  return (
    <button className='bg-sky-700 hover:bg-sky-900 rounded-full px-5 py-2 text-white flex mx-auto'
    onClick={handleOnClick}
    disabled={buttonDisabled}>
        {buttonText}
    </button>
  )
}

export default LoadMore