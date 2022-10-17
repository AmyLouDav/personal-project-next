import Link from "next/link";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

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

  return {
    props: {
      blogData,
    },
  };
}

export default function Home({ blogData }) {
  return (
    <>
      <div>This is the index page.</div>
      <ul>
        {blogData.map((blog) => (
          <li key={blog.slug}>
            <Link href={`${blog.slug}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
