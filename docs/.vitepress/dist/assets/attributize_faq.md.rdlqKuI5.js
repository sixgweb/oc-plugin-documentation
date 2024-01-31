import{_ as e,c as a,o as t,V as i}from"./chunks/framework.MoTZrTyP.js";const m=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"attributize/faq.md","filePath":"attributize/faq.md"}'),s={name:"attributize/faq.md"},o=i(`<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="how-is-the-data-stored" tabindex="-1">How is the Data Stored? <a class="header-anchor" href="#how-is-the-data-stored" aria-label="Permalink to &quot;How is the Data Stored?&quot;">​</a></h2><p>Integrations add a JSON column named <strong>field_values</strong> to the Fieldable model&#39;s table where all field data is stored. Fields with <strong>Is Searchable</strong> or <strong>Is Filterable</strong> enabled will have a generated column and corresponding index created, using the value from the field_values column.</p><h2 id="how-do-i-access-the-data-for-display" tabindex="-1">How do I access the data for display? <a class="header-anchor" href="#how-do-i-access-the-data-for-display" aria-label="Permalink to &quot;How do I access the data for display?&quot;">​</a></h2><p>Use the <a href="/oc-plugin-documentation/attributize/usage/twigfilter.html#twig-filter">Twig Filter</a> or you may access the model data by using the <strong>field_values</strong> column and the field <a href="/oc-plugin-documentation/attributize/usage/editor/tabs/settings.html">code</a>.</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ item.field_values.favorite_color }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endfor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><h2 id="what-happens-to-the-data-when-a-field-is-deleted" tabindex="-1">What Happens to the Data when a field is deleted? <a class="header-anchor" href="#what-happens-to-the-data-when-a-field-is-deleted" aria-label="Permalink to &quot;What Happens to the Data when a field is deleted?&quot;">​</a></h2><p>The data in the <strong>field_values</strong> column will be kept for backup/historical purposes.</p><p>Let&#39;s say you accidentally delete the <strong>First Name</strong> field. Luckily, the data remains in the table and is easily retrievable by recreating the <strong>First Name</strong> field.</p><h2 id="invalid-date-value-supplied-to-datetime-helper" tabindex="-1">Invalid date value supplied to DateTime helper <a class="header-anchor" href="#invalid-date-value-supplied-to-datetime-helper" aria-label="Permalink to &quot;Invalid date value supplied to DateTime helper&quot;">​</a></h2><p>This happens when an existing Field, with model data, is changed to a datetime type. You must either update the records to use a datetime value or revert the Field back to the original type.</p><h2 id="can-i-customize-frontend-output" tabindex="-1">Can I Customize Frontend Output? <a class="header-anchor" href="#can-i-customize-frontend-output" aria-label="Permalink to &quot;Can I Customize Frontend Output?&quot;">​</a></h2><p>Not at this time. Attributize exposes backend form widgets for frontend use. All form fields are generated using the same HTML output found in the backend, which is currently Bootstrap 5 markup.</p>`,13),n=[o];function l(d,r,h,p,u,c){return t(),a("div",null,n)}const g=e(s,[["render",l]]);export{m as __pageData,g as default};
