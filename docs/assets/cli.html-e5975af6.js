import{_ as c,r as p,o as t,c as r,d as a,a as n,b as s,w as y,e as o}from"./app-27037075.js";const i={},C=n("h1",{id:"command-line-interface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),s(" Command Line Interface")],-1),d={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},u=o(`<p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">$</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vuepress</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">comman</span><span style="color:#D4D4D4;">d&gt; [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">Commands:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">dev</span><span style="color:#D4D4D4;"> [sourceDir]    Start development server</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">build</span><span style="color:#D4D4D4;"> [sourceDir]  Build to static site</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">info</span><span style="color:#D4D4D4;">               </span><span style="color:#CE9178;">Display</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">environment</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">information</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">For</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">more</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">info,</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">any</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">command</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">with</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">\`</span><span style="color:#DCDCAA;">--help</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">flag:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">$</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vuepress</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--help</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">$</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vuepress</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--help</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">$</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vuepress</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">info</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-v,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--version</span><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">Display</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">version</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">number</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-h,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--help</span><span style="color:#D4D4D4;">     </span><span style="color:#CE9178;">Display</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">this</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">message</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"prompt",-1),h={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[s("Set environment variable "),n("code",null,"DEBUG=vuepress*"),s(" to enable debug logs.")],-1),A=o(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">$</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vuepress</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span><span style="color:#D4D4D4;"> [sourceDir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-c,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--config</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">confi</span><span style="color:#D4D4D4;">g&gt;  </span><span style="color:#CE9178;">Set</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">path</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">to</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">config</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">file</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-p,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--port</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">por</span><span style="color:#D4D4D4;">t&gt;      </span><span style="color:#CE9178;">Use</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">specified</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">port</span><span style="color:#D4D4D4;"> (default: </span><span style="color:#B5CEA8;">8080</span><span style="color:#D4D4D4;">) </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-t,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--temp</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">tem</span><span style="color:#D4D4D4;">p&gt;      </span><span style="color:#CE9178;">Set</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">directory</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">of</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">temporary</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--host</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">hos</span><span style="color:#D4D4D4;">t&gt;          </span><span style="color:#CE9178;">Use</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">specified</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">host</span><span style="color:#D4D4D4;"> (default: </span><span style="color:#B5CEA8;">0.0</span><span style="color:#CE9178;">.0.0</span><span style="color:#D4D4D4;">) </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--cache</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">cach</span><span style="color:#D4D4D4;">e&gt;        </span><span style="color:#CE9178;">Set</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">directory</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">of</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">cache</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--clean-temp</span><span style="color:#D4D4D4;">           </span><span style="color:#CE9178;">Clean</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">temporary</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">before</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--clean-cache</span><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">Clean</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">cache</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">before</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--open</span><span style="color:#D4D4D4;">                 </span><span style="color:#CE9178;">Open</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">browser</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">when</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">ready</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--debug</span><span style="color:#D4D4D4;">                </span><span style="color:#CE9178;">Enable</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">debug</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">mode</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--no-watch</span><span style="color:#D4D4D4;">             </span><span style="color:#CE9178;">Disable</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">watching</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">page</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">and</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">config</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> (default: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-v,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--version</span><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">Display</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">version</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">number</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-h,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--help</span><span style="color:#D4D4D4;">             </span><span style="color:#CE9178;">Display</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">this</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">message</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>`,5),f=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">$</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vuepress</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> [sourceDir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-c,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--config</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">confi</span><span style="color:#D4D4D4;">g&gt;  </span><span style="color:#CE9178;">Set</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">path</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">to</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">config</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">file</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-d,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--dest</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">des</span><span style="color:#D4D4D4;">t&gt;      </span><span style="color:#CE9178;">Set</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">directory</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">output</span><span style="color:#D4D4D4;"> (default: </span><span style="color:#CE9178;">.vuepress/dist</span><span style="color:#D4D4D4;">) </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-t,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--temp</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">tem</span><span style="color:#D4D4D4;">p&gt;      </span><span style="color:#CE9178;">Set</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">directory</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">of</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">temporary</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--cache</span><span style="color:#D4D4D4;"> &lt;</span><span style="color:#CE9178;">cach</span><span style="color:#D4D4D4;">e&gt;        </span><span style="color:#CE9178;">Set</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">directory</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">of</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">cache</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--clean-temp</span><span style="color:#D4D4D4;">           </span><span style="color:#CE9178;">Clean</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">temporary</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">before</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--clean-cache</span><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">Clean</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">the</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">cache</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">files</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">before</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">--debug</span><span style="color:#D4D4D4;">                </span><span style="color:#CE9178;">Enable</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">debug</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">mode</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-v,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--version</span><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">Display</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">version</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">number</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">-h,</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--help</span><span style="color:#D4D4D4;">             </span><span style="color:#CE9178;">Display</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">this</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">message</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,5);function g(_,k){const e=p("NpmBadge"),l=p("ExternalLinkIcon"),D=p("RouterLink");return t(),r("div",null,[C,a(e,{package:"@vuepress/cli"}),n("p",null,[s("VuePress CLI is provided by "),n("a",d,[s("@vuepress/cli"),a(l)]),s(" package. It is included by the "),n("a",E,[s("vuepress"),a(l)]),s(" package, and you can also install it separately.")]),u,n("div",v,[m,n("p",null,[s("VuePress is using "),n("a",h,[s("debug"),a(l)]),s(" module.")]),b]),A,n("p",null,[s("Build your VuePress site to static files, which are ready for "),a(D,{to:"/en-US/guide/deployment.html"},{default:y(()=>[s("deployment")]),_:1}),s(".")]),f])}const x=c(i,[["render",g],["__file","cli.html.vue"]]);export{x as default};
