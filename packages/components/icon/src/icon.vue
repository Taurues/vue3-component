<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-13 21:10:27
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-15 15:07:33
 * @FilePath: /vue3-component/packages/components/icon/src/icon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
