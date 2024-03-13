<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-13 21:10:27
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-03-13 22:13:38
 * @FilePath: /vue3-component/play/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { Add } from '@vicons/ionicons5';
</script>

<template>
  <div>
    <z-icon :color="'red'">
      <Add />
    </z-icon>
    <z-icon :color="'yellow'">
      <Add />
    </z-icon>
    <z-tree></z-tree>
    <z-button></z-button>
  </div>
</template>

<style scoped></style>
