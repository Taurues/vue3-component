<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNamespace } from '@zyr/utils/create';
import { iconProps } from './icon';
import { computed } from 'vue';

// 组件命名: 类似于vue2中的name属性 使用插件unplugin-vue-define-options
defineOptions({
  name: 'z-icon'
});

const bem = createNamespace('icon');
// 类似于vue2组件里面的props属性
const props = defineProps(iconProps);

// 计算属性：计算样式
const style = computed(() => {
  if (!props.size && !props.color) return {};
  console.log(props.size);
  return {
    ...(props.size ? { fontSize: props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  };
});
</script>

<style scoped></style>
