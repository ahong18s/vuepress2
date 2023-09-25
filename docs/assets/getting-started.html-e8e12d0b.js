import{_ as u,r as i,o as c,c as h,a as e,b as n,d as s,w as t,e as r}from"./app-09910f35.js";const g={},m=e("h1",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),n(" Getting Started")],-1),p={class:"custom-container warning"},v=e("p",{class:"custom-container-title"},"warning",-1),_=e("code",null,"beta",-1),b={href:"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),n(" Prerequisites")],-1),y={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"prompt",-1),N={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"vue",-1),S=e("code",null,"@vuepress/client",-1),q=e("code",null,"pnpm add -D vue @vuepress/client@next",-1),V={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"nodeLinker: 'node-modules'",-1),I={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,".yarnrc.yml",-1),A=r(`<h2 id="manual-installation" tabindex="-1"><a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a> Manual Installation</h2><p>This section will help you build a basic VuePress documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 3.</p><ul><li><strong>Step 1</strong>: Create and change into a new directory</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkdir vuepress-starter
cd vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 2</strong>: Initialize your project</li></ul>`,5),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`git init
pnpm init
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`git init
yarn init
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`git init
npm init
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("ul",null,[e("li",null,[e("strong",null,"Step 3"),n(": Install VuePress locally")])],-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`pnpm add -D vuepress@next @vuepress/client@next vue
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),D=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn add -D vuepress@next
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm install -D vuepress@next
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Y=e("strong",null,"Step 4",-1),W={href:"https://classic.yarnpkg.com/en/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"package.json",-1),O=r(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;scripts&quot;: {
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 5</strong>: Add the default temp and cache directory to <code>.gitignore</code> file</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>echo &#39;node_modules&#39; &gt;&gt; .gitignore
echo &#39;.temp&#39; &gt;&gt; .gitignore
echo &#39;.cache&#39; &gt;&gt; .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 6</strong>: Create your first document</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mkdir docs
echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 7</strong>: Serve the documentation site in the local server</li></ul>`,6),T=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`pnpm docs:dev
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn docs:dev
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),U=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm run docs:dev
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),F={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"};function J(K,Q){const l=i("ExternalLinkIcon"),a=i("CodeGroupItem"),o=i("CodeGroup"),d=i("RouterLink");return c(),h("div",null,[m,e("div",p,[v,e("p",null,[n("VuePress v2 is currently in "),_,n(" stage. It's ready to be used for building your site, but the config and API are not stable enough, which is likely to have breaking changes between minor releases. So make sure to read the "),e("a",b,[n("changelog"),s(l)]),n(" carefully each time you upgrade a beta version.")])]),f,e("ul",null,[e("li",null,[e("a",y,[n("Node.js v18.16.0+"),s(l)])]),e("li",null,[e("a",x,[n("Yarn v1 classic"),s(l)]),n(" (Optional)")])]),e("div",k,[P,e("ul",null,[e("li",null,[n("With "),e("a",N,[n("pnpm"),s(l)]),n(", you may need to install "),w,n(" and "),S,n(" as peer-dependencies, i.e. "),q,n(".")]),e("li",null,[n("With "),e("a",V,[n("yarn 2"),s(l)]),n(", you need to set "),j,n(" in your "),e("a",I,[C,s(l)]),n(" file.")])])]),A,s(o,null,{default:t(()=>[s(a,{title:"PNPM",active:""},{default:t(()=>[M]),_:1}),s(a,{title:"YARN"},{default:t(()=>[G]),_:1}),s(a,{title:"NPM"},{default:t(()=>[L]),_:1})]),_:1}),E,s(o,null,{default:t(()=>[s(a,{title:"PNPM",active:""},{default:t(()=>[R]),_:1}),s(a,{title:"YARN"},{default:t(()=>[D]),_:1}),s(a,{title:"NPM"},{default:t(()=>[B]),_:1})]),_:1}),e("ul",null,[e("li",null,[Y,n(": Add some "),e("a",W,[n("scripts"),s(l)]),n(" to "),H])]),O,s(o,null,{default:t(()=>[s(a,{title:"PNPM",active:""},{default:t(()=>[T]),_:1}),s(a,{title:"YARN"},{default:t(()=>[z]),_:1}),s(a,{title:"NPM"},{default:t(()=>[U]),_:1})]),_:1}),e("p",null,[n("VuePress will start a hot-reloading development server at "),e("a",F,[n("http://localhost:8080"),s(l)]),n(". When you modify your markdown files, the content in the browser will be auto updated.")]),e("p",null,[n("By now, you should have a basic but functional VuePress documentation site. Next, learn about the basics of "),s(d,{to:"/en-US/guide/configuration.html"},{default:t(()=>[n("configuration")]),_:1}),n(" in VuePress.")])])}const Z=u(g,[["render",J],["__file","getting-started.html.vue"]]);export{Z as default};