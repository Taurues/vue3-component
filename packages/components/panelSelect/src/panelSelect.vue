<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-15 14:39:08
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-19 16:43:38
 * @FilePath: /vue3-component/packages/components/regionSelect/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="region-box">
    <div class="region-box-title border-bottom">
      选择县/区，已选择<span style="color: #409EFF;">{{ selectData.length || 0 }}</span>个
    </div>
    <div class="flex h40 border-bottom">
      <div class="w170 text-align-left border-right pl-10 border-box">省</div>
      <div class="w240 text-align-left border-right pl-10 border-box">市</div>
      <div class="flex-1 text-align-left pl-10 border-box">区/县</div>
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
          <div class="flex justify-space-between plr-10 h30 pointer">
            <div>{{ province.name }}</div>
            <div>0</div>
          </div>
        </div>
      </div>
      <!-- 市 -- 区/县 -->
      <div class="flex-1 overflow-y-scroll">
        <div v-for="city in formatData[activeProvinceIndex].childList" :key="city.id" class="flex border-bottom">
          <div class="flex w240">
            <div class="w240 flex justify-space-between border-right align-item-center plr-10">
              <div class="flex align-item-center">
                <el-checkbox v-model="city.checked" />
                <div class="ml-5">{{ city.name }}</div>
              </div>
              <div>0/1</div>
            </div>
          </div>
          <div class="flex flex-wrap flex-1 pl-10">
            <div v-for="area in city.childList" :key="area.id" class="flex h45 mr-15 align-item-center">
              <el-checkbox v-model="area.checked" />
              <div class="ml-5">{{ area.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './panelSelect.scss'
import { ref, defineProps, computed } from 'vue'
import { panelSelectProps, DataType, Id } from './panelSlect'
import { ElCheckbox } from 'element-plus'
import 'element-plus/dist/index.css'

defineOptions({
  name: 'z-panel-select'
})

//props
const { data, labelField, keyField, childrenField, selectData } = defineProps(panelSelectProps)

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
        checked: selectData.includes(t[keyField] as Id),
        childList: t[childrenField] ? track(t[childrenField]) : []
      }
    })
  }
  return track(data)
}

// 选中市

// 选中区县

</script>./panelSlect