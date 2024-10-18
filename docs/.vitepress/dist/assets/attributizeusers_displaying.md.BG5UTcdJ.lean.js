import{_ as s,c as a,a0 as e,o as t}from"./chunks/framework.Ca4_qnUC.js";const c=JSON.parse('{"title":"Displaying Values","description":"","frontmatter":{},"headers":[],"relativePath":"attributizeusers/displaying.md","filePath":"attributizeusers/displaying.md"}'),n={name:"attributizeusers/displaying.md"};function l(p,i,r,h,d,o){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="displaying-values" tabindex="-1">Displaying Values <a class="header-anchor" href="#displaying-values" aria-label="Permalink to &quot;Displaying Values&quot;">​</a></h1><p>Values can be displayed on any page by adding the RainLab.User Account component (for version 2.x) or RainLab.User Session component (for version 3.x) to the page. This will expose the <code>user</code> variable to your page, which can then be passed to the <a href="/oc-plugin-documentation/attributize/usage/twigfilter.html">field_value twig filter</a></p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">field_value(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;field_code_here&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div>`,3)]))}const g=s(n,[["render",l]]);export{c as __pageData,g as default};
