module.exports = {
	entry: {
		src: 'jsx!./../src/Index.jsx',
		examples: 'jsx!./src/Index.jsx'
	},

	output: {
		filename: 'dist/rsu-[name].js',
	},
	module: [
		{ test: /\.jsx$/, loader: 'jsx-loader'}
	]
};
