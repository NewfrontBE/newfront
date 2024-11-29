/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			keyframes: {
				'slide-left': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				},
			  },
			  animation: {
				'slide-left-infinite': 'slide-left 30s linear infinite',
			  },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}