export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Last edited documents',
        order: '_updatedAt desc',
      },
      layout: {
        width: 'auto',
        height: 'large'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['post']
      }
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Fitness Republic Admin',
            apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
            buildHookId: 'xxxyyyxxxyyyyxxxyyy',
            name: 'sanity-gatsby-blog-20-studio',
          },
          {
            title: 'Fitness Reoublic Website',
            apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
            buildHookId: 'yyyyxxxxxyyyxxdxxx',
            name: 'sanity-gatsby-blog-20-web'
          },


        ]
      }

    },
    {
      name: 'project-info',
      layout: {
        width: 'large',
        height: 'small'
      }
    },
    {
      name: 'project-users',
      layout: {
        width: 'medium',
        height: 'small'
      }
    }


  ]
}