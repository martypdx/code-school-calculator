const gobble = require('gobble');
const buble = require( 'rollup-plugin-buble' );
const nodeResolve = require( 'rollup-plugin-node-resolve' );
const commonjs = require( 'rollup-plugin-commonjs' );

// var css = gobble('src/scss').transform( 'sass', {
// 	src: 'main.scss',
// 	dest: 'min.css',
// 	sourceMap: true
// });

// var images = gobble('src/images').moveTo('images');

const js = gobble( 'src/js' );
	// .transform( 'babel', { presets: [ 'es2015' ] } );

const components = gobble( 'src/components' )
	.transform( 'sass-file', { includePaths: [ 'src/scss/include' ] })
	// .transform( 'babel', { presets: [ 'es2015' ] })
	.transform( 'ractive-components' )
	.transform( 'ractive', { type: 'es6' });

const bundle = gobble([ js, components ]).transform( 'rollup', {
	entry: 'main.js',
	dest: 'bundle.js',
	format: 'iife',
	plugins: [
		buble(),
		nodeResolve({
			jsnext: true,  // Default: false
			main: true,  // Default: true
			browser: true,  // Default: false
		}),
		commonjs({})
	]

});

const index = gobble( 'src' ).include( 'index.html' );

module.exports = gobble( [ bundle, index ] );