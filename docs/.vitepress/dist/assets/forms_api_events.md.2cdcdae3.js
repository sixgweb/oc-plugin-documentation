import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e29c4459.js";const h=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"forms/api/events.md","filePath":"forms/api/events.md"}'),e={name:"forms/api/events.md"},p=l(`<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><h2 id="sixgweb-forms-entry-beforesave" tabindex="-1">sixgweb.forms.entry.beforeSave <a class="header-anchor" href="#sixgweb-forms-entry-beforesave" aria-label="Permalink to &quot;sixgweb.forms.entry.beforeSave&quot;">​</a></h2><p>Event fired before the entry is saved to the database, after validation.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Event</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sixgweb.forms.entry.beforeSave&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($entry) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($entry</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">form</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">slug </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;soup&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ApplicationException</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;No Soup for You!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Event</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sixgweb.forms.entry.beforeSave&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($entry) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($entry</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">form</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">slug </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;soup&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ApplicationException</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;No Soup for You!&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="sixgweb-forms-entry-aftersave" tabindex="-1">sixgweb.forms.entry.afterSave <a class="header-anchor" href="#sixgweb-forms-entry-aftersave" aria-label="Permalink to &quot;sixgweb.forms.entry.afterSave&quot;">​</a></h2><p>Event fired after the entry is saved to the database.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Event</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sixgweb.forms.entry.afterSave&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($entry) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        $entry</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">field_values[</span><span style="color:#9ECBFF;">&#39;cellphone&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        $entry</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">field_values[</span><span style="color:#9ECBFF;">&#39;text_me&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">addTextMessageSubscriber</span><span style="color:#E1E4E8;">($entry</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">field_values[</span><span style="color:#9ECBFF;">&#39;cellphone&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Event</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sixgweb.forms.entry.afterSave&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($entry) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">        $entry</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">field_values[</span><span style="color:#032F62;">&#39;cellphone&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        $entry</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">field_values[</span><span style="color:#032F62;">&#39;text_me&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    ) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">addTextMessageSubscriber</span><span style="color:#24292E;">($entry</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">field_values[</span><span style="color:#032F62;">&#39;cellphone&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,7),o=[p];function t(r,c,y,E,i,d){return a(),n("div",null,o)}const F=s(e,[["render",t]]);export{h as __pageData,F as default};
