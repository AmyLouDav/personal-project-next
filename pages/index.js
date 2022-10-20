import Link from "next/link";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Home({ infoData }) {
  const { content } = infoData;
  return (
    <>
      <p>This is the index page</p>
    </>
  );
}

// export default function Home({ infoData }) {
//   return (
//     <>
//       <p>This is the index page it shouldn't be a list</p>
//       <ul>
//         {infoData.map((info) => (
//           <li key={info.content.slug}>
//             <Link href={`${info.content.slug}`}>
//               <a>{info.content.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

export async function getStaticProps() {
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
          query {
              infoPageCollection{
                items{
                  content{
                  slug
                  title
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
    console.log("data", data);
    const infoData = data.infoPageCollection.items;

    return {
      props: {
        infoData,
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
