import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import url from 'postcss-url';
import { terser } from 'rollup-plugin-terser';

const formats = [
  {
    format: 'systemjs',
    input: 'js/app.js',
  },
  {
    format: 'iife',
    input: 'js/runtime.js',
  }
];

export default formats.map((format) => ({
  input: [
    format.input,
  ],
  output: {
    dir: `js/${format.format}`,
    format: format.format,
    entryFileNames: `[name].js`,
    chunkFileNames: `chunk-[name]-[hash].js`,
    sourcemap: false,
  },
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [
        url({
          url: 'inline',
        }),
      ],
    }),
    terser(),
  ],
}));
