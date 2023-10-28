import{_ as o,r as a,o as p,c as r,d as n,a as e,b as l,w as t,e as d}from"./app-d19e66db.js";const c={},u=e("h1",{id:"theme-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-api","aria-hidden":"true"},"#"),l(" Theme API")],-1),h=d(`<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options" aria-hidden="true">#</a> Basic Options</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the theme.</p><p>It should follow the naming convention, and ensure consistency with the package name when publishing to NPM:</p><ul><li>Non-scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>Details:</p><p>A theme should never be used multiple times, so this option is not supported in theme API.</p></li></ul><h2 id="theme-specific-options" tabindex="-1"><a class="header-anchor" href="#theme-specific-options" aria-hidden="true">#</a> Theme Specific Options</h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><ul><li><p>Type: <code>Theme</code></p></li><li><p>Details:</p><p>The theme to inherit.</p><p>All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme directly. Theme specific options will override according to following rules:</p><ul><li><a href="#plugins">plugins</a>: When a same plugin is used in both child and parent theme, if the plugin does not support to be used multiple times, only the one used in the child theme will take effect.</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>: Child theme templates will override parent theme templates.</li></ul><p>Multi-level inheritance is supported, i.e. theme B could be extended from theme A, and then theme C could be extended from theme B. In other words, a theme could have a parent theme, a grandparent theme and so on.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// inherit the default theme</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">extends:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>`,10),m=e("li",null,[e("p",null,[l("Type: "),e("code",null,"(Plugin | Plugin[])[]")])],-1),f=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use in the theme.")],-1),D=e("p",null,"Also see:",-1),_=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild","aria-hidden":"true"},"#"),l(" templateBuild")],-1),y=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),v=e("p",null,"Details:",-1),b=e("p",null,"Specify the path of the HTML template for build.",-1),g=e("p",null,"Also see:",-1),C=e("h3",{id:"templatebuildrenderer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuildrenderer","aria-hidden":"true"},"#"),l(" templateBuildRenderer")],-1),x=e("li",null,[e("p",null,[l("Type: "),e("code",null,"TemplateRenderer")])],-1),T=e("p",null,"Details:",-1),w=e("p",null,"Specify the HTML template renderer to be used for build.",-1),A=e("p",null,"Also see:",-1),B=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev","aria-hidden":"true"},"#"),l(" templateDev")],-1),S=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),E=e("p",null,"Details:",-1),k=e("p",null,"Specify the HTML template for dev.",-1),P=e("p",null,"Also see:",-1);function I(F,N){const i=a("NpmBadge"),s=a("RouterLink");return p(),r("div",null,[u,n(i,{package:"@vuepress/core"}),e("p",null,[l("VuePress theme also works as a plugin, so Theme API can accept all the options of "),n(s,{to:"/en-US/reference/plugin-api.html"},{default:t(()=>[l("Plugin API")]),_:1}),l(" with following differences.")]),h,e("ul",null,[m,f,e("li",null,[D,e("ul",null,[e("li",null,[n(s,{to:"/en-US/reference/config.html#plugins"},{default:t(()=>[l("Config > plugins")]),_:1})])])])]),_,e("ul",null,[y,e("li",null,[v,b,e("p",null,[l("It would override the default value of "),n(s,{to:"/en-US/reference/config.html#templatebuild"},{default:t(()=>[l("templateBuild")]),_:1}),l(", and could be overridden by user config.")])]),e("li",null,[g,e("ul",null,[e("li",null,[n(s,{to:"/en-US/reference/config.html#templatebuild"},{default:t(()=>[l("Config > templateBuild")]),_:1})])])])]),C,e("ul",null,[x,e("li",null,[T,w,e("p",null,[l("It would override the default value of "),n(s,{to:"/en-US/reference/config.html#templatebuildrenderer"},{default:t(()=>[l("templateBuildRenderer")]),_:1}),l(", and could be overridden by user config.")])]),e("li",null,[A,e("ul",null,[e("li",null,[n(s,{to:"/en-US/reference/config.html#templatebuildrenderer"},{default:t(()=>[l("Config > templateBuildRenderer")]),_:1})])])])]),B,e("ul",null,[S,e("li",null,[E,k,e("p",null,[l("It would override the default value of "),n(s,{to:"/en-US/reference/config.html#templatedev"},{default:t(()=>[l("templateDev")]),_:1}),l(", but could be overridden by user config.")])]),e("li",null,[P,e("ul",null,[e("li",null,[n(s,{to:"/en-US/reference/config.html#templatedev"},{default:t(()=>[l("Config > templateDev")]),_:1})])])])])])}const R=o(c,[["render",I],["__file","theme-api.html.vue"]]);export{R as default};
