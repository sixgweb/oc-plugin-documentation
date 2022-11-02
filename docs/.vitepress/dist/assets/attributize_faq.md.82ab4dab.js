import{_ as e,c as a,o as t,a as s}from"./app.f4fd79f1.js";const g=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"How is the Data Stored?","slug":"how-is-the-data-stored","link":"#how-is-the-data-stored","children":[]},{"level":2,"title":"How do I access the data for display?","slug":"how-do-i-access-the-data-for-display","link":"#how-do-i-access-the-data-for-display","children":[]},{"level":2,"title":"What Happens to the Data when a field is deleted?","slug":"what-happens-to-the-data-when-a-field-is-deleted","link":"#what-happens-to-the-data-when-a-field-is-deleted","children":[]},{"level":2,"title":"Invalid date value supplied to DateTime helper","slug":"invalid-date-value-supplied-to-datetime-helper","link":"#invalid-date-value-supplied-to-datetime-helper","children":[]},{"level":2,"title":"Can I Customize Frontend Output?","slug":"can-i-customize-frontend-output","link":"#can-i-customize-frontend-output","children":[]}],"relativePath":"attributize/faq.md"}'),i={name:"attributize/faq.md"},n=s(`<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h1><h2 id="how-is-the-data-stored" tabindex="-1">How is the Data Stored? <a class="header-anchor" href="#how-is-the-data-stored" aria-hidden="true">#</a></h2><p>Integrations add a JSON column named <strong>field_values</strong> to the Fieldable model&#39;s table where all field data is stored. Fields with <strong>Is Searchable</strong> or <strong>Is Filterable</strong> enabled will have a generated column and corresponding index created, using the value from the field_values column.</p><h2 id="how-do-i-access-the-data-for-display" tabindex="-1">How do I access the data for display? <a class="header-anchor" href="#how-do-i-access-the-data-for-display" aria-hidden="true">#</a></h2><p>Use the <a href="/oc-plugin-documentation/attributize/usage/twigfilter.html#twig-filter">Twig Filter</a> or you may access the model data by using the <strong>field_values</strong> column and the field <a href="/oc-plugin-documentation/attributize/usage/editor/tabs/settings.html">code</a>.</p><div class="language-twig"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre><code><span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{ </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">field_values</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">favorite_color</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">{% </span><span style="color:#89DDFF;">endfor</span><span style="color:#89DDFF;"> %}</span></span>
<span class="line"></span></code></pre></div><h2 id="what-happens-to-the-data-when-a-field-is-deleted" tabindex="-1">What Happens to the Data when a field is deleted? <a class="header-anchor" href="#what-happens-to-the-data-when-a-field-is-deleted" aria-hidden="true">#</a></h2><p>The data in the <strong>field_values</strong> column will be kept for backup/historical purposes.</p><p>Let&#39;s say you accidentally delete the <strong>First Name</strong> field. Luckily, the data remains in the table and is easily retrievable by recreating the <strong>First Name</strong> field.</p><h2 id="invalid-date-value-supplied-to-datetime-helper" tabindex="-1">Invalid date value supplied to DateTime helper <a class="header-anchor" href="#invalid-date-value-supplied-to-datetime-helper" aria-hidden="true">#</a></h2><p>This happens when an existing Field, with model data, is changed to a datetime type. You must either update the records to use a datetime value or revert the Field back to the original type.</p><h2 id="can-i-customize-frontend-output" tabindex="-1">Can I Customize Frontend Output? <a class="header-anchor" href="#can-i-customize-frontend-output" aria-hidden="true">#</a></h2><p>Attributize provides a visual field editor for native OCMS fields and exposes the backend fields for frontend use. Attributize does <strong>not</strong> provide a method to override field output and the backend partials are used to generate the field HTML.</p>`,13),l=[n];function o(d,r,p,h,c,u){return t(),a("div",null,l)}const m=e(i,[["render",o]]);export{g as __pageData,m as default};