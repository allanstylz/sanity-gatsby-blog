export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e528de1148742628ce0b2e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bsxghn93',
                  apiId: '5e4234e5-6284-4826-850a-0de48c10a04e'
                },
                {
                  buildHookId: '5e528de1f12c2db31cfa6315',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mm7x46nc',
                  apiId: '1834882b-7126-4f2a-bdde-1591b01389ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/allanstylz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mm7x46nc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
