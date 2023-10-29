import { getPostSlugs, getSinglePost } from "@/lib/posts";
import Date from "@/components/Date";
import SingleBlog from "@/components/SingleBlog";

export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.postSlug);
    

    return {
        props: {
            postData,
        },
        notFound: false,
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    postSlug: s.slug
                }
            }
        )),
        fallback: 'blocking'
    }
}

export default function Post({ postData }) {
    console.log(postData)

    return (
        <>
       
        <SingleBlog 
        singleCategory={postData.categories.nodes[0].name}
        singleTitle={postData.title}
        singleDate={postData.date}
        singleFeatured={postData.featuredImage.node.mediaDetails.sizes[3].sourceUrl}
        singleContent={postData.content}
        />
        
        </>
    );
}