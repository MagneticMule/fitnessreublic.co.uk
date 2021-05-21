import React from 'react';
import { graphql } from 'gatsby';

import BlogPostList from '../components/blog/BlogPostList.js';
import BannerBlog from '../components/BannerBlog.js';
import Layout from '../components/layout';
const Blog = ( {data} ) =>{
  const posts = data.posts.nodes;
  return(
    <Layout>
      <BannerBlog/>
      <div id="main">
        <BlogPostList posts={posts}/>
      </div>
    </Layout>
  );
}


export default Blog;


export const query = graphql`
 query BlogQuery {
    posts: allSanityPost {
      nodes {
        id
        title
        slug {
          current
        }
        excerpt
        mainImage {
          asset {
		        fluid(maxHeight: 460, maxWidth: 600) {
			        ...GatsbySanityImageFluid
              }
            }
          }

      }
    }
  }

`