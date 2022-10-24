import Navbar from "../components/nav-bar/nav-bar";

import {
  StyledH1,
  StyledLink,
  LinkCardContainer,
  Container,
  StyledA,
  StyledLi,
  StyledImg,
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
                {/* <StyledImg
                  src={blog.content.image.url}
                  placeholder=""
                  layout="responsive"
                  width="300px"
                  height="200px"
                  alt={blog.content.description}
                /> */}
           
              </StyledLink>
            </TitleContainer>
          </StyledLi>
        ))}
      </Container>
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
  // grab the data from the response
  const { data } = await res.json();
  const blogData = data.blogPagesCollection.items;

  return {
    props: {
      blogData,
    },
  };
}
