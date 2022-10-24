import Navbar from "../../components/nav-bar/nav-bar";
import {
  StyledH1,
  ContentContainer,
  StyledImg,
  TextContainer,
  StyledText,
  H1Container,
} from "./blog.styles";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Post({ blogData }) {
  const {
    content: {
      title,
      description,
      image: { url },
    },
  } = blogData;

  return (
    <div>
      <Navbar />
      <H1Container>
        <StyledH1>{title}</StyledH1>
      </H1Container>
      <ContentContainer>
        {url && (
          <StyledImg
            src={url}
            placeholder=""
            layout="responsive"
            width="300px"
            height="200px"
            alt={description}
          />
        )}
        <TextContainer>
          <StyledText>{description}</StyledText>
        </TextContainer>
      </ContentContainer>
    </div>
  );
}

export async function getStaticPaths() {
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

    if (!res.ok) {
      console.error(res);
      return {};
    }

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
  } catch (e) {
    console.log("error", e);
    return {
      props: {
        notFound: true,
      },
    };
  }
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
