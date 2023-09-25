import{_ as o,r as n,o as t,c,f as r,d as a,a as s,b as e,e as l}from"./app-09910f35.js";const p={},u=s("h1",{id:"nprogress-插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nprogress-插件","aria-hidden":"true"},"#"),e(" nprogress 插件")],-1),g={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-nprogress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { nprogressPlugin } from &#39;@vuepress/plugin-nprogress&#39;

export default {
  plugins: [
    nprogressPlugin(),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义进度条的样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,7);function h(v,_){const i=n("NpmBadge"),d=n("ExternalLinkIcon");return t(),c("div",null,[r(' `# nprogress` 会被渲染成 `<h1 id="nprogress">` ，导致 id 和 nprogress 进度条冲突 （有点蠢） '),r(" 所以我们在 h1 标题后添加一个 '插件' 后缀，然后通过 title frontmatter 来设置页面标题 "),u,a(i,{package:"@vuepress/plugin-nprogress"}),s("p",null,[e("将 "),s("a",g,[e("nprogress"),a(d)]),e(" 集成到 VuePress 中，在切换到另一个页面时会展示进度条。")]),m])}const f=o(p,[["render",h],["__file","nprogress.html.vue"]]);export{f as default};