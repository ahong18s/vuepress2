import{_ as p,r as c,o as r,c as t,a as n,b as s,d as l,w as e,e as o}from"./app-27037075.js";const D={},i=n("h1",{id:"向客户端代码传递数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#向客户端代码传递数据","aria-hidden":"true"},"#"),s(" 向客户端代码传递数据")],-1),d=n("p",null,"我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。",-1),y=n("h2",{id:"使用-define-hook",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-define-hook","aria-hidden":"true"},"#"),s(" 使用 "),n("code",null,"define"),s(" Hook")],-1),C=o(`<p>首先，通过 <code>define</code> Hook 定义一些常量：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">define:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__FOO__:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> || </span><span style="color:#CE9178;">&#39;str&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__OBJ__:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bar:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> || </span><span style="color:#B5CEA8;">123</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中直接使用它们：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__FOO__</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__OBJ__</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些全局常量的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__FOO__</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__OBJ__</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入并加载临时文件" tabindex="-1"><a class="header-anchor" href="#写入并加载临时文件" aria-hidden="true">#</a> 写入并加载临时文件</h2><p>如果你需要实现一些更复杂的功能，你可以写入临时文件，并在客户端代码中动态加载它们。</p>`,8),u=n("code",null,"foo.js",-1),v=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">onPrepared</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 写入临时文件</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">writeTemp</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;foo.js&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">\`export const foo = </span><span style="color:#569CD6;">\${</span><span style="color:#4FC1FF;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中通过 <code>@temp</code> 别名来加载临时文件：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@temp/foo&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些临时模块的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">module</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@temp/foo&#39;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(b,_){const a=c("RouterLink");return r(),t("div",null,[i,d,y,n("p",null,[s("插件 API 提供了一个 "),l(a,{to:"/reference/plugin-api.html#define"},{default:e(()=>[s("define")]),_:1}),s(" Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。")]),C,n("p",null,[s("首先，写入一个名为 "),u,s(" 的临时文件，它将会生成在 "),l(a,{to:"/reference/config.html#temp"},{default:e(()=>[s("temp")]),_:1}),s(" 目录中：")]),v])}const h=p(D,[["render",m],["__file","passing-data-to-client-code.html.vue"]]);export{h as default};
