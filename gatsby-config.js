module.exports = {
  siteMetadata: {
    title: "New Zealand Motorcycle Tours, Rentals and Hire NZ",
    titleTemplate: "%s - Rental Motorbikes Te Waipounamu Motorcycle Tours",
    description:
      "Hire from New Zealand’s largest most caring &amp; professional Motorcycle Rental Company. New Fleet of Latest model BMW R1200GS, R1200RT, F800GS F700GS, G650GS. Triumph Tiger 800 &amp; 1050, Suzuki V-Strom &amp; other adventure bikes, all expertly prepared for your tour.",
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
    url: "https://www.motorcycle-hire.co.nz", // No trailing slash allowed!
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VE7HB6EXTF",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
