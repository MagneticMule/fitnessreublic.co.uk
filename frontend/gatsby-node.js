const path = require('path');
const isFuture = require('date-fns');


const turnPostsIntoPages = async ({ graphql, actions }) => {
 // grab the page template for the blog posts
  const blogPostTemplate = path.resolve('./src/templates/blog/BlogPost.js');

 // query all the posts
const {data} = await graphql(`
  query {
    posts: allSanityPost {
      nodes {
        id
        title
        slug {
          current
        }
        excerpt
        _rawBody
      }
    }
  }
  `);
  // loop over blog posts
  data.posts.nodes.forEach(post=> {
    console.log('Creating a page for the blog post: ', post.title);
    actions.createPage({
      // create the url of the individual page
      path: `/blog/post/${post.slug.current}`,
      component: blogPostTemplate,
      context: {
        title: post.title,
        slug: post.slug.current,
      }
    });
  });
}

exports.createPages = async (params) => {
  console.log('--- Creating Blog Pages ---');
  await turnPostsIntoPages(params);
}
