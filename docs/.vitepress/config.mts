import { defineConfig } from 'vitepress'
            import { withMermaid } from 'vitepress-plugin-mermaid'
            export default withMermaid(defineConfig({
              title: "Mental Dental CN",
              appearance: 'dark',
              themeConfig: {
                sidebar: [
  {
    "text": "专辑 01：心脏解剖学实景课 (Heart Anatomy - Course)",
    "collapsed": true,
    "items": [
      {
        "text": "01 Heart Orientation - Anatomy Explained in Mixed Reality",
        "link": "/%E4%B8%93%E8%BE%91%2001%EF%BC%9A%E5%BF%83%E8%84%8F%E8%A7%A3%E5%89%96%E5%AD%A6%E5%AE%9E%E6%99%AF%E8%AF%BE%20%28Heart%20Anatomy%20-%20Course%29/01%20Heart%20Orientation%20-%20Anatomy%20Explained%20in%20Mixed%20Reality"
      }
    ]
  }
],
                search: { provider: 'local' },
                socialLinks: [ { icon: 'github', link: 'https://github.com/hello-47777/dental-kb' } ]
              },
              mermaid: { theme: 'dark' },
            }))