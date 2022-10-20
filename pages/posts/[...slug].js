import Image from "next/Image";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Post({ blogData }) {
  return (
    <div>
      <h1>{blogData.content.title}</h1>
      <p>{blogData.content.description}</p>
      <Image
        src={blogData.content.image.url}
        placeholder=""
        width={750}
        height={500}
        alt={blogData.content.image.description}
      />
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
    const fullSlug = `article${slug}`;
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
  const slug = `/${params.slug[1]}`;

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
            query GetPost($slug: String!) {
              blogPagesCollection(
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
                    image{
                      url
                      description
                    }
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

    if (!res.ok) {
      console.error(res);
      return {};
    }

    const { data } = await res.json();

    const [blogData] = data.blogPagesCollection.items;

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
