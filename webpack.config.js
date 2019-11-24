const path = require('path')

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./app.js',
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	stats: {
		errorDetails: true,
		reasons: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/react',
								'@babel/preset-env',
							],
						},
					},
				],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|ttf|svg|pdf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'static/assets',
					publicPath: 'static/assets',
				},
			},
		],
	},
	resolve: {
		modules: [
			'node_modules',
		],
		alias: {
			components: path.join(__dirname, 'src/components'),
			static: path.join(__dirname, 'src/static'),
			pages: path.join(__dirname, 'src/pages'),
			styles: path.join(__dirname, 'src/styles'),
			constants: path.join(__dirname, 'src/constants'),
			util: path.join(__dirname, 'src/util'),
			contexts: path.join(__dirname, 'src/contexts'),
		},
	},
}
