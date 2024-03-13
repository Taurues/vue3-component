/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-13 21:10:27
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-03-13 22:12:30
 * @FilePath: /vue3-component/play/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Icon from '@zyr/components/icon/index';
import '@zyr/theme-chalk/src/index.scss';
import Tree from '@zyr/components/tree/index';
import Button from '@zyr/components/button/index';

const plugins = [Icon, Tree, Button];

const app = createApp(App);
// 注册全局组件
plugins.forEach((plugin) => {
  app.use(plugin);
});

app.mount('#app');
