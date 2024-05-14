import{_ as s,c as t,o as a,a1 as i}from"./chunks/framework.DDV1WUb1.js";const g=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"attributizeusers/installation.md","filePath":"attributizeusers/installation.md"}'),e={name:"attributizeusers/installation.md"},n=i(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>Sixgweb.Attributize</li><li>RainLab.User</li></ul><h2 id="marketplace" tabindex="-1">Marketplace <a class="header-anchor" href="#marketplace" aria-label="Permalink to &quot;Marketplace&quot;">​</a></h2><p>Add the plugin to your project via the <a href="https://octobercms.com/plugins" target="_blank" rel="noreferrer">OctoberCMS Marketplace</a> and run the following command in your project root:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php artisan project:sync</span></span></code></pre></div><h2 id="composer" tabindex="-1">Composer <a class="header-anchor" href="#composer" aria-label="Permalink to &quot;Composer&quot;">​</a></h2><p>Install via composer by running the following command in your project root:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>composer require sixgweb/attributizeusers-plugin</span></span></code></pre></div><h2 id="frontend-component" tabindex="-1">Frontend Component <a class="header-anchor" href="#frontend-component" aria-label="Permalink to &quot;Frontend Component&quot;">​</a></h2><p>Add the <strong>AttributizeUsers-&gt;User Fields</strong> and <strong>User-&gt;Account</strong> components to the page. Override the RainLab Account register.html and update.html partials to include the <code>userFields</code> component, before the submit button. Refer to OctoberCMS <a href="https://docs.octobercms.com/3.x/cms/themes/components.html#overriding-component-partials" target="_blank">Overriding Component Partials</a> for more information on overriding component partials.</p><p>Refer to <a href="/oc-plugin-documentation/attributize/usage/component.html">Attributize Fields Component</a> for component options</p><p>plugins/rainlab/user/components/account/register.htm</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% component </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;userFields&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submit&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btn btn-default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Register&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>plugins/rainlab/user/components/account/update.htm</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% component </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;userFields&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submit&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;btn btn-default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Save&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,16),o=[n];function l(p,r,h,c,d,k){return a(),t("div",null,o)}const m=s(e,[["render",l]]);export{g as __pageData,m as default};
