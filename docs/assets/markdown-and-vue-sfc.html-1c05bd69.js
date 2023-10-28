import{_ as p,h as t,o as c,c as r,a as s,t as a,d as i,w as D,e as d,i as y}from"./app-d19e66db.js";const u=d(`<h1 id="markdown-and-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-and-vue-sfc" aria-hidden="true">#</a> Markdown and Vue SFC</h1><p>Each Markdown file is first compiled into HTML, and then converted to a Vue SFC. In other words, you can write a Markdown file like a Vue SFC:</p><ul><li>Blocks <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> are treated as Vue SFC blocks as they are. In other words, they are hoisted from the <code>&lt;template&gt;</code> block to the top-level of SFC.</li><li>Everything outside <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> will be compiled into HTML, and be treated as Vue SFC <code>&lt;template&gt;</code> block.</li></ul><div class="custom-container warning"><p class="custom-container-title">warning</p><p>As Vue SFC can contain only one <code>&lt;script&gt;</code> element, you should avoid using more than one <code>&lt;script&gt;</code> in VuePress markdown.</p></div><p>Here comes an example:</p><p><strong>Input</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">_Hello, {{ msg }}_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">RedDiv</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">_Current count is: {{ count }}_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">RedDiv</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">button</span><span style="color:#D4D4D4;"> @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">++</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Click Me!</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
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
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">msg</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;Vue in Markdown&#39;</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D7BA7D;">.red-div</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,8),v="Vue in Markdown",C={__name:"markdown-and-vue-sfc.html",setup(m){const e=(o,n)=>y("div",{class:"red-div"},n.slots.default()),l=t(0);return(o,n)=>(c(),r("div",null,[u,s("p",null,[s("em",null,"Hello, "+a(v))]),i(e,null,{default:D(()=>[s("p",null,[s("em",null,"Current count is: "+a(l.value),1)])]),_:1}),s("p",null,[s("button",{onClick:n[0]||(n[0]=b=>l.value++)},"Click Me!")])]))}},h=p(C,[["__file","markdown-and-vue-sfc.html.vue"]]);export{h as default};
