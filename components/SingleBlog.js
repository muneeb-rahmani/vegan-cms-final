import React from "react";
import Date from "./Date";
import Image from "next/image";
import Link from "next/link";



const SingleBlog = ({
  singleCategory,
  singleTitle,
  singleAuthor,
  singleDate,
  singleFeatured,
  singleContent,
}) => {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg px-8 py-5 !pt-0 lg:py-8 xl:px-5">
        <div className="mx-auto max-w-screen-md">
          <div className="flex justify-center">
            <div className="flex gap-3">
              <Link href="#">
                <span className="mt-5 inline-block text-xs font-medium uppercase tracking-wider text-blue-600">
                  {singleCategory}
                </span>
              </Link>
            </div>
          </div>
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-black lg:text-4xl lg:leading-snug">
            {singleTitle}
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Link href="/author/mario-sanchez">
                  <img
                    alt="Mario Sanchez"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="rounded-full object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent"
                    sizes="40px"
                  />
                </Link>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <a href="/author/mario-sanchez">{singleAuthor}</a>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <Date
                    dateString={singleDate}
                    className="text-gray-500 dark:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          alt={singleTitle}
          loading="eager"
          decoding="async"
          data-nimg="fill"
          className="object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent"
          width={800} 
          height={530}
          src={singleFeatured}
        />
      </div>
      <div className="container mx-auto max-w-screen-lg px-8 py-5 lg:py-8 xl:px-5">
  <article className="mx-auto max-w-screen-md">
    <div dangerouslySetInnerHTML={{__html: singleContent}} className="post-content prose dark:prose-invert prose-a:text-blue-600 mx-auto my-3" />
      
   
    
    <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-24 w-24 flex-shrink-0">
          <Link href="#"><img alt="Mario Sanchez" loading="lazy" decoding="async" data-nimg="fill" className="rounded-full object-cover absolute h-full w-full left-0 top-0 right-0 bottom-0 invisible" sizes="96px"  /></Link>
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About Mario Sanchez
            </h3>
          </div>
          <div>
            <p>Mario is a Staff Engineer specialising in Frontend at <Link href="#" rel="noopener" target="_blank">Vercel</Link>, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.</p>
          </div>
          
      </div>
    </div>
    </div>
  </article>
</div>

    </>
  );
};

export default SingleBlog;
