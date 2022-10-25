import{_ as s,c as a,o as e,a as l}from"./app.5aadbeaf.js";const f=JSON.parse('{"title":"Twig Filter","description":"","frontmatter":{},"headers":[{"level":2,"title":"|field_value(field)","slug":"field-value-field","link":"#field-value-field","children":[]}],"relativePath":"attributize/usage/twigfilter.md"}'),n={name:"attributize/usage/twigfilter.md"},o=l(`<h1 id="twig-filter" tabindex="-1">Twig Filter <a class="header-anchor" href="#twig-filter" aria-hidden="true">#</a></h1><h2 id="field-value-field" tabindex="-1">|field_value(field) <a class="header-anchor" href="#field-value-field" aria-hidden="true">#</a></h2><p>The <code>|field_value</code> filter returns the model value for the provided field object or field code string.</p><p>For example, we can <code>getFieldableFields()</code> for the current user and retrieve each value.</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">field</span><span style="color:#89DDFF;"> in user.</span><span style="color:#A6ACCD;">getFieldableFields</span><span style="color:#89DDFF;">() %}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;{{ </span><span style="color:#A6ACCD;">field</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;"> }}</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{{ </span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">|field_value(</span><span style="color:#A6ACCD;">field</span><span style="color:#89DDFF;">) }}&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Alternatively, we can provide the field code to retrieve a single value</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#F78C6C;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">welcome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Welcome </span><span style="color:#89DDFF;">{{ </span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">|field_value(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">first_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">) }}</span><span style="color:#A6ACCD;">!</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7),p=[o];function t(r,c,i,D,F,d){return e(),a("div",null,p)}const u=s(n,[["render",t]]);export{f as __pageData,u as default};
