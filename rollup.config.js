const rollupTypescript = require('rollup-plugin-typescript2');
const { uglify } = require('rollup-plugin-uglify');
const path = require('path');
const fs = require('fs');
const pwd = (...args) => path.resolve(process.cwd(), ...args);

function rm(file) {
  const stat = fs.statSync(file);
  if (stat) {
    if (stat.isDirectory()) {
      fs.rmdirSync(file);
    } else if (stat.isFile()) {
      fs.unlinkSync(file);
    }
  }
}

function clearDir(dir) {
  if (fs.existsSync(pwd(dir))) {
    const files = fs.readdirSync(pwd(dir));
    files.forEach(file => {
      rm(pwd(dir, file));
    });
  }
}

clearDir('umd');

module.exports = [
  {
    input: './lib/index.ts',
    output: {
      file: './umd/index.js',
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
