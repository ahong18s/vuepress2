import{_ as c,r as o,o as i,c as D,a as s,b as e,d as n,w as l,e as d}from"./app-27037075.js";const u={},y=s("h1",{id:"打包工具",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#打包工具","aria-hidden":"true"},"#"),e(" 打包工具")],-1),v={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"选择一个打包工具",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选择一个打包工具","aria-hidden":"true"},"#"),e(" 选择一个打包工具")],-1),C={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},h=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"uninstall"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"add"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"yarn"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"remove"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"yarn"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"add"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"npm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"uninstall"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"npm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"install"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f={class:"custom-container tip"},g=s("p",{class:"custom-container-title"},"提示",-1),w={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},A=s("h2",{id:"配置打包工具",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置打包工具","aria-hidden":"true"},"#"),e(" 配置打包工具")],-1),V=s("p",null,"一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。",-1),F=d(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// import { webpackBundler } from &#39;vuepress-webpack&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bundler:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">viteBundler</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">vuePluginOptions:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">template:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">compilerOptions:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;center&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(j,B){const a=o("ExternalLinkIcon"),r=o("CodeGroupItem"),p=o("CodeGroup"),t=o("RouterLink");return i(),D("div",null,[y,s("p",null,[e("VuePress 一直以来都在使用 "),s("a",v,[e("Webpack"),n(a)]),e(" 作为打包工具来进行网站的开发和构建。从 VuePress v2 开始，我们还支持使用其他的打包工具，并且现在使用 "),s("a",m,[e("Vite"),n(a)]),e(" 作为默认的打包工具。当然，你仍然可以选择使用 Webpack 。")]),b,s("p",null,[e("在使用 "),s("a",C,[e("vuepress"),n(a)]),e(" 包时，会自动安装和使用 Vite 打包工具。")]),s("p",null,[e("如果你想改为使用 Webpack 打包工具，那么你可以移除它，改为安装 "),s("a",_,[e("vuepress-webpack"),n(a)]),e(" 包：")]),n(p,null,{default:l(()=>[n(r,{title:"PNPM",active:""},{default:l(()=>[h]),_:1}),n(r,{title:"YARN"},{default:l(()=>[k]),_:1}),n(r,{title:"NPM"},{default:l(()=>[E]),_:1})]),_:1}),s("div",f,[g,s("p",null,[e("实际上， "),s("a",w,[e("vuepress"),n(a)]),e(" 包只是 "),s("a",x,[e("vuepress-vite"),n(a)]),e(" 包的一个封装而已。")])]),A,V,s("p",null,[e("通过 "),n(t,{to:"/reference/config.html#bundler"},{default:l(()=>[e("bundler")]),_:1}),e(" 配置项，你可以对打包工具进行进阶配置：")]),F,s("p",null,[e("你可以参考 "),n(t,{to:"/reference/bundler/vite.html"},{default:l(()=>[e("打包工具 > Vite")]),_:1}),e(" 和 "),n(t,{to:"/reference/bundler/webpack.html"},{default:l(()=>[e("打包工具 > Webpack")]),_:1}),e(" 来查看对应打包工具的所有配置项。")])])}const G=c(u,[["render",N],["__file","bundler.html.vue"]]);export{G as default};