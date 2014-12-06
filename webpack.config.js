module.exports = {
	entry: 'jsx!./src/Index.jsx',

	output: {
		filename: 'dist/rsu.js',
		library: 'rsu',
		libraryTarget: 'umd'
	},
	module: [
		{ test: /\.jsx$/, loader: 'jsx-loader'}
	]
};
