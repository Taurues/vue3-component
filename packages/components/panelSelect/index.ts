/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-15 14:38:33
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-18 15:17:08
 * @FilePath: /vue3-component/packages/components/panelSelect/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import _PanelSelectProps from './src/index.vue'

import { withInstall } from '@zyr/utils/with-install'


const PanelSelect = withInstall(_PanelSelectProps)


export default PanelSelect

export * from './src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    ZPanelSelect: typeof PanelSelect
  }
}