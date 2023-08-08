import{_ as s,o as a,c as t,R as n}from"./chunks/framework.48da797c.js";const m=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"attributizeusers/installation.md","filePath":"attributizeusers/installation.md"}'),o={name:"attributizeusers/installation.md"},e=n(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>Sixgweb.Attributize</li><li>RainLab.User</li></ul><h2 id="marketplace" tabindex="-1">Marketplace <a class="header-anchor" href="#marketplace" aria-label="Permalink to &quot;Marketplace&quot;">​</a></h2><p>Add the plugin to your project via the <a href="https://octobercms.com/plugins" target="_blank" rel="noreferrer">OctoberCMS Market Place</a> and run the following command in your project root:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan project:sync</span></span></code></pre></div><h2 id="composer" tabindex="-1">Composer <a class="header-anchor" href="#composer" aria-label="Permalink to &quot;Composer&quot;">​</a></h2><p>Install via composer by running the following command in your project root:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer require sixgweb/attributizeusers-plugin</span></span></code></pre></div><h2 id="frontend-component" tabindex="-1">Frontend Component <a class="header-anchor" href="#frontend-component" aria-label="Permalink to &quot;Frontend Component&quot;">​</a></h2><p>Add the <strong>AttributizeUsers-&gt;User Fields</strong> and <strong>User-&gt;Account</strong> components to the page. Override the RainLab Account register.html and update.html partials to include the <code>userFields</code> component, before the submit button. Refer to OctoberCMS <a href="https://docs.octobercms.com/3.x/cms/themes/components.html#overriding-component-partials" target="_blank">Overriding Component Partials</a> for more information on overriding component partials.</p><p>Refer to <a href="/oc-plugin-documentation/attributize/usage/component.html">Attributize Fields Component</a> for component options</p><p>plugins/rainlab/user/components/account/register.htm</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">userFields</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn btn-default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Register</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>plugins/rainlab/user/components/account/update.htm</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#A6ACCD;">component</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">userFields</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn btn-default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Save</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,16),l=[e];function p(r,c,i,u,D,d){return a(),t("div",null,l)}const y=s(o,[["render",p]]);export{m as __pageData,y as default};