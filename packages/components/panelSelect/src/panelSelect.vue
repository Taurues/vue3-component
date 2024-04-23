<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-15 14:39:08
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-23 18:05:20
 * @FilePath: /vue3-component/packages/components/regionSelect/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="region-box">
    <div class="region-box-title border-bottom">
      选择县/区，已选择<span style="color: #409EFF;">{{ _selectData.length || 0 }}</span>个
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
            <div style="color: #409EFF">
              {{ province.children?.reduce((pre,next) => {
                return pre + ( next.children? next.children.filter(t => t.checked).length : 0)
              }, 0) }}
            </div>
          </div>
        </div>
      </div>
      <!-- 市 -- 区/县 -->
      <div class="flex-1 overflow-y-scroll">
        <div v-for="(city, cityIndex) in formatData[activeProvinceIndex].children" :key="city.id" class="flex border-bottom">
          <div class="flex w240">
            <div class="w240 flex justify-space-between border-right align-item-center plr-10">
              <div class="flex align-item-center">
                <el-checkbox v-model="city.checked" @change="cityChange($event, cityIndex, city)" />
                <div class="ml-5">{{ city.name }}</div>
              </div>
              <div>
                <span style="color: #409EFF">{{ city.children ? city.children.filter(item => item.checked).length : 0 }}</span>
                /<span>{{ city.children ? city.children.length : 0 }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap flex-1 pl-10">
            <div v-for="(area, areaIndex) in city.children" :key="area.id" class="flex h45 mr-15 align-item-center">
              <el-checkbox v-model="area.checked" @change="areaChange($event, cityIndex, area)" />
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
import { ref, defineProps, reactive, watch } from 'vue'
import { panelSelectProps, DataType, Id, SelectDataType } from './panelSlect'
import { ElCheckbox, CheckboxValueType } from 'element-plus'
import 'element-plus/dist/index.css'

defineOptions({
  name: 'z-panel-select'
})

//props
const { data, labelField, keyField, childrenField, selectData, } = defineProps(panelSelectProps)
// 当前选中的省份
const activeProvinceIndex = ref(0)

// 选中的县区
let _selectData = reactive<Id[]>(selectData.map((t: SelectDataType) => (t.id)))
// 最终的渲染数据
let formatData = reactive<DataType[]>(formatInitData(data))

// watch(
//   [
//     _selectData, 
//     (newVal, oldVal) => {
//       formatData = formatInitData(data)
//     }, 
//     { deep: true }
//   ], 
// )
watch([_selectData, formatData], ([newSelectData, newFormatData], [oldSelectData, oldFormatData]) => {
  formatData = formatInitData(data)
   
})

// 格式化传入的data数据
function formatInitData(data: DataType[]) {
  function track(da) {
    return da.map((t:DataType) => {
      return {
        id: t[keyField] as Id,
        name: t[labelField] as string,
        checked: _selectData.includes(t[keyField] as Id),
        children: t[childrenField] ? track(t[childrenField]) : [],
        isLast: !t[childrenField]
      }
    })
  }
  return track(data)
}

// 选中市
function cityChange(e: CheckboxValueType, cityIndex: number, city: DataType) {
  const res = formatData[activeProvinceIndex.value].children[cityIndex].children as DataType[]
  const ls: Id[] = res.map(t => (t.id))
  ls.push(city.id)
  if (e) {
    for(const t of ls) {
      _selectData.push(t)
    }
  } else {
    for (const t of ls) {
      if (_selectData.indexOf(t) > -1) {
        _selectData.splice(_selectData.indexOf(t), 1)
      }
    }
  }
}

// 选中区县
function areaChange(e: CheckboxValueType, cityIndex: number, area: DataType) {
  if (e) {
    _selectData.push(area.id)
  } else {
    _selectData.splice(_selectData.indexOf(area.id), 1)
  }
  // 检查是否需要选中市
  const itemLs = formatData[activeProvinceIndex.value].children[cityIndex].children.length
  const selectLs = formatData[activeProvinceIndex.value].children[cityIndex].children.filter(t => t.checked).length
  console.log('formatData ', formatData[activeProvinceIndex.value].children[cityIndex]);
  // if (itemLs === selectLs) {
  //   formatData[activeProvinceIndex.value].children[cityIndex].checked = true
  // } else {
  //   formatData[activeProvinceIndex.value].children[cityIndex].checked = false
  // }
}

</script>