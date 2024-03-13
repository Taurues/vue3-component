/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-13 21:13:00
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-03-13 22:10:32
 * @FilePath: /vue3-component/packages/components/button/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import _Button from './src/button.vue'

import { withInstall } from '@zyr/utils/with-install'


const ZButton = withInstall(_Button)

export default ZButton


declare module 'vue' {
    export interface GlobalComponents {
        ZButton: typeof ZButton
    }
}