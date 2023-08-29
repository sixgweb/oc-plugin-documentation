import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e29c4459.js";const m=JSON.parse('{"title":"Import/Export","description":"","frontmatter":{},"headers":[],"relativePath":"attributize/import-export.md","filePath":"attributize/import-export.md"}'),p={name:"attributize/import-export.md"},o=l(`<h1 id="import-export" tabindex="-1">Import/Export <a class="header-anchor" href="#import-export" aria-label="Permalink to &quot;Import/Export&quot;">​</a></h1><p>Attributize automatically adds the the model&#39;s fields to the import and export columns by extending the controller&#39;s config.</p><h2 id="importing" tabindex="-1">Importing <a class="header-anchor" href="#importing" aria-label="Permalink to &quot;Importing&quot;">​</a></h2><p>Importing data requires the use of the ImportsFieldValues trait on your <a href="https://docs.octobercms.com/3.x/extend/importexport/importexport-model.html" target="_blank" rel="noreferrer">import model</a></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EntryImport</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\Backend\\Models\\</span><span style="color:#B392F0;">ImportModel</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\Sixgweb\\Attributize\\Traits\\ImportsFieldValues</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#F97583;">@var</span><span style="color:#6A737D;"> </span><span style="color:#F97583;">array</span><span style="color:#6A737D;"> rules to be applied to the data.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> $rules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">importData</span><span style="color:#E1E4E8;">($results, $sessionKey </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($results </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $row </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $data) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//Use ImportsFieldValues to map data to field_values column</span></span>
<span class="line"><span style="color:#E1E4E8;">            $data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">processImportDataFieldValues</span><span style="color:#E1E4E8;">($data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                $entry </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Entry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                $entry</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">($data);</span></span>
<span class="line"><span style="color:#E1E4E8;">                $entry</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">save</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">logCreated</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;"> $ex) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">logError</span><span style="color:#E1E4E8;">($row, $ex</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">getMessage</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EntryImport</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\Backend\\Models\\</span><span style="color:#6F42C1;">ImportModel</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\Sixgweb\\Attributize\\Traits\\ImportsFieldValues</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@var</span><span style="color:#6A737D;"> </span><span style="color:#D73A49;">array</span><span style="color:#6A737D;"> rules to be applied to the data.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> $rules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">importData</span><span style="color:#24292E;">($results, $sessionKey </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($results </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $row </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $data) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//Use ImportsFieldValues to map data to field_values column</span></span>
<span class="line"><span style="color:#24292E;">            $data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">processImportDataFieldValues</span><span style="color:#24292E;">($data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                $entry </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Entry</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                $entry</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">($data);</span></span>
<span class="line"><span style="color:#24292E;">                $entry</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">save</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">logCreated</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;"> $ex) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">logError</span><span style="color:#24292E;">($row, $ex</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">getMessage</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,5),e=[o];function t(r,c,y,E,i,d){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{m as __pageData,u as default};
