import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/app.ts',
  output: {
    dir: '.',
    format: 'iife',
    name: 'runningtools'
  },
  plugins: [
    typescript(),
    terser(),
  ]
};
