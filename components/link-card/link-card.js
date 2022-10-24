// import {
//   StyledLink,
//   StyledImg,
//   ImgContainer,
//   TitleContainer,
// } from "./link.styles";

// export default function LinkCard({ linkData }) {
//   console.log("link", linkData);
//   return (
//     <>
//       <StyledLink to={linkData.slug}>
//         <ImgContainer>
//           <StyledImg src={linkData.image.url} alt="placeholder" width="150px" />
//         </ImgContainer>
//         <TitleContainer>{linkData.title}</TitleContainer>
//       </StyledLink>
//     </>
//   );
// }

// export async function getStaticProps({ params }) {
//     const slug = `/${params.slug[1]}`;
  
//       const res = await fetch(
//         `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
//         {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${accessToken}`,
//           },
//           body: JSON.stringify({
//             query: `
//               query GetPost($slug: String!) {
//                 blogPagesCollection(
//                   where: {
//                     slug: $slug
//                   },
//                   limit: 1
//                 ) {
//                   items {
//                     content {
//                       slug
//                       title
//                       description
//                       image{
//                         url
//                         description
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//             variables: {
//               slug,
//             },
//           }),
//         }
//       );
  
//       if (!res.ok) {
//         console.error(res);
//         return {};
//       }
  
//       const { data } = await res.json();
//       const [linkData] = data.blogPagesCollection.items;
  
//       return {
//         props: {
//           linkData,
//         }
//     }
// }