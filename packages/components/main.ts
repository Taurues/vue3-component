/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-19 16:13:16
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-19 16:13:21
 * @FilePath: /vue3-component/packages/components/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus);

app.mount('#app');