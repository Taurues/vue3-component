import _RegionSelect from './src/index.vue'

import { withInstall } from '@zyr/utils/with-install'


const RegionSelect = withInstall(_RegionSelect)


export default RegionSelect

export * from './src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    ZRegionSelect: typeof RegionSelect
  }
}