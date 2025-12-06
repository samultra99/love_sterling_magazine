interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://lovesterling.netlify.app/', // Write here your website url
	author: 'Sterling', // Site author
	title: 'STERLING', // Site title.
	description:
		'cute thoughts, over-intellectualising and data on random topics, mostly society, history and economics, prepared with love ☆(◒‿◒)☆', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: '', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
