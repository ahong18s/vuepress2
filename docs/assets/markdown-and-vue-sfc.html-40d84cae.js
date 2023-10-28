import{_ as o,h as c,o as t,c as r,a as s,t as a,d as i,w as D,e as d,i as y}from"./app-d19e66db.js";const u=d(`<h1 id="markdown-与-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-与-vue-sfc" aria-hidden="true">#</a> Markdown 与 Vue SFC</h1><p>每一个 Markdown 文件，首先都会编译为 HTML ，然后转换为一个 Vue 单文件组件 (SFC) 。换句话说，你可以像写 Vue SFC 一样来写 Markdown 文件：</p><ul><li><code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 标签会直接被当作 Vue SFC 中的标签。换句话说，它们是从 <code>&lt;template&gt;</code> 标签中提升到了 SFC 的顶层。</li><li>所有 <code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 标签的以外的内容，会先被编译为 HTML ，然后被当作 Vue SFC 的 <code>&lt;template&gt;</code> 标签。</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>由于 Vue 单文件组件只能包含一个 <code>&lt;script&gt;</code> 标签，你应该避免在 VuePress Markdown 中使用多于一个 <code>&lt;script&gt;</code> 标签。</p></div><p>我们来看一个例子：</p><p><strong>输入</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">_你好， {{ msg }}_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">RedDiv</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">_当前计数为： {{ count }}_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">RedDiv</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">button</span><span style="color:#D4D4D4;"> @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">++</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">点我！</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">h</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">RedDiv</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">_</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">h</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;div&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">class:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;red-div&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">slots</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">default</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">msg</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;Markdown 中的 Vue&#39;</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D7BA7D;">.red-div</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,8),v="Markdown 中的 Vue",C={__name:"markdown-and-vue-sfc.html",setup(m){const e=(p,n)=>y("div",{class:"red-div"},n.slots.default()),l=c(0);return(p,n)=>(t(),r("div",null,[u,s("p",null,[s("em",null,"你好， "+a(v))]),i(e,null,{default:D(()=>[s("p",null,[s("em",null,"当前计数为： "+a(l.value),1)])]),_:1}),s("p",null,[s("button",{onClick:n[0]||(n[0]=b=>l.value++)},"点我！")])]))}},_=o(C,[["__file","markdown-and-vue-sfc.html.vue"]]);export{_ as default};
