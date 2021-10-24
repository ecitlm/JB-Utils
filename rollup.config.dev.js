import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
export default {
  input: './src/index.js', // 打包入口
  output: {
    // 打包出口
    file: 'dist/index.js', // 最终打包出来的文件路径和文件名
    format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: 'webUtils', //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=
    sourcemap: true //生成bundle.map.js文件，方便调试
  },
  plugins: [
    babel({
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      babelHelpers: 'runtime'
    }),
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    // 热更新 默认监听根文件夹
    livereload(),
    // 本地服务器
    serve({
      open: true, // 自动打开页面
      port: 9000,
      host: 'localhost',
      openPage: '/example/index.html', // 打开的页面
      contentBase: ''
    })
  ]
};
