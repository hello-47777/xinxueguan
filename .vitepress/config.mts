import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "Mental Dental CN",
  description: "牙科双语知识库",
  
  // 忽略 public 文件夹的扫描
  srcExclude: ['**/public/**'],

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '全部课程', link: '/directory' } // 稍后自动生成
    ],

    // 侧边栏自动生成
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      useTitleFromFileHeading: true,
      excludePattern: ['index.md', 'public/**'],
      collapsed: true, // 默认折叠专辑
      capitalizeFirst: true
    }),

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    // 页脚
    footer: {
      message: '基于 Mental Dental 视频整理',
      copyright: 'Copyright © 2024 INBDE Prep'
    }
  }
})