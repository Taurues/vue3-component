import _Tree from './src/tree.vue';

import { withInstall } from '@zyr/utils/with-install';

const Tree = withInstall(_Tree);

export default Tree;

// 组件语法高亮提示
declare module 'vue' {
  export interface GlobalComponents {
    ZTree: typeof Tree;
  }
}
