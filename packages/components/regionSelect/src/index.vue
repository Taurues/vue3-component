<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-15 14:39:08
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-15 15:10:41
 * @FilePath: /vue3-component/packages/components/regionSelect/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="region-box">
    <div class="region-box-title border-bottom">
      选择县/区，已选择xx个
    </div>
    <div class="flex h40 border-bottom">
      <div class="w170 text-align-left border-right p-l-10 border-box">省</div>
      <div class="w240 text-align-left border-right p-l-10 border-box">市</div>
      <div class="flex-1 text-align-left p-l-10 border-box">区/县</div>
    </div>
    <div class="flex area-pick">
      <!-- 省 -->
      <div class="w170 border-right overflow-y-scroll">
        <div 
          v-for="(province, index) in dataList" 
          :key="province.divisionId" 
          :class="index == activeProvinceIndex ? 'active-province' : ''"
          @click="activeProvinceIndex = index"
        >
          <div class="flex justify-space-between pd-lr-10 h30 pointer">
            <div>{{ province.divisionName }}</div>
            <div>0</div>
          </div>
        </div>
      </div>
      <!-- 市 -- 区/县 -->
      <div class="flex-1 overflow-y-scroll">
        <div v-for="city in dataList[activeProvinceIndex].subList" :key="city.divisionId" class="flex border-bottom">
          <div class="flex w240">
            <div class="w240 flex justify-space-between border-right align-item-center pd-lr-10">
              <div class="flex align-item-center">
                <input type="checkbox" />
                <div>{{ city.divisionName }}</div>
              </div>
              <div>0/1</div>
            </div>
          </div>
          <div class="flex flex-wrap flex-1 p-l-10">
            <div v-for="area in city.subList" :key="area.divisionId" class="flex h45 m-r-15">
              <input type="checkbox" />
              <div>{{ area.divisionName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './index.scss'
import { data } from './data'
import { ref } from 'vue'

const dataList = {...data}

const activeProvinceIndex = ref(0)

defineOptions({
  name: 'z-region-select'
})
</script>