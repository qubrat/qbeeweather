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
				400: "#E3B039",
				500: "#c99c33",
			},
			green: {
				100: "#ecfdf5",
				500: "#8AA8A6",
				700: "#487e6f",
				800: "#4B6966",
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
		},
		extend: {
			boxShadow: {
				standard: "rgb(38, 57, 77) 0px 20px 30px -10px",
			},
		},
	},
	plugins: [require("@achamaro/tailwindcss-iconify-icon")()],
};
