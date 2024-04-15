/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-18 15:31:14
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-03-18 15:49:56
 * @FilePath: /vue3-component/packages/components/modal/src/modal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { PropType } from "vue"

// comfirm props
export const comfirmProps = {
    message: {
        type: String as PropType<string>,
        default: ''
    }, 
    closeHandle: {
        type: Function as PropType<() => void>,
        default: () => {}
    }
}