import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Icon from '@zyr/components/icon/index';
import '@zyr/theme-chalk/src/index.scss';
import Tree from '@zyr/components/tree/index';

const plugins = [Icon, Tree];

const app = createApp(App);
// 注册全局组件
plugins.forEach((plugin) => {
  app.use(plugin);
});

app.mount('#app');
