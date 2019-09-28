const rollupTypescript = require('rollup-plugin-typescript2');
const { uglify } = require('rollup-plugin-uglify');

module.exports = [
  {
    input: './lib/index.ts',
    output: {
      file: './umd/index.umd.js',
      format: 'umd',
      name: 'queryString',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
    plugins: [
      rollupTypescript({
        useTsconfigDeclarationDir: false,
      }),
      uglify({
        sourcemap: true,
      }),
    ],
  },
];
