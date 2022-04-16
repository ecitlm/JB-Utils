import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import glob from 'glob';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const comments = `/**
* name: ${pkg.name}
* version ${pkg.version}
* description: ${pkg.description}
* author: ${pkg.author}
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: ${new Date().toLocaleDateString()}
**/
`;
/**
 * 插件
 *
 * @type {Plugin[]}
 */
const plugins = [
  typescript({
    useTsconfigDeclarationDir:true,
    tsconfigOverride:true
  }),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'runtime'
  }),
  json(),
  resolve(), // 查找和打包node_modules中的第三方模块
  commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
  terser({
    compress: {
      pure_funcs: ['console.log']
    },
    output: {
      preamble: comments
    }
  })
];
/**
 * 动态JS获取
 * @param path
 * @returns {[]}
 */
function getEntriesJs(path) {
  let entryList = [];
  glob.sync(path).forEach(entry => {
    let fileName = entry.replace(/(.*\/)*([^.]+).*/gi, '$2');
    entryList.push({
      input: entry,
      output: {
        file: `dist/lib/${fileName}.js`,
        format: 'umd',
        name: fileName
      },
      plugins
    });
  });
  return entryList;
}
const entryJS = getEntriesJs('src/methods/*.ts');

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.browser,
        format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
        name: 'webUtils' // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.webUtils
      },
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'esm'
      }
    ],
    plugins
  },
  ...entryJS
];
