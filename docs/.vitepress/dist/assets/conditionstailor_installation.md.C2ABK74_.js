import{_ as a,c as e,o as i,a1 as t}from"./chunks/framework.DDV1WUb1.js";const k=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"conditionstailor/installation.md","filePath":"conditionstailor/installation.md"}'),s={name:"conditionstailor/installation.md"},n=t(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>OctoberCMS 3.x</li><li>Sixgweb.Conditions</li></ul><h2 id="marketplace" tabindex="-1">Marketplace <a class="header-anchor" href="#marketplace" aria-label="Permalink to &quot;Marketplace&quot;">​</a></h2><p>Add the plugin to your project via the <a href="https://octobercms.com/plugins" target="_blank" rel="noreferrer">OctoberCMS Marketplace</a> and run the following command in your project root:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php artisan project:sync</span></span></code></pre></div><h2 id="composer" tabindex="-1">Composer <a class="header-anchor" href="#composer" aria-label="Permalink to &quot;Composer&quot;">​</a></h2><p>Install via composer by running the following command in your project root:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>composer require sixgweb/conditionstailor-plugin</span></span></code></pre></div><h2 id="blueprint-field" tabindex="-1">Blueprint Field <a class="header-anchor" href="#blueprint-field" aria-label="Permalink to &quot;Blueprint Field&quot;">​</a></h2><p>Conditions will only be added to entry records that have a conditions field defined. See <a href="https://docs.octobercms.com/3.x/cms/tailor/blueprints.html" target="_blank" rel="noreferrer">Blueprints</a> for more information on defining blueprint fields.</p><p>The conditions field must be named conditions and use type conditions.</p><div class="language-YAML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">YAML</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">conditions</span></span></code></pre></div><p>After you add the conditions field to the blueprint, press Save and Migrate</p>`,14),o=[n];function l(r,p,d,c,h,u){return i(),e("div",null,o)}const b=a(s,[["render",l]]);export{k as __pageData,b as default};
