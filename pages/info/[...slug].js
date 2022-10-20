import Image from "next/Image";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Post({ infoData }) {
  return (
    <div>
      <h1>{infoData.content.title}</h1>
      <p>{infoData.content.description}</p>
      {infoData.content.image && (
        <Image
          src={infoData.content.image.url}
          placeholder=""
          width={750}
          height={500}
          alt={infoData?.content?.image?.description}
        />
      )}
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
            infoPageCollection{
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
  const infoPageSlugs = data.infoPageCollection.items;
  const paths = infoPageSlugs.map((pageSlug) => {
    const { slug } = pageSlug;
    const fullSlug = `info${slug}`;
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
              infoPageCollection(
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

    const [infoData] = data.infoPageCollection.items;

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
