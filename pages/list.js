import Navbar from "../components/nav-bar/nav-bar";
import Image from "next/image";
import {
  Container,
  ImgContainer,
  StyledImg,
  StyledA,
  StyledLi,
  TitleContainer,
  StyledH1,
  StyledLink,
} from "../styles/list.styles";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export default function List({ blogData }) {
  return (
    <>
      <Navbar />
      <Container>
        <StyledH1>Blog Posts</StyledH1>
        {blogData.map((blog) => (
          <StyledLi key={blog.content.slug}>
            <a href={`posts/article${blog.content.slug}`}>
              <ImgContainer>
                <StyledImg
                  key={blog.content.sys.id}
                  src={blog.content.image.url}
                  width="200px"
                  height="300px"
                ></StyledImg>
              </ImgContainer>
            </a>
            <StyledLink href={`posts/article${blog.content.slug}`}>
              <TitleContainer>
                <StyledA>{blog.content.title}</StyledA>
              </TitleContainer>
            </StyledLink>
          </StyledLi>
        ))}
      </Container>
    </>
  );
}

export async function getStaticProps() {
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
                content{
                  sys{
                    id
                  }
                slug
                title
                description
                  image{
                    url
                  }
                }
              }
            }
          }
        `,
      }),
    }
  );

  const { data } = await res.json();
  const blogData = data.blogPagesCollection.items;

  return {
    props: {
      blogData,
    },
  };
}
