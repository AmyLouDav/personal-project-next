const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export async function getStaticProps({ params }) {
  const { blog } = params;
  // send a request to Contentful (using the same URL from GraphiQL)
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
          query GetBlog($slug: String!){
              elementInfoCollection{
                where: {
                  slug: $slug
                },
                items{
                  slug
                  title
                  description
              }
            }
          }
        `,
        variables: {
          slug: blog,
        },
      }),
    }
  );
  // grab the data from the response
  const { data } = await res.json();

  const blogData = data.elementInfoCollection.items;

  return {
    props: {
      blogData,
    },
  };
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
    return {
      params: { slug: blogSlug.slug },
    };
  });

  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ blogData }) {
  console.log(blogData);
  console.log("here");
  return (
    <div>
      <h1>{blogData.title}</h1>
      <p>{blogData.description}</p>
    </div>
  );
}
