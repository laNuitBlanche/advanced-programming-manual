import { defineConfig } from 'vitepress'
import { getSideBarPages } from '../utils/'

export default defineConfig({
  base: '/docs/programming-manual/',
  lang: "zh-CN",
  title: '编程进阶手册',
  description: '分享、记录数据结构、算法技巧及设计模式',
  themeConfig: {
    nav: [
      {
        text: '数据结构', link: '/data-structure/index'
      },
      {
        text: '算法', items: [
          { text: '简介', link: '/algorithm/index'},
          { text: 'Leetcode题解', link: '/algorithm/leetcode/index' }
        ]
      },
      {
        text: '设计模式', link: '/design-mode/index'
      }
    ],
    sidebar: {
      '/algorithm/leetcode/': getSideBarPages('/algorithm/leetcode')
    }
  },
  outDir: "../dist/docs/programming-manual"
})
