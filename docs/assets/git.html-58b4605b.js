import{_ as c,r as s,o as r,c as d,d as a,a as n,b as e,w as o,e as l}from"./app-4042ea51.js";const u={},h=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),e(" git")],-1),m=n("p",null,"This plugin will collect git information of your pages, including the created and updated time, the contributors, etc.",-1),g=l(`<p>This plugin is mainly used to develop themes. You won&#39;t need to use it directly in most cases.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-git@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> gitPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-git&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">gitPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-repository" tabindex="-1"><a class="header-anchor" href="#git-repository" aria-hidden="true">#</a> Git Repository</h2>`,5),k={href:"https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository",target:"_blank",rel:"noopener noreferrer"},v={href:"https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="custom-container warning"><p class="custom-container-title">warning</p><p>This plugin will significantly slow down the speed of data preparation, especially when you have a lot of pages. You can consider disabling this plugin in <code>dev</code> mode to get better development experience.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="createdtime" tabindex="-1"><a class="header-anchor" href="#createdtime" aria-hidden="true">#</a> createdTime</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page created time or not.</p></li></ul><h3 id="updatedtime" tabindex="-1"><a class="header-anchor" href="#updatedtime" aria-hidden="true">#</a> updatedTime</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page updated time or not.</p></li></ul><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page contributors or not.</p></li></ul><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="gitinclude" tabindex="-1"><a class="header-anchor" href="#gitinclude" aria-hidden="true">#</a> gitInclude</h3><ul><li><p>Type: <code>string[]</code></p></li><li><p>Details:</p><p>An array of relative paths to be included when calculating page data.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">gitInclude</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> relative/path/to/file1
  <span class="token punctuation">-</span> relative/path/to/file2</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-data" tabindex="-1"><a class="header-anchor" href="#page-data" aria-hidden="true">#</a> Page Data</h2><p>This plugin will add a <code>git</code> field to page data.</p><p>After using this plugin, you can get the collected git information in page data:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GitPluginPageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-git&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token generic-function"><span class="token function">usePageData</span><span class="token generic class-name"><span class="token operator">&lt;</span>GitPluginPageData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>git<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-createdtime" tabindex="-1"><a class="header-anchor" href="#git-createdtime" aria-hidden="true">#</a> git.createdTime</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Details:</p><p>Unix timestamp in milliseconds of the first commit of the page.</p><p>This attribute would take the minimum of the first commit timestamps of the current page and the files listed in <a href="#gitinclude">gitInclude</a>.</p></li></ul><h3 id="git-updatedtime" tabindex="-1"><a class="header-anchor" href="#git-updatedtime" aria-hidden="true">#</a> git.updatedTime</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Details:</p><p>Unix timestamp in milliseconds of the last commit of the page.</p><p>This attribute would take the maximum of the last commit timestamps of the current page and the files listed in <a href="#gitinclude">gitInclude</a>.</p></li></ul><h3 id="git-contributors" tabindex="-1"><a class="header-anchor" href="#git-contributors" aria-hidden="true">#</a> git.contributors</h3><ul><li>Type: <code>GitContributor[]</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GitContributor</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span>
  commits<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>The contributors information of the page.</p><p>This attribute would also include contributors to the files listed in <a href="#gitinclude">gitInclude</a>.</p></li></ul>`,24);function f(y,w){const p=s("NpmBadge"),t=s("RouterLink"),i=s("ExternalLinkIcon");return r(),d("div",null,[h,a(p,{package:"@vuepress/plugin-git"}),m,n("p",null,[e("The "),a(t,{to:"/en-US/reference/default-theme/config.html#lastupdated"},{default:o(()=>[e("lastUpdated")]),_:1}),e(" and "),a(t,{to:"/en-US/reference/default-theme/config.html#contributors"},{default:o(()=>[e("contributors")]),_:1}),e(" of default theme is powered by this plugin.")]),g,n("p",null,[e("This plugin requires your project to be inside a "),n("a",k,[e("Git Repository"),a(i)]),e(", so that it can collect information from the commit history.")]),n("p",null,[e("You should ensure all commits are available when building your site. For example, CI workflows usually clone your repository with "),n("a",v,[e("--depth 1"),a(i)]),e(" to avoid fetching all commits, so you should disable the behavior to make this plugin work properly in CI.")]),b])}const _=c(u,[["render",f],["__file","git.html.vue"]]);export{_ as default};