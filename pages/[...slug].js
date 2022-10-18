const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Post({ blogData }) {
  console.log("props", blogData);
  
  return (
    <div>
      {/* <h1>{blogData.title}</h1>
      <p>{blogData.description}</p> */}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `
          query {
            elementInfoCollection{
              items{
                slug
              }
            }
          }
        `,
      }),
    }
  );

  const { data } = await res.json();
  const blogSlugs = data.elementInfoCollection.items;

  const paths = blogSlugs.map((blogSlug) => {
    const { slug } = blogSlug;
    const fullSlug = `posts${slug}`;
    return {
      params: { slug: fullSlug.split("/") },
    };
  });

  // console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  console.log("slug", slug);
  // send a request to Contentful (using the same URL from GraphiQL)
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
      {
        method: "POST", // GraphQL *always* uses POST requests
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`, // add access token header
        },
        // send the query written in GraphiQL as a string
        body: JSON.stringify({
          // all requests start with "query:" stringify for convenience
          query: `
            query 
                elementInfoCollection{
                  items{
                    slug
                    title
                    description
                }
              }
            }
          `,
        
        }),
      }
    );
    // grab the data from the response
    const { data } = await res.json();

    const blogData = data.elementInfoCollection.items;
    console.log("blog data title", blogData.title)

    return {
      props: {
        blogData,
      },
    };
  } catch (e) {
    console.log("error", e);
    return {
      props: {
        notFound: true,
      },
    };
  }
}
