export type SocialLink = {
	me?: string;
	text: string;
	icon: string;
	href: string;
	platform: string;
	footerOnly?: boolean;
};

export type SiteInfo = {
	name: string;
	title: string;
	description: string;
	keywords:string[];
	image: {
		src: string;
		alt: string;
	};
	socialLinks: SocialLink[];
	googleAnalyticsId: string
};

const siteInfo: SiteInfo = {
	name: "Awesome Landing Page",
	title: "The best landing page templates on the internet | Awesome Landing Page",
	description:
		"Explore our curated collection of top-notch landing page templates and UI kits to elevate your web design projects.",
	keywords:[
		'Awesome Landing Page',
		'Landing Page Templates',
		'UI Kits',
		'Web Design Resources',
		'Website Templates'
	],
		image: {
		src: "/og/social.jpg",
		alt: "Build the web you want",
	},
	socialLinks: [
		{
			platform: "twitter",
			icon: "social/twitter",
			me: "https://x.com/li_wujie",
			href: "https://x.com/li_wujie",
			text: "Follow Writter on x.com (formerly Twitter)",
		},
		{
			platform: "github",
			icon: "social/github",
			text: "Go to Awesome Landing Page's GitHub repo",
			me: "https://github.com/wujieli0207/awesome-landing-page/",
			href: "https://github.com/wujieli0207/awesome-landing-page/",
		},
	],
	googleAnalyticsId: 'G-ZS7QW21DKN',
};

export default siteInfo;
