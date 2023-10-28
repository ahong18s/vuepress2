import{_ as i,r as t,o,c as r,d as n,a as e,b as l,w as a,e as d}from"./app-d19e66db.js";const c={},u=e("h1",{id:"主题-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题-api","aria-hidden":"true"},"#"),l(" 主题 API")],-1),h=d(`<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>主题的名称。</p><p>它应遵从如下命名约定，并且在发布到 NPM 时应确保和包名保持一致：</p><ul><li>非 Scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>详情：</p><p>主题永远不能被多次使用，因此主题 API 不支持该配置项。</p></li></ul><h2 id="主题特定配置项" tabindex="-1"><a class="header-anchor" href="#主题特定配置项" aria-hidden="true">#</a> 主题特定配置项</h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><ul><li><p>类型： <code>Theme</code></p></li><li><p>详情：</p><p>要继承的主题。</p><p>父主题的所有主题 API 都会被继承，但是子主题不会直接覆盖父主题。主题特定的配置项会根据以下规则进行覆盖：</p><ul><li><a href="#plugins">plugins</a>： 当同一个插件在子主题和父主题中都被使用时，如果该插件不支持被多次使用，那么只有在子主题中使用的插件会生效。</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>： 子主题的模板会覆盖父主题的模板。</li></ul><p>支持多级继承，即主题 B 可以继承主题 A ，然后主题 C 可以继承主题 B 。换句话说，一个主题可以有一个父主题、一个祖父主题等等。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 继承默认主题</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">extends:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>`,10),m=e("li",null,[e("p",null,[l("类型： "),e("code",null,"(Plugin | Plugin[])[]")])],-1),D=e("li",null,[e("p",null,"详情："),e("p",null,"主题中要使用的插件。")],-1),_=e("p",null,"参考：",-1),f=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild","aria-hidden":"true"},"#"),l(" templateBuild")],-1),y=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),v=e("p",null,"详情：",-1),C=e("p",null,"指定构建时使用的 HTML 模板路径。",-1),b=e("p",null,"参考：",-1),g=e("h3",{id:"templatebuildrenderer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuildrenderer","aria-hidden":"true"},"#"),l(" templateBuildRenderer")],-1),x=e("li",null,[e("p",null,[l("类型： "),e("code",null,"TemplateRenderer"),l(" from "),e("code",null,"@vuepress/utils")])],-1),B=e("p",null,"详情：",-1),A=e("p",null,"指定构建时使用的 HTML 模板渲染函数。",-1),E=e("p",null,"参考：",-1),F=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev","aria-hidden":"true"},"#"),l(" templateDev")],-1),P=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),k=e("p",null,"详情：",-1),T=e("p",null,"指定开发时使用的 HTML 模板。",-1),N=e("p",null,"参考：",-1);function R(I,L){const p=t("NpmBadge"),s=t("RouterLink");return o(),r("div",null,[u,n(p,{package:"@vuepress/core"}),e("p",null,[l("VuePress 主题同样是一个插件，因此主题 API 可以接收 "),n(s,{to:"/reference/plugin-api.html"},{default:a(()=>[l("插件 API")]),_:1}),l(" 的所有选项，但存在以下差别：")]),h,e("ul",null,[m,D,e("li",null,[_,e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#plugins"},{default:a(()=>[l("配置 > plugins")]),_:1})])])])]),f,e("ul",null,[y,e("li",null,[v,C,e("p",null,[l("它会覆盖 "),n(s,{to:"/reference/config.html#templatebuild"},{default:a(()=>[l("templateBuild")]),_:1}),l(" 的默认值，同时也会被用户配置覆盖。")])]),e("li",null,[b,e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#templatebuild"},{default:a(()=>[l("配置 > templateBuild")]),_:1})])])])]),g,e("ul",null,[x,e("li",null,[B,A,e("p",null,[l("它会覆盖 "),n(s,{to:"/reference/config.html#templatebuildrenderer"},{default:a(()=>[l("templateBuildRenderer")]),_:1}),l(" 的默认值，同时也会被用户配置覆盖。")])]),e("li",null,[E,e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#templatebuildrenderer"},{default:a(()=>[l("配置 > templateBuildRenderer")]),_:1})])])])]),F,e("ul",null,[P,e("li",null,[k,T,e("p",null,[l("它会覆盖 "),n(s,{to:"/reference/config.html#templatedev"},{default:a(()=>[l("templateDev")]),_:1}),l(" 的默认值，但是也会被用户配置覆盖。")])]),e("li",null,[N,e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#templatedev"},{default:a(()=>[l("配置 > templateDev")]),_:1})])])])])])}const M=i(c,[["render",R],["__file","theme-api.html.vue"]]);export{M as default};
