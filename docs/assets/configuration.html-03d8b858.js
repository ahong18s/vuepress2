import{_ as p,r as c,o as i,c as r,a as n,b as s,d as l,w as a,e as o}from"./app-27037075.js";const t={},d=o(`<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 <code>.vuepress</code> 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">├─ docs</span></span>
<span class="line"><span style="color:#D4D4D4;">│  ├─ .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">│  │  └─ config.js</span></span>
<span class="line"><span style="color:#D4D4D4;">│  └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ .gitignore</span></span>
<span class="line"><span style="color:#D4D4D4;">└─ package.json</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress 站点的基本配置文件是 <code>.vuepress/config.js</code> ，但也同样支持 TypeScript 配置文件。你可以使用 <code>.vuepress/config.ts</code> 来得到更好的类型提示。</p><p>具体而言，我们对于配置文件的路径有着约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>`,7),D=n("code",null,"--config",-1),u=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">vuepress</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">docs</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--config</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">my-config.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个基础的配置文件是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;你好， VuePress ！&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;这是我的第一个 VuePress 站点&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"提示",-1),m=o(`<h2 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件" aria-hidden="true">#</a> 客户端配置文件</h2><p>在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress 通过客户端配置文件来支持这种需求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">├─ docs</span></span>
<span class="line"><span style="color:#D4D4D4;">│  ├─ .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">│  │  ├─ client.js   &lt;--- 客户端配置文件</span></span>
<span class="line"><span style="color:#D4D4D4;">│  │  └─ config.js   &lt;--- 配置文件</span></span>
<span class="line"><span style="color:#D4D4D4;">│  └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ .gitignore</span></span>
<span class="line"><span style="color:#D4D4D4;">└─ package.json</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，我们也有关于客户端配置文件的路径约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>一个基础的客户端配置文件是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),C={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"提示",-1),h=n("p",null,"和配置文件不同，客户端配置文件不能通过命令行接口的选项来指定。",-1);function f(g,E){const e=c("RouterLink");return i(),r("div",null,[d,n("p",null,[s("你也可以通过 "),l(e,{to:"/reference/cli.html"},{default:a(()=>[s("命令行接口")]),_:1}),s(" 的 "),D,s(" 选项来指定配置文件：")]),u,n("div",v,[y,n("p",null,[s("前往 "),l(e,{to:"/reference/config.html"},{default:a(()=>[s("配置参考")]),_:1}),s(" 查看所有 VuePress 配置。")])]),m,n("div",C,[b,h,n("p",null,[s("可以前往 "),l(e,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:a(()=>[s("深入 > Cookbook > 客户端配置的使用方法")]),_:1}),s(" 来了解更多信息。")])])])}const k=p(t,[["render",f],["__file","configuration.html.vue"]]);export{k as default};
