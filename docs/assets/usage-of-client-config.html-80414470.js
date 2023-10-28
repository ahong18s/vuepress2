import{_ as r,r as t,o as c,c as i,a as n,b as s,d as e,w as l,e as o}from"./app-d19e66db.js";const D={},d=n("h1",{id:"usage-of-client-config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage-of-client-config","aria-hidden":"true"},"#"),s(" Usage of Client Config")],-1),y=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">pluginOrTheme</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">clientConfigFile:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/clientConfig.ts&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),u=n("code",null,"@vuepress/client",-1),C=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }) {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance" aria-hidden="true">#</a> enhance</h2><p>The <code>enhance</code> function could be either synchronous or asynchronous. It accepts a context param with following properties:</p>`,3),v=n("code",null,"app",-1),m={href:"https://vuejs.org/api/application.html#createapp",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"router",-1),f={href:"https://router.vuejs.org/api/#createrouter",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"siteData",-1),g=n("p",null,[s("The "),n("code",null,"enhance"),s(" function will be invoked after the client app is created. It's possible to implement any enhancements to the Vue application.")],-1),_=n("h3",{id:"register-vue-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#register-vue-components","aria-hidden":"true"},"#"),s(" Register Vue Components")],-1),E={href:"https://vuejs.org/api/application.html#app-component",target:"_blank",rel:"noopener noreferrer"},F=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./MyComponent.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">component</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;MyComponent&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-non-ssr-friendly-features" tabindex="-1"><a class="header-anchor" href="#use-non-ssr-friendly-features" aria-hidden="true">#</a> Use Non-SSR-Friendly Features</h3><p>VuePress will generate a SSR application to pre-render pages during build. Generally speaking, if a code snippet is using Browser / DOM APIs before client app is mounted, we call it non-SSR-friendly.</p>`,3),A=n("code",null,"enhance",-1),k=n("code",null,[s("_"),n("wbr"),s("_VUEPRESS_SSR__")],-1),x=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">_<wbr>_VUEPRESS_SSR__</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">nonSsrFriendlyModule</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;non-ssr-friendly-module&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-router-methods" tabindex="-1"><a class="header-anchor" href="#use-router-methods" aria-hidden="true">#</a> Use Router Methods</h3>`,2),S={href:"https://router.vuejs.org/api/#router-methods",target:"_blank",rel:"noopener noreferrer"},R=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">beforeEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;before navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">afterEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;after navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">warning</p><p>It&#39;s not recommended to use <code>addRoute</code> method to add dynamic routes here, because those routes will <strong>NOT</strong> be pre-rendered in build mode.</p><p>But you can still do that if you understand the drawback.</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2>`,3),U=n("code",null,"setup",-1),w={href:"https://vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},M=n("h3",{id:"use-composition-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#use-composition-api","aria-hidden":"true"},"#"),s(" Use Composition API")],-1),I=n("code",null,"setup",-1),V={href:"https://vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},P=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">provide</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useRoute</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">useRouter</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// get the current route location</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">route</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRoute</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// get the vue-router instance</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">router</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRouter</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// provide a value that can be injected by layouts, pages and other components</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">provide</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;count&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-non-ssr-friendly-features-1" tabindex="-1"><a class="header-anchor" href="#use-non-ssr-friendly-features-1" aria-hidden="true">#</a> Use Non-SSR-Friendly Features</h3>`,2),j=n("code",null,"setup",-1),T=n("code",null,[s("_"),n("wbr"),s("_VUEPRESS_SSR__")],-1),L={href:"https://vuejs.org/api/composition-api-lifecycle.html#onmounted",target:"_blank",rel:"noopener noreferrer"},N=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// use DOM API after mounted</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">querySelector</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;#app&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h2>`,2),B=n("code",null,"layouts",-1),O=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">MyLayout</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./layouts/MyLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">MyLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents" aria-hidden="true">#</a> rootComponents</h2><p>The <code>rootComponents</code> is a components array to be placed directly into the root node of the client vue app.</p><p>Typical usage of this option is to put some global UI components, like global popup or so:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">GlobalPopup</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./components/GlobalPopup.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">rootComponents:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">GlobalPopup</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function G(Y,q){const a=t("RouterLink"),p=t("ExternalLinkIcon");return c(),i("div",null,[d,n("p",null,[s("You can make use of the "),e(a,{to:"/en-US/guide/configuration.html#client-config-file"},{default:l(()=>[s("client config file")]),_:1}),s(" directly in your project, or specify the file path in your plugin or theme via "),e(a,{to:"/en-US/reference/plugin-api.html#clientconfigfile"},{default:l(()=>[s("clientConfigFile")]),_:1}),s(" hook:")]),y,n("p",null,[s("Inside the client config file, "),u,s(" package provides a helper function "),e(a,{to:"/en-US/reference/client-api.html#defineclientconfig"},{default:l(()=>[s("defineClientConfig")]),_:1}),s(" to help you define the client config:")]),C,n("ul",null,[n("li",null,[v,s(" is the Vue application instance that created by "),n("a",m,[s("createApp"),e(p)]),s(".")]),n("li",null,[h,s(" is the Vue Router instance that created by "),n("a",f,[s("createRouter"),e(p)]),s(".")]),n("li",null,[b,s(" is a ref of an object that generated from user config, including "),e(a,{to:"/en-US/reference/config.html#base"},{default:l(()=>[s("base")]),_:1}),s(", "),e(a,{to:"/en-US/reference/config.html#lang"},{default:l(()=>[s("lang")]),_:1}),s(", "),e(a,{to:"/en-US/reference/config.html#title"},{default:l(()=>[s("title")]),_:1}),s(", "),e(a,{to:"/en-US/reference/config.html#description"},{default:l(()=>[s("description")]),_:1}),s(", "),e(a,{to:"/en-US/reference/config.html#head"},{default:l(()=>[s("head")]),_:1}),s(" and "),e(a,{to:"/en-US/reference/config.html#locales"},{default:l(()=>[s("locales")]),_:1}),s(".")])]),g,_,n("p",null,[s("You can register global Vue components via the "),n("a",E,[s("app.component"),e(p)]),s(" method:")]),F,n("p",null,[s("We already provides a "),e(a,{to:"/en-US/reference/components.html#clientonly"},{default:l(()=>[s("ClientOnly")]),_:1}),s(" component to wrap non-SSR-friendly content.")]),n("p",null,[s("In the "),A,s(" function, you can make use of the "),e(a,{to:"/en-US/reference/client-api.html#ssr"},{default:l(()=>[k]),_:1}),s(" flag for that purpose.")]),x,n("p",null,[s("You can make use of the "),n("a",S,[s("Router Methods"),e(p)]),s(" that provided by vue-router. For example, add navigation guard:")]),R,n("p",null,[s("The "),U,s(" function would be invoked inside the "),n("a",w,[s("setup"),e(p)]),s(" hook of the client vue app.")]),M,n("p",null,[s("You can take the "),I,s(" function as part of the "),n("a",V,[s("setup"),e(p)]),s(" hook of the root component. Thus, all composition APIs are available here.")]),P,n("p",null,[s("In the "),j,s(" function, the "),e(a,{to:"/en-US/reference/client-api.html#ssr"},{default:l(()=>[T]),_:1}),s(" flag is also available.")]),n("p",null,[s("Another way to use non-ssr-friendly features is to put them inside the "),n("a",L,[s("onMounted"),e(p)]),s(" hook:")]),N,n("p",null,[s("The "),B,s(" options is to set layout components. After layout components are registered here, users can use it via "),e(a,{to:"/en-US/reference/frontmatter.html#layout"},{default:l(()=>[s("layout")]),_:1}),s(" frontmatter.")]),O])}const z=r(D,[["render",G],["__file","usage-of-client-config.html.vue"]]);export{z as default};
