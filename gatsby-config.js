module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-gine-blog`,
      options: {
        configTable:
            'https://www.notion.so/happy0101/c25e538627e342cc9d91bd3f4be9e27e?v=5eba2e73e33e4e37b18dfc803544c1e2'
      
      }
    },
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        configTable:
            'https://www.notion.so/happy0101/bd2b4afd240f4fb08caf1b10c27a8fe5?v=82f2913f950847fdb795adfe62279b99'
      }    
    }
  ],
}
