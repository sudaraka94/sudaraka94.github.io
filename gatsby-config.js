module.exports = {
    siteMetadata: {
        title: `Sudaraka Jayathilaka`,
        name: `Sudaraka Jayathilaka`,
        siteUrl: `https://sudaraka94.github.io`,
        description: `I Sudaraka Jayathilaka, a programmer living in Singapore. I blog about experiences navigating through my career as a Software Engineer.` ,
        hero: {
            heading: `Hello 👋, I'm Sudaraka Jayathilaka. \nWelocme to my blog ☕`,
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
            resolve: "@narative/gatsby-theme-novela",
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
        }
    ],
};
