module.exports = {
    siteMetadata: {
        title: `Sudaraka Jayathilaka`,
        name: `Sudaraka Jayathilaka`,
        siteUrl: `https://sudaraka94.github.io`,
        description: `I Sudaraka Jayathilaka, a programmer living in Singapore. I blog about experiences navigating through my career as a Software Engineer.`,
        hero: {
            heading: `Hello 👋, I'm Sudaraka Jayathilaka. \nWelcome to my blog ☕`,
            maxWidth: 800,
        },
        social: [
            {
                name: `mailto`,
                url: `mailto:sudarakayasindu@gmail.com`
            },
            {
                name: `github`,
                url: `https://github.com/sudaraka94`,
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/in/sudarakajayathilaka/`,
            },
            {
                name: `twitter`,
                url: `https://x.com/sudaraka94`,
            },
            {
                name: `medium`,
                url: `https://medium.com/@sudarakayasindu`

            },
        ],
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: "@sudaraka94/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                authorsPage: false,
                sources: {
                    local: true,
                    // contentful: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Sudaraka Jayathilaka`,
                short_name: `Sudaraka Jayathilaka`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/images/sj.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-N13ZX3B36R", // Google Analytics / GA
              ]
            }
        }
    ],
};
