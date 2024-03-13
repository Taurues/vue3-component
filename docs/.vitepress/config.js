module.exports = {
  title: 'Z-UI',
  description: 'vue3组件库',
  themeConfig: {
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present zyr'
    },
    nav: [
      { text: '指南', link: '/guide/introduce', activeMatch: '/guide/' },
      { text: '组件', link: '/components/icon', activeMatch: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduce' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [{ text: 'Icon 图标', link: '/components/icon' }]
        }
      ]
    }
  }
};
