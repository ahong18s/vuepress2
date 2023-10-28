import{_ as D,r,o as c,c as i,d as a,a as s,b as n,w as e,e as p}from"./app-d19e66db.js";const d={},y=s("h1",{id:"插件-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#插件-api","aria-hidden":"true"},"#"),n(" 插件 API")],-1),C={href:"https://www.npmjs.com/package/@vuepress/core",target:"_blank",rel:"noopener noreferrer"},u=p('<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><p>插件需要在初始化之前使用。基础配置项会在使用插件时立即被处理：</p><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul><p>下列 Hooks 会在初始化 App 时处理：</p><ul><li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li><li><a href="#extendsmarkdown">extendsMarkdown</a></li><li><a href="#extendspageoptions">extendsPageOptions</a></li><li><a href="#extendspage">extendsPage</a></li><li><a href="#oninitialized">onInitialized</a></li></ul><p>下列 Hooks 会在准备文件时处理：</p><ul><li><a href="#clientconfigfile">clientConfigFile</a></li><li><a href="#onprepared">onPrepared</a></li></ul><p>下列 Hooks 会在 dev / build 时处理：</p><ul><li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li><li><a href="#alias">alias</a></li><li><a href="#define">define</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul>',9),v=p(`<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>插件的名称。</p><p>它会被用来识别插件，以避免多次使用同一个插件，因此应确保你的插件名称是独一无二的。</p><p>它应遵从如下命名约定：</p><ul><li>非 Scoped: <code>vuepress-plugin-foo</code></li><li>Scoped: <code>@org/vuepress-plugin-foo</code></li></ul></li><li><p>参考：</p><ul><li><a href="#multiple">插件 API &gt; multiple</a></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>false</code></p></li><li><p>详情：</p><p>插件是否能够被多次使用。</p><p>如果设置为 <code>false</code> ，当有相同名称的插件被使用时，先使用的会被后使用的替换掉。</p><p>如果设置为 <code>true</code> ，相同名称的插件可以被多次使用且不会被替换。</p></li><li><p>参考：</p><ul><li><a href="#name">插件 API &gt; name</a></li></ul></li></ul><h2 id="开发-hooks" tabindex="-1"><a class="header-anchor" href="#开发-hooks" aria-hidden="true">#</a> 开发 Hooks</h2><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义路径别名。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/alias&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clientconfigfile" tabindex="-1"><a class="header-anchor" href="#clientconfigfile" aria-hidden="true">#</a> clientConfigFile</h3><ul><li><p>类型： <code>string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code></p></li><li><p>详情：</p><p>客户端配置文件路径。</p><p>该 Hook 接收文件绝对路径，或者一个返回路径的函数。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">clientConfigFile:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;./path/to/clientConfig.js&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),m=p(`<h3 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> define</h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义全局常量。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p><p>它可以被用于向客户端文件传递变量。注意这里的值都会自动被 <code>JSON.stringify()</code> 处理。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">define:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__GLOBAL_BOOLEAN__:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__GLOBAL_STRING__:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;foobar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__GLOBAL_OBJECT__:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendsbundleroptions" tabindex="-1"><a class="header-anchor" href="#extendsbundleroptions" aria-hidden="true">#</a> extendsBundlerOptions</h3><ul><li><p>类型： <code>(options: BundlerOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Bundler 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Bundler 配置项。</p><p>该 Hook 可以用于修改 Bundler 配置项。</p><p>你可以通过 <code>app.options.bundler.name</code> 判断用户当前使用的 Bundler。</p></li><li><p>示例：</p></li></ul>`,5),h={href:"https://vuejs.org/api/application.html#app-config-compileroptions",target:"_blank",rel:"noopener noreferrer"},b=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsBundlerOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 修改 @vuepress/bundler-vite 的配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bundler</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;@vuepress/bundler-vite&#39;</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">isCustomElement</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCustomElement</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;">?.(</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">)) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;my-custom-element&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 修改 @vuepress/bundler-webpack 的配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bundler</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;@vuepress/bundler-webpack&#39;</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">isCustomElement</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCustomElement</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;">?.(</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">)) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;my-custom-element&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E=p(`<h3 id="extendsmarkdownoptions" tabindex="-1"><a class="header-anchor" href="#extendsmarkdownoptions" aria-hidden="true">#</a> extendsMarkdownOptions</h3><ul><li><p>类型： <code>(options: MarkdownOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Markdown 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Markdown 配置项。</p><p>该 Hook 可以用于修改 Markdown 配置项。</p></li><li><p>示例：</p></li></ul><p>修改默认提取的子标题层级：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsMarkdownOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;"> === </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;"> = [</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g=s("h3",{id:"extendsmarkdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#extendsmarkdown","aria-hidden":"true"},"#"),n(" extendsMarkdown")],-1),F=s("li",null,[s("p",null,[n("类型： "),s("code",null,"(md: Markdown, app: App) => void | Promise<void>")])],-1),f=s("p",null,"详情：",-1),k=s("p",null,"Markdown 增强。",-1),_={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"Markdown",-1),A=s("p",null,"该 Hook 可以用来添加额外的 markdown-it 插件、应用额外的自定义功能。",-1),P=s("li",null,[s("p",null,"示例：")],-1),O=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsMarkdown</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">plugin1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">linkify</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">set</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">fuzzyEmail:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendspageoptions" tabindex="-1"><a class="header-anchor" href="#extendspageoptions" aria-hidden="true">#</a> extendsPageOptions</h3><ul><li><p>类型： <code>(options: PageOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 <code>createPage</code> 传入的配置项。</p><p>该 Hook 可以用于修改页面配置项。</p></li><li><p>示例：</p></li></ul><p>为 <code>_posts</code> 目录下的页面设置永久链接 Pattern ：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsPageOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">filePath</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">startsWith</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">dir</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;_posts/&#39;</span><span style="color:#D4D4D4;">))) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;"> ?? {}</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">permalinkPattern</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;/:year/:month/:day/:slug.html&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w=p(`<h3 id="extendspage" tabindex="-1"><a class="header-anchor" href="#extendspage" aria-hidden="true">#</a> extendsPage</h3><ul><li><p>类型： <code>(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面扩展。</p><p>该 Hook 接收一个函数，在参数中会收到一个 <code>Page</code> 实例。</p><p>该 Hook 可以用来在 Page 对象上添加额外的属性，或修改现有的属性等。</p><p>值得一提的是，针对 <code>page.data</code> 和 <code>page.routeMeta</code> 的改动可以在客户端代码中使用。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">extendsPage</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端组件中：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePageData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">page</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePageData</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// bar</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),B=p('<h2 id="生命周期-hooks" tabindex="-1"><a class="header-anchor" href="#生命周期-hooks" aria-hidden="true">#</a> 生命周期 Hooks</h2><h3 id="oninitialized" tabindex="-1"><a class="header-anchor" href="#oninitialized" aria-hidden="true">#</a> onInitialized</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 初始化后被立即调用。</p></li></ul><h3 id="onprepared" tabindex="-1"><a class="header-anchor" href="#onprepared" aria-hidden="true">#</a> onPrepared</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成文件准备后被立即调用。</p></li></ul><h3 id="onwatched" tabindex="-1"><a class="header-anchor" href="#onwatched" aria-hidden="true">#</a> onWatched</h3><ul><li><p>类型： <code>(app: App, watchers: Closable[], restart: () =&gt; Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 启动开发服务器并开始监听文件修改后被调用。</p><p><code>watchers</code> 是一个文件监听器的数组。在修改配置文件导致重启 dev 命令时，这些监听器会被自动关闭。如果你在当前 Hook 中添加了新的监听器，你应该把它们也加入到这个数组中，确保在重启 dev 命令时它们能被正确关闭。</p><p><code>restart</code> 方法用来重启 dev 命令。调用该方法时， <code>watchers</code> 数组中的监听器也会被自动关闭。</p></li></ul><h3 id="ongenerated" tabindex="-1"><a class="header-anchor" href="#ongenerated" aria-hidden="true">#</a> onGenerated</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成静态文件生成后被立即调用。</p></li></ul>',9);function H(I,M){const t=r("NpmBadge"),o=r("ExternalLinkIcon"),l=r("RouterLink");return c(),i("div",null,[y,a(t,{package:"@vuepress/core"}),s("p",null,[n("插件 API 是由 "),s("a",C,[n("@vuepress/core"),a(o)]),n(" 包支持的。你可以查看 "),a(l,{to:"/reference/node-api.html"},{default:e(()=>[n("Node API")]),_:1}),n(" 来了解如何使用插件 Hooks 中的 VuePress App 实例。")]),u,s("blockquote",null,[s("p",null,[n("查看 "),a(l,{to:"/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"},{default:e(()=>[n("深入 > 架构 > 核心流程与 Hooks")]),_:1}),n(" 来更好地理解该流程。")])]),v,s("ul",null,[s("li",null,[n("参考： "),s("ul",null,[s("li",null,[a(l,{to:"/reference/client-api.html#defineclientconfig"},{default:e(()=>[n("客户端 API > defineClientConfig")]),_:1})]),s("li",null,[a(l,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:e(()=>[n("深入 > Cookbook > 客户端配置的使用方法")]),_:1})])])])]),m,s("p",null,[n("添加默认的 "),s("a",h,[n("app.compilerOptions.isCustomElement"),a(o)]),n(" 配置：")]),b,s("ul",null,[s("li",null,[n("参考： "),s("ul",null,[s("li",null,[a(l,{to:"/reference/bundler/vite.html"},{default:e(()=>[n("打包工具 > Vite")]),_:1})]),s("li",null,[a(l,{to:"/reference/bundler/webpack.html"},{default:e(()=>[n("打包工具 > Webpack")]),_:1})])])])]),E,s("ul",null,[s("li",null,[n("参考： "),s("ul",null,[s("li",null,[a(l,{to:"/reference/config.html#markdown"},{default:e(()=>[n("配置 > markdown")]),_:1})])])])]),g,s("ul",null,[F,s("li",null,[f,k,s("p",null,[n("该 Hook 接收一个函数，在参数中会收到一个由 "),s("a",_,[n("markdown-it"),a(o)]),n(" 提供的 "),x,n(" 实例。")]),A]),P]),O,s("ul",null,[s("li",null,[n("参考： "),s("ul",null,[s("li",null,[a(l,{to:"/reference/node-api.html#createPage"},{default:e(()=>[n("Node API > Page > createPage")]),_:1})])])])]),w,s("ul",null,[s("li",null,[n("参考： "),s("ul",null,[s("li",null,[a(l,{to:"/reference/client-api.html#usepagedata"},{default:e(()=>[n("客户端 API > usePageData")]),_:1})]),s("li",null,[a(l,{to:"/reference/node-api.html#data"},{default:e(()=>[n("Node API > Page 属性 > data")]),_:1})]),s("li",null,[a(l,{to:"/reference/node-api.html#routemeta"},{default:e(()=>[n("Node API > Page 属性 > routeMeta")]),_:1})])])])]),B])}const L=D(d,[["render",H],["__file","plugin-api.html.vue"]]);export{L as default};
