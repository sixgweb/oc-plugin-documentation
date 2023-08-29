import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e29c4459.js";const u=JSON.parse('{"title":"Build Your Own","description":"","frontmatter":{},"headers":[],"relativePath":"attributize/integrations/build-your-own.md","filePath":"attributize/integrations/build-your-own.md"}'),p={name:"attributize/integrations/build-your-own.md"},o=l(`<h1 id="build-your-own" tabindex="-1">Build Your Own <a class="header-anchor" href="#build-your-own" aria-label="Permalink to &quot;Build Your Own&quot;">​</a></h1><p>Basic integration with Attributize is achieved through a Migration, Plugin File, Event Handler and Component.</p><h2 id="migration" tabindex="-1">Migration <a class="header-anchor" href="#migration" aria-label="Permalink to &quot;Migration&quot;">​</a></h2><p>Integrations are required to add the <strong>field_values</strong> column to the Fieldable model&#39;s table</p><p><code>plugins/acme/attributizeproduct/updates/add_field_values_to_table.php</code></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Acme\\AttributizeProduct\\Updates</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Schema</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Acme\\Products\\Models\\Product</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">October\\Rain\\Database\\Schema\\Blueprint</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">October\\Rain\\Database\\Updates\\Migration</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AddFieldValuesToTable</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Migration</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">up</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Schema</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">table</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;acme_products_products&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($table) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;field_values&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">nullable</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">down</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Schema</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">table</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;acme_products_products&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Blueprint</span><span style="color:#E1E4E8;"> $table) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Schema</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">hasColumn</span><span style="color:#E1E4E8;">($table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getTable</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;field_values&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dropColumn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;field_values&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Schema</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">table</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;acme_products_products&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($table) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            $product </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Product</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($product</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getAllFieldableFields</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $field) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                $field</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">deleteVirtualColumn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Schema</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">hasColumn</span><span style="color:#E1E4E8;">($table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getTable</span><span style="color:#E1E4E8;">(), </span><span style="color:#9ECBFF;">&#39;field_values&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dropColumn</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;field_values&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Acme\\AttributizeProduct\\Updates</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Schema</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Acme\\Products\\Models\\Product</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">October\\Rain\\Database\\Schema\\Blueprint</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">October\\Rain\\Database\\Updates\\Migration</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AddFieldValuesToTable</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Migration</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">up</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Schema</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">table</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;acme_products_products&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($table) {</span></span>
<span class="line"><span style="color:#24292E;">            $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;field_values&#39;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">nullable</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">down</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Schema</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">table</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;acme_products_products&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Blueprint</span><span style="color:#24292E;"> $table) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Schema</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">hasColumn</span><span style="color:#24292E;">($table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getTable</span><span style="color:#24292E;">(), </span><span style="color:#032F62;">&#39;field_values&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">                $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dropColumn</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;field_values&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Schema</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">table</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;acme_products_products&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($table) {</span></span>
<span class="line"><span style="color:#24292E;">            $product </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Product</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($product</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getAllFieldableFields</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $field) {</span></span>
<span class="line"><span style="color:#24292E;">                $field</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">deleteVirtualColumn</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Schema</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">hasColumn</span><span style="color:#24292E;">($table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getTable</span><span style="color:#24292E;">(), </span><span style="color:#032F62;">&#39;field_values&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">                $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dropColumn</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;field_values&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="plugin" tabindex="-1">Plugin <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;Plugin&quot;">​</a></h2><p>The plugin file subscribes to event handler and registers the fields component (optional);</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Acme\\AttributizeProduct</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Event</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">System\\Classes\\PluginBase</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Acme\\AttributizeProduct\\Classes\\EventHandler</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Plugin Information File</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PluginBase</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> $require </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;Sixgweb.Attributize&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;Acme.Product&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Returns information about this plugin.</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">array</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pluginDetails</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;AttributizeProduct&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;description&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Attributize Acme Product&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;author&#39;</span><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Acme&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;icon&#39;</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;icon-user&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Boot method, called right before the request route.</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">void</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">boot</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Event</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">EventHandler</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * register plugin components</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">array</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">registerComponents</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">array</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;Acme\\AttributizeProduct\\Components\\Fields&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;productFields&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Acme\\AttributizeProduct</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Event</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">System\\Classes\\PluginBase</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Acme\\AttributizeProduct\\Classes\\EventHandler</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Plugin Information File</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Plugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PluginBase</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> $require </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;Sixgweb.Attributize&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;Acme.Product&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Returns information about this plugin.</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">array</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pluginDetails</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;AttributizeProduct&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;description&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Attributize Acme Product&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;author&#39;</span><span style="color:#24292E;">      </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Acme&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;icon&#39;</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;icon-user&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Boot method, called right before the request route.</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">void</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">boot</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Event</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">subscribe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">EventHandler</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * register plugin components</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">array</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">registerComponents</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">array</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;Acme\\AttributizeProduct\\Components\\Fields&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;productFields&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="event-handler" tabindex="-1">Event Handler <a class="header-anchor" href="#event-handler" aria-label="Permalink to &quot;Event Handler&quot;">​</a></h2><p>The event handler provides a title, class names and backend menu configuration.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Acme\\AttributizeProduct\\Classes</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">October\\Rain\\Database\\Model</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Acme\\Attributize\\Classes\\AbstractEventHandler</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventHandler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AbstractEventHandler</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Title used in backend navigation and field editor</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getTitle</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Product Field&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Model class that stores the field data in the field_values column</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModelClass</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\Acme\\Store\\Models\\Product</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Frontend component to inject Attributize Fields component</span></span>
<span class="line"><span style="color:#6A737D;">     * into. Return null if no frontend editing required.</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">string</span><span style="color:#6A737D;">|</span><span style="color:#F97583;">null</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getComponentClass</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?string</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\Acme\\Store\\Components\\Product</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Controller class responsible for editing model class</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getControllerClass</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\Acme\\Store\\Controllers\\Products</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Logic used to retrieve model via the frontend component.</span></span>
<span class="line"><span style="color:#6A737D;">     * </span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> [type] $component</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#79B8FF;">Model</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getComponentModel</span><span style="color:#E1E4E8;">($component)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Model</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//Component should provide a method of retrieving the model.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $component</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getProduct</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getModelClass</span><span style="color:#E1E4E8;">())();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Existing backend plugin menu parameters.  Used to insert new</span></span>
<span class="line"><span style="color:#6A737D;">     * link to edit fields. </span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">array</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getBackendMenuParameters</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">array</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;owner&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Acme.Products&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;products&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\Backend</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;acme/store/products/fields&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Acme\\AttributizeProduct\\Classes</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">October\\Rain\\Database\\Model</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Acme\\Attributize\\Classes\\AbstractEventHandler</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventHandler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AbstractEventHandler</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Title used in backend navigation and field editor</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getTitle</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Product Field&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Model class that stores the field data in the field_values column</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModelClass</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\Acme\\Store\\Models\\Product</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Frontend component to inject Attributize Fields component</span></span>
<span class="line"><span style="color:#6A737D;">     * into. Return null if no frontend editing required.</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">string</span><span style="color:#6A737D;">|</span><span style="color:#D73A49;">null</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getComponentClass</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?string</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\Acme\\Store\\Components\\Product</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Controller class responsible for editing model class</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getControllerClass</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">string</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\Acme\\Store\\Controllers\\Products</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Logic used to retrieve model via the frontend component.</span></span>
<span class="line"><span style="color:#6A737D;">     * </span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> [type] $component</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#005CC5;">Model</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getComponentModel</span><span style="color:#24292E;">($component)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Model</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//Component should provide a method of retrieving the model.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $component</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getProduct</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">new</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getModelClass</span><span style="color:#24292E;">())();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Existing backend plugin menu parameters.  Used to insert new</span></span>
<span class="line"><span style="color:#6A737D;">     * link to edit fields. </span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">array</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getBackendMenuParameters</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">array</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;owner&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Acme.Products&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;products&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\Backend</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;acme/store/products/fields&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        ];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h2><p>The component extends the Attributize Fields component and only provides component details.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Acme\\AttributizeProduct\\Components</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Sixgweb\\Attributize\\Components\\Fields</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FieldsBase</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Fields Component</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@link</span><span style="color:#6A737D;"> https://docs.octobercms.com/3.x/extend/cms-components.html</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fields</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FieldsBase</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * componentDetails</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">componentDetails</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Product Fields&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;description&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Display Attributize Fields for Acme.Products&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Acme\\AttributizeProduct\\Components</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Sixgweb\\Attributize\\Components\\Fields</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FieldsBase</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Fields Component</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@link</span><span style="color:#6A737D;"> https://docs.octobercms.com/3.x/extend/cms-components.html</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fields</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FieldsBase</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * componentDetails</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">componentDetails</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Product Fields&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;description&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Display Attributize Fields for Acme.Products&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,15),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{u as __pageData,A as default};
