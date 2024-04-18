<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-15 14:39:08
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-18 18:48:02
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
          v-for="(province, index) in formatData" 
          :key="province.id" 
          :class="index == activeProvinceIndex ? 'active-province' : ''"
          @click="activeProvinceIndex = index"
        >
          <div class="flex justify-space-between pd-lr-10 h30 pointer">
            <div>{{ province.name }}</div>
            <div>0</div>
          </div>
        </div>
      </div>
      <!-- 市 -- 区/县 -->
      <div class="flex-1 overflow-y-scroll">
        <div v-for="city in formatData[activeProvinceIndex].childList" :key="city.id" class="flex border-bottom">
          <div class="flex w240">
            <div class="w240 flex justify-space-between border-right align-item-center pd-lr-10">
              <div class="flex align-item-center">
                <input type="checkbox" />
                <div>{{ city.name }}</div>
              </div>
              <div>0/1</div>
            </div>
          </div>
          <div class="flex flex-wrap flex-1 p-l-10">
            <div v-for="area in city.childList" :key="area.id" class="flex h45 m-r-15">
              <input type="checkbox" />
              <div>{{ area.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './index.scss'
import { ref, defineProps, computed } from 'vue'
import { panelSelectProps, DataType, Id } from './index'

defineOptions({
  name: 'z-panel-select'
})

//props
const { data, labelField, keyField, childrenField } = defineProps(panelSelectProps)

const activeProvinceIndex = ref(0)

const formatData = computed(() => {
  return formatInitData(data)
})

// 格式化传入的data数据
function formatInitData(data: DataType[]) {
  function track(da) {
    return da.map((t:DataType) => {
      return {
        id: t[keyField] as Id,
        name: t[labelField] as string,
        childList: t[childrenField] ? track(t[childrenField]) : []
      }
    })
  }
  return track(data)
}

</script>