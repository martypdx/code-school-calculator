const gobble = require('gobble');
const buble = require( 'rollup-plugin-buble' );
const nodeResolve = require( 'rollup-plugin-node-resolve' );
const commonjs = require( 'rollup-plugin-commonjs' );

const css = gobble('src/scss').transform( 'sass', {
	src: 'main.scss',
	dest: 'min.css'
});

const js = gobble( 'src/js' );

const components = gobble( 'src/components' )
	.transform( 'sass-file', { includePaths: [ 'src/scss/include' ] })
	.transform( 'ractive-components' )
	.transform( 'ractive', { type: 'es6' });

const bundle = gobble([ js, components ]).transform( 'rollup', {
	entry: 'main.js',
	dest: 'bundle.js',
	format: 'iife',
	plugins: [
		buble(),
		nodeResolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs({})
	]
});

const index = gobble( 'src' ).include( 'index.html' );

module.exports = gobble( [ bundle, index, css ] );