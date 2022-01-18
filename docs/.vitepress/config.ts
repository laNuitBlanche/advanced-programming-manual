import { defineConfig } from 'vitepress'
import path from 'path'

export default defineConfig({
  base: '/docs/algorithm/',
  lang:"zh-CN",
  title: '算法笔记',
  description: '记录leetcode题解',
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
