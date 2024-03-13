import DefaultTheme from 'vitepress/theme';

import ZIcon from '@zyr/components/icon/index';
import '@zyr/theme-chalk/src/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon);
  }
};
