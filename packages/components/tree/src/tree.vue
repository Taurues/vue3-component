<template>tree</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { treeProps, TreeNode, TreeOption, Key } from './tree';
defineOptions({
  name: 'z-tree'
});

const props = defineProps(treeProps);

// 页面渲染的数据
const tree = ref<TreeNode[]>([]);

function createOptions(key: string, label: string, children: string) {
  return {
    getKey(node: TreeOption) {
      return node[key] as Key;
    },
    getLabel(node: TreeOption) {
      return node[label] as Key;
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeOption[];
    }
  };
}
// 获取每个item的数据转化值
const treeOption = createOptions(
  props.keyField,
  props.labelField,
  props.childrenField
);

// 格式化数据
function createTree(data: TreeOption[]): TreeNode[] {
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map((node: TreeOption) => {
      const children = treeOption.getChildren(node) || [];
      const treeNode: TreeNode = {
        key: treeOption.getKey(node),
        label: treeOption.getLabel(node),
        children: [],
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length === 0
      };
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  }
  const result: TreeNode[] = traversal(data);
  return result;
}

// 监控传入的data，格式化data
watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data);
  },
  { immediate: true }
);
</script>
