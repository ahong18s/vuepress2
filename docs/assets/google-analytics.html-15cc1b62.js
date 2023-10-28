import{_ as i,r as o,o as p,c as r,d as e,a as s,b as n,e as a}from"./app-d19e66db.js";const c={},d=s("h1",{id:"google-analytics",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#google-analytics","aria-hidden":"true"},"#"),n(" google-analytics")],-1),D={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developers.google.com/analytics/devguides/collection/gtagjs",target:"_blank",rel:"noopener noreferrer"},y={href:"https://support.google.com/analytics/answer/10089681",target:"_blank",rel:"noopener noreferrer"},g=a(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@vuepress/plugin-google-analytics@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-google-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events" aria-hidden="true">#</a> Reporting Events</h2>`,4),h={href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"page_view",-1),_=s("code",null,"first_visit",-1),m=s("p",null,[n("So if you only want to collect some basic data of your site, you don't need to do anything else except setting the "),s("a",{href:"#id"},"Measurement ID"),n(" correctly.")],-1),b=s("code",null,"gtag()",-1),C=s("code",null,"window",-1),f={href:"https://developers.google.com/analytics/devguides/collection/ga4/events",target:"_blank",rel:"noopener noreferrer"},E=s("h2",{id:"options",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),x=s("h3",{id:"id",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),n(" id")],-1),k=s("li",null,[s("p",null,[n("Type: "),s("code",null,"string")])],-1),A=s("p",null,"Details:",-1),X=s("p",null,[n("The Measurement ID of Google Analytics 4, which should start with "),s("code",null,"'G-'"),n(".")],-1),w={href:"https://support.google.com/analytics/answer/9539598",target:"_blank",rel:"noopener noreferrer"},I=s("li",null,[s("p",null,"Example:")],-1),G=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>`,2),F=s("li",null,[s("p",null,[n("Type: "),s("code",null,"boolean")])],-1),N=s("p",null,"Details:",-1),V=s("code",null,"true",-1),T={href:"https://support.google.com/analytics/answer/7201382",target:"_blank",rel:"noopener noreferrer"},B=s("li",null,[s("p",null,"Example:")],-1),P=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">debug:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function M(S,j){const t=o("NpmBadge"),l=o("ExternalLinkIcon");return p(),r("div",null,[d,e(t,{package:"@vuepress/plugin-google-analytics"}),s("p",null,[n("Integrate "),s("a",D,[n("Google Analytics"),e(l)]),n(" into VuePress.")]),s("p",null,[n("This plugin will import "),s("a",u,[n("gtag.js"),e(l)]),n(" for "),s("a",y,[n("Google Analytics 4"),e(l)]),n(".")]),g,s("p",null,[n("Google Analytics will "),s("a",h,[n("automatically collect some events"),e(l)]),n(", such as "),v,n(", "),_,n(", etc.")]),m,s("p",null,[n("After using this plugin, the global "),b,n(" function is available on the "),C,n(" object, and you can use it for "),s("a",f,[n("custom events reporting"),e(l)]),n(".")]),E,x,s("ul",null,[k,s("li",null,[A,X,s("p",null,[n("You can follow the instructions "),s("a",w,[n("here"),e(l)]),n(' to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. "G-" ID) and Universal Analytics Tracking ID (i.e. "UA-" ID).')])]),I]),G,s("ul",null,[F,s("li",null,[N,s("p",null,[n("Set to "),V,n(" to enable sending events to DebugView. "),s("a",T,[n("See more information on DebugView"),e(l)]),n(".")])]),B]),P])}const L=i(c,[["render",M],["__file","google-analytics.html.vue"]]);export{L as default};
