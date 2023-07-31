const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	// purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			brass: {
				300: "#DDBF7A",
				400: "#d69f54",
				500: "#D29542",
			},
			green: {
				100: "#ecfdf5",
				400: "#d8f8ed",
				500: "#8cbcac",
				600: "#649d8c",
				700: "#487e6f",
				800: "#3a675b",
				900: "#425c5a",
			},
			airquality: {
				good: "#82c07b",
				fair: "#a0b356",
				moderate: "#bfa13b",
				poor: "#dd8938",
				verypoor: "#fb5d5e",
			},
			white: colors.white,
			black: colors.black,
			blue: "#2196f3",
		},
		extend: {
			boxShadow: {
				standard: "rgb(38, 57, 77) 0px 20px 30px -10px",
			},
		},
	},
	plugins: [require("@achamaro/tailwindcss-iconify-icon")()],
};
