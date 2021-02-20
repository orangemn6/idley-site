module.exports = {
    siteMetadata: {
        title: `IdleyHost`,
        description: `Free Hosting just right at your fingertips, it is completely free with as less compromises as possible, claim your free hosting today!`,
        siteUrl: `https://beta.idleyhost.com`,
        author: `@orangemn6`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-landing-page-starter`,
                short_name: `landing`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#675CE2`,
                display: `standalone`,
                icon: `src/assets/logo.svg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`
    ],
}