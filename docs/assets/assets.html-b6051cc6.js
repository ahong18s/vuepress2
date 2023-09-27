import{_ as p}from"./hero-91b5dea0.js";import{_ as r,r as c,o as i,c as t,a,b as s,d as l,w as e,e as o}from"./app-27037075.js";const d={},D=o(`<h1 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h1><h2 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h2><p>你可以在你的 Markdown 内容中使用相对路径来引用静态资源：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">图片</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">./image.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">图片</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">image.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般情况下，我们推荐你使用这种方式来引用图片，因为人们通常会把图片放在引用它的 Markdown 文件附近。</p><h2 id="public-文件" tabindex="-1"><a class="header-anchor" href="#public-文件" aria-hidden="true">#</a> Public 文件</h2><p>你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。</p>`,9),u=a("code",null,".vuepress/public",-1),y=o(`<p>在下列这些情况中，你可能会用到它：</p><ul><li>你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。</li><li>你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。</li><li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li></ul><p>以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">docs</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#DCDCAA;">├─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">.vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">   |  </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">public</span></span>
<span class="line"><span style="color:#D4D4D4;">   |     </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">images</span></span>
<span class="line"><span style="color:#D4D4D4;">   |        </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">hero.png</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># &lt;- Logo 文件</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">guide</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">assets.md</span><span style="color:#D4D4D4;">       </span><span style="color:#6A9955;"># &lt;- 我们在这里</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以这样在当前页面引用 Logo ：</p><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p><img src="`+p+'" alt="VuePress Logo"></p><h3 id="base-helper" tabindex="-1"><a class="header-anchor" href="#base-helper" aria-hidden="true">#</a> Base Helper</h3>',10),m=a("code",null,"https://foo.github.io/bar/",-1),v=a("code",null,"'/bar/'",-1),b=a("code",null,"https://foo.github.io/bar/images/hero.png",-1),h=o('<p>在大多数情况下，你不需要担心这些 Public 文件的引用路径，因为 VuePress 会自动帮你处理 <code>base</code> 前缀：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">&lt;!-- 你不需要给 `/images/hero.png` 手动添加 `/bar/` 前缀 --&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',2),C=a("code",null,"base",-1),g=a("code",null,"base",-1),E=o(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">:src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;withBase(logoPath)&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">withBase</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">logoPath</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/images/hero.png&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以通过 <code>$withBase</code> 来直接使用这个工具函数：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&lt;img :src=&quot;$withBase(&#39;/images/hero.png&#39;)&quot; alt=&quot;VuePress Logo&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="依赖包和路径别名" tabindex="-1"><a class="header-anchor" href="#依赖包和路径别名" aria-hidden="true">#</a> 依赖包和路径别名</h2><p>尽管这不是常见用法，但是你可以从依赖包中引用图片：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">package-name</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 Markdown 会默认将图片链接视为相对链接，你需要使用 <code>&lt;img&gt;</code> 标签:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&lt;img src=&quot;package-name/image.png&quot; alt=&quot;来自依赖包的图片&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在配置文件中设置的路径别名也同样支持：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/some/dir&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&lt;img src=&quot;@alias/image.png&quot; alt=&quot;来自路径别名的图片&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),k={class:"custom-container tip"},_=a("p",{class:"custom-container-title"},"提示",-1);function x(f,A){const n=c("RouterLink");return i(),t("div",null,[D,a("p",null,[s("默认的 Public 目录是 "),u,s(" ，可以通过 "),l(n,{to:"/reference/config.html#public"},{default:e(()=>[s("public")]),_:1}),s(" 配置项来修改。")]),y,a("p",null,[s("如果你的网站部署在非根路径下，例如 "),m,s(" ，那么你应该把 "),l(n,{to:"/reference/config.html#base"},{default:e(()=>[s("base")]),_:1}),s(" 设置为 "),v,s("。显然，此时你的 Public 文件会被部署在 "),b,s(" 这样的链接下。")]),h,a("p",null,[s("然而，有些情况下，你可能会有一些指向 Public 文件的动态路径，尤其是在你开发一个自定义主题的时候。在这种情况下， "),C,s(" 无法被自动处理。为了解决这个问题，VuePress 提供了 "),l(n,{to:"/reference/client-api.html#withbase"},{default:e(()=>[s("withBase")]),_:1}),s(" 工具函数，它可以帮助你添加 "),g,s(" 前缀：")]),E,a("div",k,[_,a("p",null,[s("配置参考： "),l(n,{to:"/reference/plugin-api.html#alias"},{default:e(()=>[s("alias")]),_:1})])])])}const P=r(d,[["render",x],["__file","assets.html.vue"]]);export{P as default};
