import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

const dev = process.env.ROLLUP_WATCH;

const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript({ sourceMap: false }),
  json(),
  !dev && terser(),
];

export default [
  {
    input: 'src/modern-ui-cards.ts',
    output: {
      dir: './dist',
      format: 'es',
      sourcemap: dev ? true : false,
    },
    plugins: [...plugins],
    watch: {
      exclude: 'node_modules/**',
    },
  },
];
