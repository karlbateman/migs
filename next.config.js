/** @type {import('next').NextConfig} */
const nextConfig = {
	// Rewrites are used to consolidate the content management system integration
	// into a single directory. Which creates a clear separation between pages
	// which source their data from a CMS and other pages within your application
	// that retrieve data from other external sources.
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/cms/home",
			},
			{
				source: "/:path*",
				destination: "/cms/:path*",
			},
		];
	},
};

module.exports = nextConfig;
