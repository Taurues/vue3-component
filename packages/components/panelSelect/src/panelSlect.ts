/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-15 14:39:15
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-19 16:31:10
 * @FilePath: /vue3-component/packages/components/regionSelect/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PropType, ExtractPropTypes } from 'vue';
import { data } from './data'

export const panelSelectProps = {
  // 初始数据列表
  data: {
    type: Array as PropType<DataType[]>,
    default: () => [...data] //现在默认用data
  },
  // 选中的数据
  selectData: {
    type: Array as PropType<SelectDataType[]>,
    default: () => [640300]
  },
  labelField: {
    type: String,
    default: 'name'
  },
  keyField: {
    type: String,
    default: 'id'
  },
  childrenField: {
    type: String,
    default: 'childList'
  }
} as const

// props 类型
export type PanelSelectProps = ExtractPropTypes<typeof panelSelectProps>

export type Id = number | string

// 传入的data类型
export type DataType = {
  id: Id;
  name: string;
  parentId?: Id;
  isLast?: number;
  children?: DataType[];
  [key: string]: unknown;
}

// 传入的selectData类型
export type SelectDataType = Id | {
  id: Id;
  name?: string;
  parentId?: Id;
  isLast?: number;
  children?: SelectDataType[];
  [key: string]: unknown;
}