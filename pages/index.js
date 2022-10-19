import Link from "next/link";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Home({ blogData }) {
  return (
    <>
      <div>This is the blog list page.</div>
      <ul>
        {blogData.map((blog) => (
          <li key={blog.content.slug}>
            <Link href={`/posts${blog.content.slug}`}>
              <a>{blog.content.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

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
              blogPagesCollection{
                items{
                  content{
                  slug
                  title
                  description
                  }
              }
            }
          }
        `,
      }),
    }
  );
  // grab the data from the response
  const { data } = await res.json();
  const blogData = data.blogPagesCollection.items;

  return {
    props: {
      blogData,
    },
  };
}
