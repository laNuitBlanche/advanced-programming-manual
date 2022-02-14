import { defineConfig } from 'vitepress'
import path from 'path'

export default defineConfig({
  base: '/docs/algorithm/',
  lang:"zh-CN",
  title: '编程进阶手册',
  description: '分享、记录数据结构、算法技巧及设计模式',
  themeConfig: {
    nav: [
      { text: 'leetcode题解', link: '/leetcode/index' }
    ],
    sidebar: {
        '/leetcode/': [
            { text: '简单难度', link: '/leetcode/easy/index',children: [
              { text: '1.两数之和', link: '/leetcode/easy/1.两数之和'}
            ] },
            { text: '中等难度', link: '/leetcode/medium/index' },
            { text: '困难难度', link: '/leetcode/hard/index' }
        ]
    }
  },
  outDir: "../dist/docs/algorithm"
})
