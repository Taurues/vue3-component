/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-13 21:57:40
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-03-13 22:02:47
 * @FilePath: /vue3-component/packages/components/button/src/button.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ExtractPropTypes, PropType } from "vue";
export const buttonProps = {
    size: {
        type: String as PropType<'small' | 'middle' | 'large'>,
        default: 'middle'
    },
    type: {
        type: String as PropType<'primary' | 'warning' | 'success' | 'danger' | 'text' | 'info'>,
        default: 'primary'
    },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>