import{_ as p,r as o,o as r,c,a as s,b as n,d as e,w as l,e as i}from"./app-27037075.js";const d={},D=s("h1",{id:"主题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题","aria-hidden":"true"},"#"),n(" 主题")],-1),h=s("p",null,"VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。",-1),u=s("h2",{id:"默认主题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#默认主题","aria-hidden":"true"},"#"),n(" 默认主题")],-1),m=s("p",null,"VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。",-1),_=s("p",null,"如果你不指定要使用的主题，那么就会自动使用默认主题。",-1),y=i(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 默认主题配置</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">navbar:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">text:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;首页&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">link:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=s("p",null,"然而，你可能觉得默认主题不够出色，又或者你不想搭建一个文档网站，而是一个其他类型的网站，比如博客。此时，你可以尝试使用社区主题或者创建本地主题。",-1),f=s("h2",{id:"社区主题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#社区主题","aria-hidden":"true"},"#"),n(" 社区主题")],-1),C={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"本地主题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#本地主题","aria-hidden":"true"},"#"),n(" 本地主题")],-1);function x(E,k){const a=o("RouterLink"),t=o("ExternalLinkIcon");return r(),c("div",null,[D,h,u,m,_,s("p",null,[n("为了配置默认主题，你需要在你的配置文件中通过 "),e(a,{to:"/reference/config.html#theme"},{default:l(()=>[n("theme")]),_:1}),n(" 配置项来使用它：")]),y,s("p",null,[n("默认主题为文档网站提供了基础且实用的功能，你可以前往 "),e(a,{to:"/reference/default-theme/config.html"},{default:l(()=>[n("默认主题配置参考")]),_:1}),n(" 获取全部的配置列表。")]),v,f,s("p",null,[n("社区用户创建了很多主题，并将它们发布到了 "),s("a",C,[n("NPM"),e(t)]),n(" 上。查看主题本身的文档可以获取更详细的指引。")]),b,s("p",null,[n("如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。前往 "),e(a,{to:"/advanced/theme.html"},{default:l(()=>[n("深入 > 开发主题")]),_:1}),n(" 学习如何开发你自己的主题。")])])}const g=p(d,[["render",x],["__file","theme.html.vue"]]);export{g as default};
