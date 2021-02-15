import React from 'react';
import { graphql } from 'gatsby';

import BlogPostList from '../components/blog/BlogPostList.js';

import Layout from '../components/layout';
const Blog = ( {data} ) =>{
  const posts = data.posts.nodes;
  return(
    <Layout>
      <div id="main">
                   <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Articles</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
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
		        fixed(height: 400, width: 500) {
			        ...GatsbySanityImageFixed
              }
            }
          }

      }
    }
  }

`