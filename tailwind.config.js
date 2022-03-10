module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xxl: "2000px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
