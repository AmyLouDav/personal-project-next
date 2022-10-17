import Link from "next/link";

// take Contentful keys from the .env file
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

console.log("space", space);

function Slug({ blogItems }) {
  return (
    <div>
      {blogItems.map((blogItem) => (
        <div>
          <h2>
            <Link href={`${blogItem.slug}`}>{blogItem.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Slug;

export async function getStaticProps() {
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
          query {
              elementInfoCollection{
                items{
                  slug
                  title
              }
            }
          }
        `,
      }),
    }
  );
  // grab the data from the response
  const { data } = await res.json();

  return {
    props: {
      blogItems: data.elementInfoCollection.items,
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
  const slugs = data.elementInfoCollection.items;

  const paths = slugs.map(({ slug }) => {
    return {
      params: { slug: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
