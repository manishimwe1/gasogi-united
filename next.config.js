/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "yt3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname:
					"publish-p47754-e237306.adobeaemcloud.com",
			},
		],
	},
};

module.exports = nextConfig;
