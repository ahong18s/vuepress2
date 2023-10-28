import{_ as c,r as o,o as i,c as d,a as s,b as e,d as n,w as a,e as u}from"./app-d19e66db.js";const D={},y=s("h1",{id:"bundler",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bundler","aria-hidden":"true"},"#"),e(" Bundler")],-1),b={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"choose-a-bundler",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#choose-a-bundler","aria-hidden":"true"},"#"),e(" Choose a Bundler")],-1),m={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},_=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"remove"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"add"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"yarn"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"remove"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"yarn"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"add"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"npm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"uninstall"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"npm"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"install"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g={class:"custom-container tip"},E=s("p",{class:"custom-container-title"},"prompt",-1),w={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},A=s("h2",{id:"configure-bundler",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configure-bundler","aria-hidden":"true"},"#"),e(" Configure Bundler")],-1),B=s("p",null,"Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress.",-1),V=u(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function F(j,N){const l=o("ExternalLinkIcon"),r=o("CodeGroupItem"),p=o("CodeGroup"),t=o("RouterLink");return i(),d("div",null,[y,s("p",null,[e("VuePress has been using "),s("a",b,[e("Webpack"),n(l)]),e(" as the bundler to dev and build sites. Since VuePress v2, other bundlers are also supported, and now we are using "),s("a",h,[e("Vite"),n(l)]),e(" as the default bundler. Of course, you can still choose to use Webpack.")]),v,s("p",null,[e("When using the "),s("a",m,[e("vuepress"),n(l)]),e(" package, Vite bundler is installed and used automatically.")]),s("p",null,[e("If you want to use Webpack bundler instead, you can remove it and install the "),s("a",C,[e("vuepress-webpack"),n(l)]),e(" package instead:")]),n(p,null,{default:a(()=>[n(r,{title:"PNPM",active:""},{default:a(()=>[_]),_:1}),n(r,{title:"YARN"},{default:a(()=>[f]),_:1}),n(r,{title:"NPM"},{default:a(()=>[k]),_:1})]),_:1}),s("div",g,[E,s("p",null,[e("In fact, the "),s("a",w,[e("vuepress"),n(l)]),e(" package is just a wrapper of the "),s("a",x,[e("vuepress-vite"),n(l)]),e(" package.")])]),A,B,s("p",null,[e("You can configure bundler for advanced usage via the "),n(t,{to:"/en-US/reference/config.html#bundler"},{default:a(()=>[e("bundler")]),_:1}),e(" option:")]),V,s("p",null,[e("You can refer to "),n(t,{to:"/en-US/reference/bundler/vite.html"},{default:a(()=>[e("Bundlers > Vite")]),_:1}),e(" and "),n(t,{to:"/en-US/reference/bundler/webpack.html"},{default:a(()=>[e("Bundlers > Webpack")]),_:1}),e(" to check out all options of the corresponding bundler.")])])}const I=c(D,[["render",F],["__file","bundler.html.vue"]]);export{I as default};
