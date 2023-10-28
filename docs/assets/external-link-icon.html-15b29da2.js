import{_ as t,r as a,o as c,c as r,d as e,a as n,b as s,w as d,e as l}from"./app-d19e66db.js";const D={},u=n("h1",{id:"external-link-icon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#external-link-icon","aria-hidden":"true"},"#"),s(" external-link-icon")],-1),y=l(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@vuepress/plugin-external-link-icon@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">externalLinkIconPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-external-link-icon&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { openInNewWindow: string }&gt;</code></p></li><li><p>Details:</p><p>The a11y text of the external link icon in different locales.</p><p>If this option is not specified, it will fallback to default text.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">openInNewWindow:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;open in new window&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">openInNewWindow:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;在新窗口打开&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h=l(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon" aria-hidden="true">#</a> externalLinkIcon</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether to append an external link icon to external links in current page.</p></li></ul><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the external link icon via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--external-link-icon-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#aaa</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><h3 id="externallinkicon-1" tabindex="-1"><a class="header-anchor" href="#externallinkicon-1" aria-hidden="true">#</a> ExternalLinkIcon</h3><ul><li><p>Details:</p><p>This plugin will register a <code>&lt;ExternalLinkIcon /&gt;</code> component globally, and you can use it without any props.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>This component is mainly used for theme development. You don&#39;t need to use it directly in most cases.</p></div>`,10);function v(m,b){const i=a("NpmBadge"),o=a("ExternalLinkIcon"),p=a("RouterLink");return c(),r("div",null,[u,e(i,{package:"@vuepress/plugin-external-link-icon"}),n("p",null,[s("This plugin will add an icon to the external link in your markdown content, i.e. "),e(o)]),y,n("ul",null,[n("li",null,[s("Also see: "),n("ul",null,[n("li",null,[e(p,{to:"/en-US/guide/i18n.html"},{default:d(()=>[s("Guide > I18n")]),_:1})])])])]),h])}const C=t(D,[["render",v],["__file","external-link-icon.html.vue"]]);export{C as default};
