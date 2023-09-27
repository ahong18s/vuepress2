import{_ as c,r as p,o as t,c as r,a as s,b as n,d as l,w as i,f as d,e as a}from"./app-27037075.js";const D={},u=s("h1",{id:"部署",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),n(" 部署")],-1),y=s("p",null,"下述的指南基于以下条件：",-1),v=s("li",null,[n("Markdown 源文件放置在你项目的 "),s("code",null,"docs"),n(" 目录；")],-1),b=s("li",null,[n("使用的是默认的构建输出目录 ("),s("code",null,".vuepress/dist"),n(") ；")],-1),h={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},m=s("li",null,[n("VuePress 作为项目依赖安装，并在 "),s("code",null,"package.json"),n(" 中配置了如下脚本：")],-1),_=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),g=a("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),C={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},E=s("p",null,[n("创建 "),s("code",null,".github/workflows/docs.yml"),n(" 文件来配置工作流。")],-1),f=a(`<details class="custom-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">main</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 手动触发部署</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">workflow_dispatch</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">docs</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">fetch-depth</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup pnpm</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 选择要使用的 pnpm 版本</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">version</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 使用 pnpm 安装依赖</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">run_install</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup Node.js</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 选择要使用的 node 版本</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">node-version</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">18</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 缓存 pnpm 依赖</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 运行构建脚本</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build VuePress site</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pnpm docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 查看 workflow 的文档来获取更多信息</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 部署到 gh-pages 分支</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">GITHUB_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),k={class:"custom-container tip"},A=s("p",{class:"custom-container-title"},"提示",-1),x={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},q=s("h2",{id:"gitlab-pages",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),n(" GitLab Pages")],-1),w=a("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),B=s("code",null,".gitlab-ci.yml",-1),P={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},R=a(`<details class="custom-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 选择你要使用的 docker 镜像</span></span>
<span class="line"><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">node:18-buster</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">pages</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">only</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 缓存 node_modules</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">files</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        - </span><span style="color:#CE9178;">pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">.pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 安装 pnpm</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">before_script</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">curl -fsSL https://get.pnpm.io/install.sh | sh -</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">pnpm config set store-dir .pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 安装依赖并运行构建脚本</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">pnpm docs:build --dest public</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">artifacts</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">public</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),N={class:"custom-container tip"},j=s("p",{class:"custom-container-title"},"提示",-1),S={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},V=s("h2",{id:"google-firebase",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),n(" Google Firebase")],-1),O={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},F=s("li",null,[s("p",null,[n("在你项目的根目录下创建 "),s("code",null,"firebase.json"),n(" 和 "),s("code",null,".firebaserc"),n("，并包含以下内容：")])],-1),G=a(`<p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;hosting&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;public&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;ignore&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;projects&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;default&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在执行了 <code>pnpm docs:build</code> 后, 使用 <code>firebase deploy</code> 指令来部署。</li></ol>`,5),I={class:"custom-container tip"},H=s("p",{class:"custom-container-title"},"提示",-1),L={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},U=s("h2",{id:"heroku",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),n(" Heroku")],-1),M={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},T={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},K=s("li",null,[s("p",null,[n("运行 "),s("code",null,"heroku login"),n(" 并填写你的 Heroku 认证信息：")])],-1),z=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">heroku</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">login</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>在你的项目根目录中，创建一个名为 <code>static.json</code> 的文件，并包含下述内容：</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;root&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Y={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},W=s("h2",{id:"kinsta",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#kinsta","aria-hidden":"true"},"#"),n(" Kinsta")],-1),$={href:"https://kinsta.com/docs/vuepress-application/",target:"_blank",rel:"noopener noreferrer"},J=s("h2",{id:"edgio",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#edgio","aria-hidden":"true"},"#"),n(" Edgio")],-1),Q={href:"https://docs.edg.io/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},X=s("h2",{id:"netlify",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),n(" Netlify")],-1),Z={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},ss=s("ul",null,[s("li",null,[s("strong",null,"Build Command:"),n(),s("code",null,"pnpm docs:build")]),s("li",null,[s("strong",null,"Publish directory:"),n(),s("code",null,"docs/.vuepress/dist")])],-1),ns={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},ls=s("ul",null,[s("li",null,[s("code",null,"NODE_VERSION"),n(": 18")])],-1),es=s("li",null,[s("p",null,"点击 deploy 按钮。")],-1),as=s("h2",{id:"vercel",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),n(" Vercel")],-1),os={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},ps=s("ul",null,[s("li",null,[s("strong",null,"FRAMEWORK PRESET:"),n(),s("code",null,"Other")]),s("li",null,[s("strong",null,"BUILD COMMAND:"),n(),s("code",null,"pnpm docs:build")]),s("li",null,[s("strong",null,"OUTPUT DIRECTORY:"),n(),s("code",null,"docs/.vuepress/dist")])],-1),is=s("li",null,[s("p",null,"点击 deploy 按钮。")],-1),cs=s("h2",{id:"云开发-cloudbase",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#云开发-cloudbase","aria-hidden":"true"},"#"),n(" 云开发 CloudBase")],-1),ts={href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"},rs={href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"},ds=a(`<ol><li>全局安装 CloudBase CLI ：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pnpm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-g</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@cloudbase/cli</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),Ds={start:"2"},us={href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"},ys=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">cloudbase</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">init</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--without-template</span></span>
<span class="line"><span style="color:#DCDCAA;">cloudbase</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">framework:deploy</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。</p><p>确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。</p><p>也可以使用 <code>cloudbase init --template vuepress</code> 快速创建和部署一个新的 VuePress 应用。</p>`,4),vs={class:"custom-container tip"},bs=s("p",{class:"custom-container-title"},"提示",-1),hs={href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},ms=s("h2",{id:"_21-云盒子",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_21-云盒子","aria-hidden":"true"},"#"),n(" 21 云盒子")],-1),_s={href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"};function gs(Cs,Es){const e=p("ExternalLinkIcon"),o=p("RouterLink");return t(),r("div",null,[u,y,s("ul",null,[v,b,s("li",null,[n("使用 "),s("a",h,[n("pnpm"),l(e)]),n(" 作为包管理器，当然也支持使用 npm 或 yarn 。")]),m]),_,s("ol",null,[s("li",null,[s("p",null,[n("设置正确的 "),l(o,{to:"/reference/config.html#base"},{default:i(()=>[n("base")]),_:1}),n(" 选项。")]),g]),s("li",null,[s("p",null,[n("选择你想要使用的 CI 工具。这里我们以 "),s("a",C,[n("GitHub Actions"),l(e)]),n(" 为例。")]),E])]),f,s("div",k,[A,s("p",null,[n("请参考 "),s("a",x,[n("GitHub Pages 官方指南"),l(e)]),n(" 来获取更多信息。")])]),q,s("ol",null,[s("li",null,[s("p",null,[n("设置正确的 "),l(o,{to:"/reference/config.html#base"},{default:i(()=>[n("base")]),_:1}),n(" 选项。")]),w]),s("li",null,[s("p",null,[n("创建 "),B,n(" 文件来配置 "),s("a",P,[n("GitLab CI"),l(e)]),n(" 工作流。")])])]),R,s("div",N,[j,s("p",null,[n("请参考 "),s("a",S,[n("GitLab Pages 官方指南"),l(e)]),n(" 来获取更多信息。")])]),V,s("ol",null,[s("li",null,[s("p",null,[n("请确保你已经安装了 "),s("a",O,[n("firebase-tools"),l(e)]),n("。")])]),F]),G,s("div",I,[H,s("p",null,[n("请参考 "),s("a",L,[n("Firebase CLI 官方指南"),l(e)]),n(" 来获取更多信息。")])]),U,s("ol",null,[s("li",null,[s("p",null,[n("首先安装 "),s("a",M,[n("Heroku CLI"),l(e)]),n("；")])]),s("li",null,[s("p",null,[s("a",T,[n("在这里"),l(e)]),n(" 注册一个 Heroku 账号；")])]),K]),z,s("p",null,[n("这里是你项目的配置，请参考 "),s("a",Y,[n("heroku-buildpack-static"),l(e)]),n(" 来获取更多信息。")]),W,s("p",null,[n("请查看 "),s("a",$,[n("Set Up VuePress on Kinsta"),l(e)]),n(" 。")]),J,s("p",null,[n("请查看 "),s("a",Q,[n("Edgio Documentation > Framework Guides > VuePress"),l(e)]),n(" 。")]),X,s("ol",null,[s("li",null,[s("p",null,[n("前往 "),s("a",Z,[n("Netlify"),l(e)]),n(" ，从 GitHub 创建一个新项目，并进行如下配置：")]),ss]),s("li",null,[s("p",null,[n("设置 "),s("a",ns,[n("Environment variables"),l(e)]),n(" 来选择 Node 版本：")]),ls]),es]),as,s("ol",null,[s("li",null,[s("p",null,[n("前往 "),s("a",os,[n("Vercel"),l(e)]),n(" ，从 GitHub 创建一个新项目，并进行如下配置：")]),ps]),is]),d(" 下列平台是中文文档特有的，放在最下方 "),cs,s("p",null,[s("a",ts,[n("云开发 CloudBase"),l(e)]),n(" 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 "),s("a",rs,[n("CloudBase Framework"),l(e)]),n(" 来一键部署应用。")]),ds,s("ol",Ds,[s("li",null,[n("在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 "),s("a",us,[n("开通环境"),l(e)]),n("：")])]),ys,s("div",vs,[bs,s("p",null,[n("更多详细信息请查看 CloudBase Framework 的"),s("a",hs,[n("部署项目示例"),l(e)])])]),ms,s("p",null,[n("请查看 "),s("a",_s,[n("21 云盒子 - 部署一个 VuePress 静态网页"),l(e)]),n("。")])])}const ks=c(D,[["render",gs],["__file","deployment.html.vue"]]);export{ks as default};
