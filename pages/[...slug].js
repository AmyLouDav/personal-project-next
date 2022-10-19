const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Post({ blogData }) {
  console.log("blog data", blogData);

  return (
    <div>
      <h1>this is a dynamic page </h1>
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
            blogPagesCollection{
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
  const blogSlugs = data.blogPagesCollection.items;
  const paths = blogSlugs.map((blogSlug) => {
    const { slug } = blogSlug;
    const fullSlug = `posts${slug}`;
    return {
      params: { slug: fullSlug.split("/") },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // this gets the second element in the params array which is the slug
  //this is getting the correct slug
  const slug = params.slug[1];

  try {
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
            query GetBlog($slug: String!) {
              blogPagesCollection (
                  where: {
                    slug: $slug
                  },
                  limit: 1
                ) {
                  items {
                    content {
                      slug
                      title
                      description
                    }
                  }
                  }
            }
          `,
          variables: {
            slug,
          },
        }),
      }
    );

    console.log("after query");

    const data = await res.json(); // this doesn't return anything so there must be something wrong with the query

    console.log("after data");

    console.log("data", data);

    const blogData  = data.blogPagesCollection.items.content.title;
    console.log("blog data title", blogData.title);

    return {
      props: {
        slug: blogData,
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
