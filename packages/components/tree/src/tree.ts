import { PropType, ExtractPropTypes } from 'vue';

export type Key = number | string;

// 格式化之后的树数据类型
export interface TreeNode extends Required<TreeOption> {
  level: number;
  rawNode: TreeOption; // 原数据
  children: TreeNode[];
  isLeaf: boolean; // 是否是叶子节点
}

// 传入的数据
export interface TreeOption {
  label?: Key;
  key?: Key;
  children?: TreeOption[];
  [key: string]: unknown;
  isLeaf?: boolean;
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'childrens'
  }
} as const; // as const 作用将treeProps中的属性变为常量，不可修改

// 将自定义属性转化为ts类型
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
