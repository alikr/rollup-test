import babel from 'rollup-plugin-babel';
module.exports={
	entry: 'src/index.js',
	format: 'cjs',//cjs,amd,es,iife,umd
	plugins: [
		babel()
	],
	dest: 'dist/bundle.js'
}; 
