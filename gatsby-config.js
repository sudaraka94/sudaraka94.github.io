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
                name: `twitter`,
                url: `https://x.com/sudaraka94`,
            },
            {
                name: `github`,
                url: `https://github.com/sudaraka94`,
            },
            {
                name: `instagram`,
                url: `https://instagram.com/sudarakayj`,
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/in/sudarakajayathilaka/`,
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
