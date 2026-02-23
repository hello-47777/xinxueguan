import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css' // 👈 载入你的装修样式

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    // 这里不需要写复杂的 mermaid 逻辑，
    // 因为 update_menu.py 里的 config 已经配置了 withMermaid
    // 这个文件的主要作用是确保 custom.css 被正确加载！
  }
}