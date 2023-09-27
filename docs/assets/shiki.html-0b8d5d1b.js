import{_ as r,r as i,o as t,c as p,d as n,a as s,b as e,e as l}from"./app-27037075.js";const c={},d=s("h1",{id:"shiki",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#shiki","aria-hidden":"true"},"#"),e(" shiki")],-1),h={href:"https://shiki.matsu.io/",target:"_blank",rel:"noopener noreferrer"},u={class:"custom-container tip"},D=s("p",{class:"custom-container-title"},"提示",-1),_={href:"https://shiki.matsu.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,[e("你可以考虑在 "),s("code",null,"dev"),e(" 模式下禁用该插件来获取更好的开发体验。")],-1),g=l(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@vuepress/plugin-shiki@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">shikiPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-shiki&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">shikiPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3>`,5),b=l("<li><p>类型： <code>IThemeRegistration</code></p></li><li><p>默认值： <code>&#39;nord&#39;</code></p></li><li><p>详情：</p><p>Shiki 的主题。</p><p>该配置项会被传递到 Shiki 的 <code>getHighlighter()</code> 方法中。</p></li>",3),v=s("p",null,"参考：",-1),y={href:"https://github.com/shikijs/shiki/blob/master/docs/themes.md",target:"_blank",rel:"noopener noreferrer"},f=s("h3",{id:"langs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#langs","aria-hidden":"true"},"#"),e(" langs")],-1),C=l("<li><p>类型： <code>(Lang | ILanguageRegistration)[]</code></p></li><li><p>默认值： <code>[]</code></p></li><li><p>详情：</p><p>Shiki 的语言。</p><p>该配置项会被传递到 Shiki 的 <code>getHighlighter()</code> 方法中。</p><p>如果没有传入语言， Shiki 会自动加载所有可用的语言。</p></li>",3),x=s("p",null,"参考：",-1),E={href:"https://github.com/shikijs/shiki/blob/master/docs/languages.md",target:"_blank",rel:"noopener noreferrer"};function S(N,A){const o=i("NpmBadge"),a=i("ExternalLinkIcon");return t(),p("div",null,[d,n(o,{package:"@vuepress/plugin-shiki"}),s("p",null,[e("该插件使用 "),s("a",h,[e("Shiki"),n(a)]),e(" 来为 Markdown 代码块启用代码高亮。")]),s("div",u,[D,s("p",null,[s("a",_,[e("Shiki"),n(a)]),e(" 是 VSCode 正在使用的代码高亮器。它具有更高的保真度，但比 "),s("a",m,[e("Prism.js"),n(a)]),e(" 要慢一些，特别是在有大量代码块需要处理的时候。")]),k]),g,s("ul",null,[b,s("li",null,[v,s("ul",null,[s("li",null,[s("a",y,[e("shiki > themes"),n(a)])])])])]),f,s("ul",null,[C,s("li",null,[x,s("ul",null,[s("li",null,[s("a",E,[e("shiki > languages"),n(a)])])])])])])}const V=r(c,[["render",S],["__file","shiki.html.vue"]]);export{V as default};
