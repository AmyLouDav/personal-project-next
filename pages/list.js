import Navbar from "../components/nav-bar/nav-bar";
import {
  StyledH1,
  StyledLink,
  Container,
  StyledA,
  StyledLi,
  TitleContainer,
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
            <TitleContainer>
              <StyledLink href={`posts/article${blog.content.slug}`}>
                <StyledA>{blog.content.title}</StyledA>
              </StyledLink>
            </TitleContainer>
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
