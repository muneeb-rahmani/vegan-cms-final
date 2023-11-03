import {graphqlRequest, graphqlRequestSingle} from "@/lib/graphqlRequest"
export async function getPostList(endCursor= null) {
  const condition = `after: "${endCursor}", first: 6, where: {orderby: {field: DATE, order: DESC}}`

    const query = `query getAllPosts {
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
          id
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }`


    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;
    return allPosts;
}


export async function getSinglePost(slug) {
  const query = {
      query: `query getSinglePost {
          post(id: "${slug}", idType: SLUG) {
            content(format: RENDERED)
            date
            excerpt(format: RENDERED)
            modified
            slug
            title(format: RENDERED)
            databaseId
            featuredImage {
              node {
                mediaDetails {
                  sizes {
                    sourceUrl
                    width
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
        }`
  };

  const resJson = await graphqlRequestSingle(query);
  const singlePost = resJson.data.post;

  return singlePost;
}

export async function getPostSlugs() {
  const query = {
      query: `query getPostSlugs {
          posts {
            nodes {
              slug
            }
          }
        }`
  };

  const resJson = await graphqlRequestSingle(query);
  const slugs = resJson.data.posts.nodes;
  return slugs;
}
