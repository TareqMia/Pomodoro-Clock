const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
	plugins: [ tailwindcss('./tailwind.js'), require('autoprefixer') ]
};
