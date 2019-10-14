module.exports = {
	siteMetadata: {
		title: `Digital Academy`,
		description: `A proof of concept website built with Gatsby`,
		author: `Omar Plasencia`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Digital Academy`,
				short_name: `Portfolio`,
				start_url: `/`,
				background_color: `#3898ec`,
				theme_color: `#3898ec`,
				display: `minimal-ui`,
				icon: `src/images/da-favicon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
