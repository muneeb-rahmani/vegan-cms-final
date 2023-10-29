import Image from 'next/image';
import Link from 'next/link';
import Date from './Date';
// import React, { useState, useEffect } from 'react'


const GridBlog = ({listTitle, listSlug, listsDesc, listAuthor,listCategeory, listCategeorySlug, listsDate,listFeatured}) => {

  return (
    <>
   
          <div className="p-4 md:w-1/3" >
            <Link href={listSlug}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-56 w-full object-cover object-center" src={listFeatured} alt={listTitle} width={500} height={300} />
          <div className="p-6">
            {/* <Link href={listCategeorySlug}> */}
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 hover:text-green-600">{listCategeory}</h2>
            {/* </Link> */}
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{listTitle}</h1>
            
            <div className="flex items-center flex-wrap ">
              <img className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" src="https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75" />
              <span className="text-gray-400 mx-3 inline-flex items-center lg:mx-auto md:mx-3 leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                Admin
              </span>
              <span className="text-gray-400 mx-3 inline-flex items-center lg:mx-auto md:mx-1 leading-none text-sm pr-3 py-1 border-gray-200">
               <Date dateString={listsDate}/>
              </span>
              
            </div>
          </div>
        </div>
      </Link>
      </div>
    </>
  )
}

export default GridBlog