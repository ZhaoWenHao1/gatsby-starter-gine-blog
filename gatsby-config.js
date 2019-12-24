module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-gine-blog`,
      options: {
        configTable:
            'https://www.notion.so/happy0101/62067c6644194669a9436a524bc71859?v=dcbcf36987c44a4d9fe9b23c17f27287'
      }
    },
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        configTable:
            'https://www.notion.so/happy0101/4025fe82ef124be09a68b012494bd8b3?v=ab3535e0d35640a696afed48d028028a'
      }
    }
  ],
}
