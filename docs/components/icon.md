## Icon 图标

z-ui 推荐使用 xicon 作为图标库，xicons 的地址：[xicons](https://www.iconfont.cn/)

## 安装

```bash
$ npm install @vicons/ionicon5
```

## 使用

- 如果你想像用例一样直接使用，你需要全局注册组件才能在项目里直接使用

<script setup lang="ts">
import { Add } from '@vicons/ionicons5'
</script>

<z-icon color="red" size="20"><Add/></z-icon>
<z-icon color="green" size="30"><Add/></z-icon>
<z-icon color="blue" size="40"><Add/></z-icon>

```vue
<script setup lang="ts">
import { Add } from '@vicons/ionicons5';
</script>
<template>
  <z-icon color="red" size="40"></z-icon>
</template>
```

## API

### Icon props

| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| color | string | undefined | 图标颜色 |
| size  | number | undefined | 图标大小 |
