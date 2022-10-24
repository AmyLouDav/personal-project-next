import Navbar from "../../components/nav-bar/nav-bar";
//import Image from "next/Image";
import ReactMarkdown from "react-markdown";

import {
  StyledH1,
  StyledImg,
  ContentContainer,
  TextContainer,
  Container,
  InfoPageImg,
  StyledText,
} from "./info.styles.js";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function Post({ infoData }) {
  const {
    content: {
      title,
      description,
      image: { url },
    },
  } = infoData;

  return (
    <>
      <Navbar />
      <Container>
        <StyledH1>{title}</StyledH1>
        <ContentContainer>
          <InfoPageImg>
            {url && (
              <StyledImg
                src={url}
                placeholder=""
                layout="responsive"
                width="500px"
                height="380px"
                alt={description}
              />
            )}
          </InfoPageImg>
          <TextContainer>
            <StyledText>
              <ReactMarkdown>{description}</ReactMarkdown>
            </StyledText>
          </TextContainer>
        </ContentContainer>
      </Container>
    </>
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
