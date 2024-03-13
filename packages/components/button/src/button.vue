<template>
    <button :class="bem.b()">button</button>
</template>

<script setup lang="ts">
import { buttonProps } from './button';
import { defineProps } from 'vue';
import { createNamespace } from '@zyr/utils/create'

defineOptions({
    name: 'z-button'
})

// 样式命名规范
const bem = createNamespace('button')

const props = defineProps(buttonProps)
console.log(props)
</script>