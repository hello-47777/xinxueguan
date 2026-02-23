import DefaultTheme from 'vitepress/theme'
import './custom.css' // 👈 这一行保证 CSS 生效

export default {
  extends: DefaultTheme,
  // 👇 这一段是让 Mermaid 正常工作的关键
  setup() {
    // 默认行为
  }
}