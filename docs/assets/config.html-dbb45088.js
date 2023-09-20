import{_ as r,r as d,o as u,c,d as i,a as e,w as n,b as l,e as o}from"./app-8ceb8f5d.js";const p={},h=e("h1",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),l(" Config")],-1),f=e("h2",{id:"site-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#site-config","aria-hidden":"true"},"#"),l(" Site Config")],-1),m=e("h3",{id:"base",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base","aria-hidden":"true"},"#"),l(" base")],-1),g=o("<li><p>Type: <code>string</code></p></li><li><p>Default: <code>/</code></p></li><li><p>Details:</p><p>The base URL the site will be deployed at.</p><p>You will need to set this if you plan to deploy your site under a sub path. It should always start and end with a slash. For example, if you plan to deploy your site to GitHub pages at <code>https://foo.github.io/bar/</code>, then you should set <code>base</code> to <code>&quot;/bar/&quot;</code>.</p><p>The <code>base</code> is automatically prepended to all the URLs that start with <code>/</code> in other options, so you only need to specify it once.</p><p>Notice that <code>base</code> should be an absolute URL pathname starting and ending with <code>/</code> .</p></li>",3),_=e("p",null,"Also see:",-1),b=e("h3",{id:"lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),l(" lang")],-1),k=o("<li><p>Type: <code>string</code></p></li><li><p>Default: <code>en-US</code></p></li><li><p>Details:</p><p>Language for the site.</p><p>This will be the <code>lang</code> attribute of the <code>&lt;html&gt;</code> tag in the rendered HTML.</p><p>This can be specified in different locales.</p></li>",3),w=e("p",null,"Also see:",-1),v=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),y=o('<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;&#39;</code></p></li><li><p>Details:</p><p>Title for the site.</p><p>This will be the suffix for all page titles, and displayed in the navbar in the default theme.</p><p>This can be specified in different locales.</p></li><li><p>Also see:</p><ul><li><a href="#locales">Config &gt; locales</a></li></ul></li></ul><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>',3),x=o("<li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;&#39;</code></p></li><li><p>Details:</p><p>Description for the site.</p><p>This will be the <code>content</code> attribute of <code>&lt;meta name=&quot;description&quot; /&gt;</code> tag in the rendered HTML, which will be overrode by the <code>description</code> field of page frontmatter.</p><p>This can be specified in different locales.</p></li>",3),D=e("p",null,"Also see:",-1),T=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),S=o(`<h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h3><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Default: <code>[]</code></p></li><li><p>Details:</p><p>Extra tags to inject into the <code>&lt;head&gt;</code> tag in the rendered HTML.</p><p>You can specify each tag in the form of <code>[tagName, { attrName: attrValue }, innerHTML?]</code>.</p><p>This can be specified in different locales.</p></li><li><p>Example:</p><p>To add a custom favicon:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  head: [[&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;/images/logo.png&#39; }]],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rendered as：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;head&gt;
  &lt;link rel=&quot;icon&quot; href=&quot;/images/logo.png&quot; /&gt;
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),A=e("h3",{id:"locales",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),l(" locales")],-1),U=o('<li><p>Type: <code>{ [path: string]: Partial&lt;SiteLocaleData&gt; }</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>Specify locales for i18n support.</p><p>Acceptable fields:</p><ul><li><a href="#lang">lang</a></li><li><a href="#title">title</a></li><li><a href="#description">description</a></li><li><a href="#head">head</a></li></ul></li>',3),C=e("p",null,"Also see:",-1),L=e("h2",{id:"theme-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-config","aria-hidden":"true"},"#"),l(" Theme Config")],-1),O=e("h3",{id:"theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),l(" theme")],-1),B=e("li",null,[e("p",null,[l("Type: "),e("code",null,"Theme")])],-1),E=e("li",null,[e("p",null,"Details:"),e("p",null,"Set the theme of your site."),e("p",null,"If this option is not set, the default theme will be used.")],-1),M=e("p",null,"Also see:",-1),G=e("h2",{id:"bundler-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundler-config","aria-hidden":"true"},"#"),l(" Bundler Config")],-1),I=e("h3",{id:"bundler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundler","aria-hidden":"true"},"#"),l(" bundler")],-1),N=o("<li><p>Type: <code>Bundler</code></p></li><li><p>Details:</p><p>Set the bundler of your site.</p><p>If this option is not set, the default bundler will be used:</p><ul><li>With <code>vuepress</code> or <code>vuepress-vite</code>, the default bundler is vite.</li><li>With <code>vuepress-webpack</code>, the default bundler is webpack.</li></ul></li>",2),q=e("p",null,"Also see:",-1),H=o('<h2 id="common-config" tabindex="-1"><a class="header-anchor" href="#common-config" aria-hidden="true">#</a> Common Config</h2><h3 id="dest" tabindex="-1"><a class="header-anchor" href="#dest" aria-hidden="true">#</a> dest</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/dist`</code></p></li><li><p>Details:</p><p>Specify the output directory for <code>vuepress build</code> command.</p></li></ul><h3 id="temp" tabindex="-1"><a class="header-anchor" href="#temp" aria-hidden="true">#</a> temp</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/.temp`</code></p></li><li><p>Details:</p><p>Specify the directory for temporary files.</p></li></ul><div class="custom-container warning"><p class="custom-container-title">warning</p><p>Since VuePress will load temp files during dev and build, the temp directory should be inside project root to resolve dependencies correctly.</p></div><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/.cache`</code></p></li><li><p>Details:</p><p>Specify the directory for cache files.</p></li></ul><h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3>',9),R=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),j=e("li",null,[e("p",null,[l("Default: "),e("code",null,"`${sourceDir}/.vuepress/public`")])],-1),V=e("li",null,[e("p",null,"Details:"),e("p",null,"Specify the directory for public files.")],-1),F=e("p",null,"Also see:",-1),W=e("h3",{id:"debug",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debug","aria-hidden":"true"},"#"),l(" debug")],-1),Y=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),$=e("li",null,[e("p",null,[l("Default: "),e("code",null,"false")])],-1),z=e("p",null,"Details:",-1),J=e("p",null,"Enable debug mode or not.",-1),K={href:"https://github.com/visionmedia/debug",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"DEBUG=vuepress*",-1),X=o('<h3 id="pagepatterns" tabindex="-1"><a class="header-anchor" href="#pagepatterns" aria-hidden="true">#</a> pagePatterns</h3><ul><li><p>Type: <code>string[]</code></p></li><li><p>Default: <code>[&#39;**/*.md&#39;, &#39;!.vuepress&#39;, &#39;!node_modules&#39;]</code></p></li><li><p>Details:</p><p>Specify the patterns of files you want to be resolved as pages. The patterns are relative to the source directory.</p></li></ul><h3 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h3>',3),Z=o("<li><p>Type: <code>string | null</code></p></li><li><p>Default: <code>null</code></p></li><li><p>Details:</p><p>Specify the pattern to generate permalink.</p><p>This will be overrode by the <code>permalinkPattern</code> field of page frontmatter.</p></li>",3),ee=e("p",null,"Also see:",-1),le=o('<h2 id="dev-config" tabindex="-1"><a class="header-anchor" href="#dev-config" aria-hidden="true">#</a> Dev Config</h2><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> host</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;0.0.0.0&#39;</code></p></li><li><p>Details:</p><p>Specify the host to use for the dev server.</p></li></ul><h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> port</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>8080</code></p></li><li><p>Details:</p><p>Specify the port to use for the dev server.</p></li></ul><h3 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Whether to open the browser after dev-server had been started.</p></li></ul><h3 id="templatedev" tabindex="-1"><a class="header-anchor" href="#templatedev" aria-hidden="true">#</a> templateDev</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;@vuepress/client/templates/dev.html&#39;</code></p></li><li><p>Details:</p><p>Specify the path of the HTML template to be used for dev.</p></li></ul><h2 id="build-config" tabindex="-1"><a class="header-anchor" href="#build-config" aria-hidden="true">#</a> Build Config</h2><h3 id="shouldpreload" tabindex="-1"><a class="header-anchor" href="#shouldpreload" aria-hidden="true">#</a> shouldPreload</h3><ul><li><p>Type: <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>A function to control what files should have <code>&lt;link rel=&quot;preload&quot;&gt;</code> resource hints generated. Set to <code>true</code> or <code>false</code> to enable or disable totally.</p><p>By default, only those files that are required by current page will be preloaded. So you can keep it <code>true</code> in most cases.</p></li></ul><h3 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a> shouldPrefetch</h3><ul><li><p>Type: <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>A function to control what files should have <code>&lt;link rel=&quot;prefetch&quot;&gt;</code> resource hints generated. Set to <code>true</code> or <code>false</code> to enable or disable for all files.</p><p>If you set it to <code>true</code>, all files that required by other pages will be prefetched. This is good for small sites, which will speed up the navigation, but it might not be a good idea if you have lots of pages in your site.</p></li></ul><h3 id="templatebuild" tabindex="-1"><a class="header-anchor" href="#templatebuild" aria-hidden="true">#</a> templateBuild</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;@vuepress/client/templates/build.html&#39;</code></p></li><li><p>Details:</p><p>Specify the path of the HTML template to be used for build.</p></li></ul><h3 id="templatebuildrenderer" tabindex="-1"><a class="header-anchor" href="#templatebuildrenderer" aria-hidden="true">#</a> templateBuildRenderer</h3><ul><li><p>Type: <code>TemplateRenderer</code></p></li><li><p>Default: <code>templateRenderer</code></p></li><li><p>Details:</p><p>Specify the HTML template renderer to be used for build.</p></li></ul><h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config" aria-hidden="true">#</a> Markdown Config</h2><h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h3>',20),ie=e("li",null,[e("p",null,[l("Type: "),e("code",null,"MarkdownOptions")])],-1),te=e("li",null,[e("p",null,[l("Default: "),e("code",null,"{}")])],-1),ne=e("p",null,"Details:",-1),oe=e("p",null,"Configure VuePress built-in Markdown syntax extensions.",-1),ae={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},de=e("p",null,"Also see:",-1),se={href:"https://github.com/markdown-it/markdown-it#init-with-presets-and-options",target:"_blank",rel:"noopener noreferrer"},re=o(`<h3 id="markdown-anchor" tabindex="-1"><a class="header-anchor" href="#markdown-anchor" aria-hidden="true">#</a> markdown.anchor</h3><ul><li><p>Type: <code>AnchorPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const defaultOptions = {
  level: [1, 2, 3, 4, 5, 6],
  permalink: anchorPlugin.permalink.ariaHidden({
    class: &#39;header-anchor&#39;,
    symbol: &#39;#&#39;,
    space: true,
    placement: &#39;before&#39;,
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),ue=e("p",null,"Details:",-1),ce={href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"},pe=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),he=e("p",null,"Also see:",-1),fe=o('<h3 id="markdown-assets" tabindex="-1"><a class="header-anchor" href="#markdown-assets" aria-hidden="true">#</a> markdown.assets</h3><ul><li><p>Type: <code>AssetsPluginOptions | false</code></p></li><li><p>Details:</p><p>Options for VuePress built-in markdown-it assets plugin.</p><p>Set to <code>false</code> to disable this plugin.</p></li></ul><div class="custom-container danger"><p class="custom-container-title">danger</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-code" tabindex="-1"><a class="header-anchor" href="#markdown-code" aria-hidden="true">#</a> markdown.code</h3>',4),me=e("li",null,[e("p",null,[l("Type: "),e("code",null,"CodePluginOptions | false")])],-1),ge=e("li",null,[e("p",null,"Details:"),e("p",null,"Options for VuePress built-in markdown-it code plugin."),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),_e=e("p",null,"Also see:",-1),be=e("h4",{id:"markdown-code-highlightlines",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-highlightlines","aria-hidden":"true"},"#"),l(" markdown.code.highlightLines")],-1),ke=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),we=e("li",null,[e("p",null,[l("Default: "),e("code",null,"true")])],-1),ve=e("li",null,[e("p",null,"Details:"),e("p",null,"Enable code line highlighting or not.")],-1),ye=e("p",null,"Also see:",-1),xe=e("h4",{id:"markdown-code-linenumbers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-linenumbers","aria-hidden":"true"},"#"),l(" markdown.code.lineNumbers")],-1),De=o("<li><p>Type: <code>boolean | number</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Configure code line numbers.</p><ul><li>A <code>boolean</code> value is to enable line numbers or not.</li><li>A <code>number</code> value is the minimum number of lines to enable line numbers. For example, if you set it to <code>4</code>, line numbers will only be enabled when your code block has at least 4 lines of code.</li></ul></li>",3),Te=e("p",null,"Also see:",-1),Se=o('<h4 id="markdown-code-prewrapper" tabindex="-1"><a class="header-anchor" href="#markdown-code-prewrapper" aria-hidden="true">#</a> markdown.code.preWrapper</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Enable the extra wrapper of the <code>&lt;pre&gt;</code> tag or not.</p><p>The wrapper is required by the <code>highlightLines</code> and <code>lineNumbers</code>. That means, if you disable <code>preWrapper</code>, the line highlighting and line numbers will also be disabled.</p></li></ul>',2),Pe={class:"custom-container tip"},Ae=e("p",{class:"custom-container-title"},"prompt",-1),Ue={href:"https://prismjs.com/plugins/line-highlight/",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://prismjs.com/plugins/line-numbers/",target:"_blank",rel:"noopener noreferrer"},Le=e("h4",{id:"markdown-code-vpre-block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-vpre-block","aria-hidden":"true"},"#"),l(" markdown.code.vPre.block")],-1),Oe=o("<li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Add <code>v-pre</code> directive to <code>&lt;pre&gt;</code> tag of code block or not.</p></li>",3),Be=e("p",null,"Also see:",-1),Ee=e("h4",{id:"markdown-code-vpre-inline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-vpre-inline","aria-hidden":"true"},"#"),l(" markdown.code.vPre.inline")],-1),Me=o("<li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Add <code>v-pre</code> directive to <code>&lt;code&gt;</code> tag of inline code or not.</p></li>",3),Ge=e("p",null,"Also see:",-1),Ie=e("h3",{id:"markdown-component",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-component","aria-hidden":"true"},"#"),l(" markdown.component")],-1),Ne=e("li",null,[e("p",null,[l("Type: "),e("code",null,"undefined | false")])],-1),qe=e("p",null,"Details:",-1),He={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component",target:"_blank",rel:"noopener noreferrer"},Re=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),je=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"danger"),e("p",null,"You should not configure it unless you understand what it is for.")],-1),Ve=e("h3",{id:"markdown-emoji",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-emoji","aria-hidden":"true"},"#"),l(" markdown.emoji")],-1),Fe=e("li",null,[e("p",null,[l("Type: "),e("code",null,"EmojiPluginOptions | false")])],-1),We=e("p",null,"Details:",-1),Ye={href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},$e=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),ze=e("p",null,"Also see:",-1),Je=e("h3",{id:"markdown-frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-frontmatter","aria-hidden":"true"},"#"),l(" markdown.frontmatter")],-1),Ke=e("li",null,[e("p",null,[l("Type: "),e("code",null,"FrontmatterPluginOptions | false")])],-1),Qe=e("p",null,"Details:",-1),Xe={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter",target:"_blank",rel:"noopener noreferrer"},Ze=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),el=e("p",null,"Also see:",-1),ll=o(`<div class="custom-container danger"><p class="custom-container-title">danger</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-headers" tabindex="-1"><a class="header-anchor" href="#markdown-headers" aria-hidden="true">#</a> markdown.headers</h3><ul><li><p>Type: <code>HeadersPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const defaultOptions = {
  level: [2, 3],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),il=e("p",null,"Details:",-1),tl={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers",target:"_blank",rel:"noopener noreferrer"},nl=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),ol=e("p",null,"Also see:",-1),al=e("h3",{id:"markdown-importcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-importcode","aria-hidden":"true"},"#"),l(" markdown.importCode")],-1),dl=e("li",null,[e("p",null,[l("Type: "),e("code",null,"ImportCodePluginOptions | false")])],-1),sl=e("li",null,[e("p",null,"Details:"),e("p",null,"Options for VuePress built-in markdown-it import-code plugin."),e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")])],-1),rl=e("p",null,"Also see:",-1),ul=o('<h4 id="markdown-importcode-handleimportpath" tabindex="-1"><a class="header-anchor" href="#markdown-importcode-handleimportpath" aria-hidden="true">#</a> markdown.importCode.handleImportPath</h4><ul><li><p>Type: <code>(str: string) =&gt; string</code></p></li><li><p>Default: <code>(str) =&gt; str</code></p></li><li><p>Details:</p><p>A function to handle the import path of the import code syntax.</p></li></ul><h3 id="markdown-links" tabindex="-1"><a class="header-anchor" href="#markdown-links" aria-hidden="true">#</a> markdown.links</h3>',3),cl=o("<li><p>Type: <code>LinksPluginOptions | false</code></p></li><li><p>Details:</p><p>Options for VuePress built-in markdown-it links plugin.</p><p>It will convert internal links to <code>&lt;RouterLink&gt;</code>, and add extra attributes and icon to external links.</p><p>Set to <code>false</code> to disable this plugin.</p></li>",2),pl=e("p",null,"Also see:",-1),hl=o('<h4 id="markdown-links-internaltag" tabindex="-1"><a class="header-anchor" href="#markdown-links-internaltag" aria-hidden="true">#</a> markdown.links.internalTag</h4><ul><li><p>Type: <code>&#39;a&#39; | &#39;RouterLink&#39;</code></p></li><li><p>Default: <code>&#39;RouterLink&#39;</code></p></li><li><p>Details:</p><p>Tag for internal links.</p><p>By default, this plugin will transform internal links to <code>&lt;RouterLink&gt;</code>. You can set this option to <code>&#39;a&#39;</code> to disable this feature.</p></li></ul><h4 id="markdown-links-externalattrs" tabindex="-1"><a class="header-anchor" href="#markdown-links-externalattrs" aria-hidden="true">#</a> markdown.links.externalAttrs</h4><ul><li><p>Type: <code>Record&lt;string, string&gt;</code></p></li><li><p>Default: <code>{ target: &#39;_blank&#39;, rel: &#39;noopener noreferrer&#39; }</code></p></li><li><p>Details:</p><p>Additional attributes for external links.</p></li></ul><h3 id="markdown-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-sfc" aria-hidden="true">#</a> markdown.sfc</h3>',5),fl=e("li",null,[e("p",null,[l("Type: "),e("code",null,"SfcPluginOptions | false")])],-1),ml=e("p",null,"Details:",-1),gl={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc",target:"_blank",rel:"noopener noreferrer"},_l=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),bl=e("p",null,"Also see:",-1),kl=e("h3",{id:"markdown-slugify",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-slugify","aria-hidden":"true"},"#"),l(" markdown.slugify")],-1),wl=e("ul",null,[e("li",null,[e("p",null,[l("Type: "),e("code",null,"(str: string) => string")])]),e("li",null,[e("p",null,"Details:"),e("p",null,"The default slugify function.")])],-1),vl=e("h3",{id:"markdown-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-title","aria-hidden":"true"},"#"),l(" markdown.title")],-1),yl=e("li",null,[e("p",null,[l("Type: "),e("code",null,"undefined | false")])],-1),xl=e("p",null,"Details:",-1),Dl={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-title",target:"_blank",rel:"noopener noreferrer"},Tl=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),Sl=o(`<div class="custom-container danger"><p class="custom-container-title">danger</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-toc" tabindex="-1"><a class="header-anchor" href="#markdown-toc" aria-hidden="true">#</a> markdown.toc</h3><ul><li><p>Type: <code>TocPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const defaultOptions = {
  level: [2, 3],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Pl=e("p",null,"Details:",-1),Al={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc",target:"_blank",rel:"noopener noreferrer"},Ul=e("p",null,[l("Set to "),e("code",null,"false"),l(" to disable this plugin.")],-1),Cl=e("p",null,"Also see:",-1),Ll=e("h2",{id:"plugin-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-config","aria-hidden":"true"},"#"),l(" Plugin Config")],-1),Ol=e("h3",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),l(" plugins")],-1),Bl=e("li",null,[e("p",null,[l("Type: "),e("code",null,"(Plugin | Plugin[])[]")])],-1),El=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use."),e("p",null,"This option accepts an array, each item of which could be a plugin or an array of plugins.")],-1),Ml=e("p",null,"Also see:",-1),Gl=e("h2",{id:"plugin-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-api","aria-hidden":"true"},"#"),l(" Plugin API")],-1),Il=e("p",null,[l("User config file also works as a VuePress plugin, so all of the Plugin APIs are available except the "),e("code",null,"name"),l(" and "),e("code",null,"multiple"),l(" options.")],-1);function Nl(ql,Hl){const s=d("NpmBadge"),t=d("RouterLink"),a=d("ExternalLinkIcon");return u(),c("div",null,[h,i(s,{package:"@vuepress/cli"}),i(s,{package:"@vuepress/core"}),f,m,e("ul",null,[g,e("li",null,[_,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/assets.html#base-helper"},{default:n(()=>[l("Guide > Assets > Base Helper")]),_:1})]),e("li",null,[i(t,{to:"/en-US/guide/deployment.html"},{default:n(()=>[l("Guide > Deployment")]),_:1})])])])]),b,e("ul",null,[k,e("li",null,[w,e("ul",null,[v,e("li",null,[i(t,{to:"/en-US/reference/frontmatter.html#lang"},{default:n(()=>[l("Frontmatter > lang")]),_:1})])])])]),y,e("ul",null,[x,e("li",null,[D,e("ul",null,[T,e("li",null,[i(t,{to:"/en-US/reference/frontmatter.html#description"},{default:n(()=>[l("Frontmatter > description")]),_:1})])])])]),S,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[P,e("li",null,[i(t,{to:"/en-US/reference/frontmatter.html#head"},{default:n(()=>[l("Frontmatter > head")]),_:1})])])])]),A,e("ul",null,[U,e("li",null,[C,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/i18n.html"},{default:n(()=>[l("Guide > I18n")]),_:1})])])])]),L,O,e("ul",null,[B,E,e("li",null,[M,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/theme.html"},{default:n(()=>[l("Guide > Theme")]),_:1})]),e("li",null,[i(t,{to:"/en-US/reference/default-theme/config.html"},{default:n(()=>[l("Default Theme > Config")]),_:1})])])])]),G,I,e("ul",null,[N,e("li",null,[q,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/bundler.html"},{default:n(()=>[l("Guide > Bundler")]),_:1})]),e("li",null,[i(t,{to:"/en-US/reference/bundler/vite.html"},{default:n(()=>[l("Bundlers > Vite")]),_:1})]),e("li",null,[i(t,{to:"/en-US/reference/bundler/webpack.html"},{default:n(()=>[l("Bundlers > Webpack")]),_:1})])])])]),H,e("ul",null,[R,j,V,e("li",null,[F,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/assets.html#public-files"},{default:n(()=>[l("Guide > Assets > Public Files")]),_:1})])])])]),W,e("ul",null,[Y,$,e("li",null,[z,J,e("p",null,[l("This would be helpful for developers. Also, we are using "),e("a",K,[l("debug"),i(a)]),l(" package for debug logging, which can be enabled via "),Q,l(" environment variable.")])])]),X,e("ul",null,[Z,e("li",null,[ee,e("ul",null,[e("li",null,[i(t,{to:"/en-US/reference/frontmatter.html#permalinkpattern"},{default:n(()=>[l("Frontmatter > permalinkPattern")]),_:1})])])])]),le,e("ul",null,[ie,te,e("li",null,[ne,oe,e("p",null,[l("It accepts all options of "),e("a",ae,[l("markdown-it"),i(a)]),l(", and the following additional options.")])]),e("li",null,[de,e("ul",null,[e("li",null,[e("a",se,[l("markdown-it > Init with presets and options"),i(a)])]),e("li",null,[i(t,{to:"/en-US/guide/markdown.html#syntax-extensions"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions")]),_:1})])])])]),re,e("ul",null,[e("li",null,[ue,e("p",null,[l("Options for "),e("a",ce,[l("markdown-it-anchor"),i(a)]),l(".")]),pe]),e("li",null,[he,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#header-anchors"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Header Anchors")]),_:1})])])])]),fe,e("ul",null,[me,ge,e("li",null,[_e,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#code-blocks"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Code Blocks")]),_:1})])])])]),be,e("ul",null,[ke,we,ve,e("li",null,[ye,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#line-highlighting"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Code Blocks > Line Highlighting")]),_:1})])])])]),xe,e("ul",null,[De,e("li",null,[Te,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#line-numbers"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Code Blocks > Line Numbers")]),_:1})])])])]),Se,e("div",Pe,[Ae,e("p",null,[l("You can disable it if you want to implement them in client side. For example, "),e("a",Ue,[l("Prismjs Line Highlight"),i(a)]),l(" or "),e("a",Ce,[l("Prismjs Line Numbers"),i(a)]),l(".")])]),Le,e("ul",null,[Oe,e("li",null,[Be,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#wrap-with-v-pre"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Code Blocks > Wrap with v-pre")]),_:1})])])])]),Ee,e("ul",null,[Me,e("li",null,[Ge,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#wrap-with-v-pre"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Code Blocks > Wrap with v-pre")]),_:1})])])])]),Ie,e("ul",null,[Ne,e("li",null,[qe,e("p",null,[l("Options for "),e("a",He,[l("@mdit-vue/plugin-component"),i(a)]),l(".")]),Re])]),je,Ve,e("ul",null,[Fe,e("li",null,[We,e("p",null,[l("Options for "),e("a",Ye,[l("markdown-it-emoji"),i(a)]),l(".")]),$e]),e("li",null,[ze,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#emoji"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Emoji")]),_:1})])])])]),Je,e("ul",null,[Ke,e("li",null,[Qe,e("p",null,[l("Options for "),e("a",Xe,[l("@mdit-vue/plugin-frontmatter"),i(a)]),l(".")]),Ze]),e("li",null,[el,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/page.html#frontmatter"},{default:n(()=>[l("Guide > Page > Frontmatter")]),_:1})]),e("li",null,[i(t,{to:"/en-US/reference/node-api.html#frontmatter"},{default:n(()=>[l("Node API > Page Properties > frontmatter")]),_:1})])])])]),ll,e("ul",null,[e("li",null,[il,e("p",null,[l("Options for "),e("a",tl,[l("@mdit-vue/plugin-headers"),i(a)]),l(".")]),nl]),e("li",null,[ol,e("ul",null,[e("li",null,[i(t,{to:"/en-US/reference/node-api.html#headers"},{default:n(()=>[l("Node API > Page Properties > headers")]),_:1})])])])]),al,e("ul",null,[dl,sl,e("li",null,[rl,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#import-code-blocks"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Import Code Blocks")]),_:1})])])])]),ul,e("ul",null,[cl,e("li",null,[pl,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#links"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Links")]),_:1})])])])]),hl,e("ul",null,[fl,e("li",null,[ml,e("p",null,[l("Options for "),e("a",gl,[l("@mdit-vue/plugin-sfc"),i(a)]),l(".")]),_l]),e("li",null,[bl,e("ul",null,[e("li",null,[i(t,{to:"/en-US/advanced/cookbook/markdown-and-vue-sfc.html"},{default:n(()=>[l("Cookbook > Markdown and Vue SFC")]),_:1})]),e("li",null,[i(t,{to:"/en-US/reference/node-api.html#sfcblocks"},{default:n(()=>[l("Node API > Page Properties > sfcBlocks")]),_:1})])])])]),kl,wl,vl,e("ul",null,[yl,e("li",null,[xl,e("p",null,[l("Options for "),e("a",Dl,[l("@mdit-vue/plugin-title"),i(a)]),l(".")]),Tl])]),Sl,e("ul",null,[e("li",null,[Pl,e("p",null,[l("Options for "),e("a",Al,[l("@mdit-vue/plugin-toc"),i(a)]),l(".")]),Ul]),e("li",null,[Cl,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/markdown.html#table-of-contents"},{default:n(()=>[l("Guide > Markdown > Syntax Extensions > Table of Contents")]),_:1})])])])]),Ll,Ol,e("ul",null,[Bl,El,e("li",null,[Ml,e("ul",null,[e("li",null,[i(t,{to:"/en-US/guide/plugin.html"},{default:n(()=>[l("Guide > Plugin")]),_:1})])])])]),Gl,Il,e("p",null,[l("Please check out "),i(t,{to:"/en-US/reference/plugin-api.html"},{default:n(()=>[l("Plugin API Reference")]),_:1}),l(" for a full list of Plugin APIs.")])])}const jl=r(p,[["render",Nl],["__file","config.html.vue"]]);export{jl as default};