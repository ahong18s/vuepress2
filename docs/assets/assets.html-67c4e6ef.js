import{_ as p}from"./hero-91b5dea0.js";import{_ as t,r,o as i,c,a,b as s,d as n,w as l,e as o}from"./app-d19e66db.js";const d={},D=o(`<h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h1><h2 id="relative-urls" tabindex="-1"><a class="header-anchor" href="#relative-urls" aria-hidden="true">#</a> Relative URLs</h2><p>You can reference any assets using relative URLs in your Markdown content:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">An image</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">./image.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">An image</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">image.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is generally the suggested way to import images, as users usually place images near the Markdown file that references them.</p><h2 id="public-files" tabindex="-1"><a class="header-anchor" href="#public-files" aria-hidden="true">#</a> Public Files</h2><p>You can put some static assets inside public directory, and they will be copied to the root of the generated directory.</p>`,9),u=a("code",null,".vuepress/public",-1),y=o(`<p>It would be useful in some cases:</p><ul><li>You may need to provide static assets that are not directly referenced in any of your Markdown files, for example, favicon and PWA icons.</li><li>You may need to serve some shared static assets, which may even be referenced outside your site, for example, logo images.</li><li>You may want to reference images using absolute URLs in your Markdown content.</li></ul><p>Take our documentation source files as an example, we are putting the logo of VuePress inside the public directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">docs</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#DCDCAA;">├─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">.vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">   |  </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">public</span></span>
<span class="line"><span style="color:#D4D4D4;">   |     </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">images</span></span>
<span class="line"><span style="color:#D4D4D4;">   |        </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">hero.png</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># &lt;- Logo file</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">guide</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">└─</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">assets.md</span><span style="color:#D4D4D4;">       </span><span style="color:#6A9955;"># &lt;- Here we are</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can reference our logo in current page like this:</p><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p><img src="`+p+'" alt="VuePress Logo"></p><h3 id="base-helper" tabindex="-1"><a class="header-anchor" href="#base-helper" aria-hidden="true">#</a> Base Helper</h3>',10),m=a("code",null,"https://foo.github.io/bar/",-1),h=a("code",null,"'/bar/'",-1),v=a("code",null,"https://foo.github.io/bar/images/hero.png",-1),b=o('<p>In most cases, you don&#39;t need to worry about the reference path of those public files, as VuePress will automatically handle <code>base</code> for you:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">&lt;!-- you don&#39;t need to prepend `/bar/` to `/images/hero.png` manually --&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',2),g=a("code",null,"base",-1),C=a("code",null,"base",-1),f=o(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">:src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;withBase(logoPath)&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">withBase</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">logoPath</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/images/hero.png&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also access the helper by <code>$withBase</code> directly:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&lt;img :src=&quot;$withBase(&#39;/images/hero.png&#39;)&quot; alt=&quot;VuePress Logo&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="packages-and-path-aliases" tabindex="-1"><a class="header-anchor" href="#packages-and-path-aliases" aria-hidden="true">#</a> Packages and Path Aliases</h2><p>Although it is not a common usage, you can reference images from dependent packages:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">package-name</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Since markdown image syntax regards image links as relative paths by default, you need to use <code>&lt;img&gt;</code> tag:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&lt;img src=&quot;package-name/image.png&quot; alt=&quot;Image from dependency&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The path aliases that set in config file are also supported:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/some/dir&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">&lt;img src=&quot;@alias/image.png&quot; alt=&quot;Image from path alias&quot;&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),E={class:"custom-container tip"},k=a("p",{class:"custom-container-title"},"prompt",-1);function _(x,w){const e=r("RouterLink");return i(),c("div",null,[D,a("p",null,[s("The default public directory is "),u,s(", which can be changed by "),n(e,{to:"/en-US/reference/config.html#public"},{default:l(()=>[s("public")]),_:1}),s(" option.")]),y,a("p",null,[s("If your site is deployed to a non-root URL, for example, "),m,s(", then the "),n(e,{to:"/en-US/reference/config.html#base"},{default:l(()=>[s("base")]),_:1}),s(" should be set to "),h,s(". Obviously, your public files would be served like "),v,s(" after deployment.")]),b,a("p",null,[s("However, sometimes you may have some dynamical links referencing public files, especially when you are authoring a custom theme. In such case, the "),g,s(" could not be handled automatically. To help with that, VuePress provides a "),n(e,{to:"/en-US/reference/client-api.html#withbase"},{default:l(()=>[s("withBase")]),_:1}),s(" helper to prepend "),C,s(" for you:")]),f,a("div",E,[k,a("p",null,[s("Config reference: "),n(e,{to:"/en-US/reference/plugin-api.html#alias"},{default:l(()=>[s("alias")]),_:1})])])])}const q=t(d,[["render",_],["__file","assets.html.vue"]]);export{q as default};
