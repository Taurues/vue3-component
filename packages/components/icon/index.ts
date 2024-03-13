import _Icon from './src/icon.vue'

import { withInstall } from '@zyr/utils/with-install'

const Icon = withInstall(_Icon)

export default Icon

export * from './src/icon'

// 这里添加的类型 可以在模板中被解析
declare module 'vue' {
    export interface GlobalComponents {// 可以把接口类型和全局组件类型自动合并
        ZIcon: typeof Icon
    }
}
