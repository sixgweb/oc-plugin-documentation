import{_ as e,o as a,c as t,R as o}from"./chunks/framework.48da797c.js";const m=JSON.parse('{"title":"Fields Component","description":"","frontmatter":{},"headers":[],"relativePath":"attributize/usage/component.md","filePath":"attributize/usage/component.md"}'),i={name:"attributize/usage/component.md"},l=o('<h1 id="fields-component" tabindex="-1">Fields Component <a class="header-anchor" href="#fields-component" aria-label="Permalink to &quot;Fields Component&quot;">​</a></h1><p>Each integration will provide its own fields component to display the corresponding fields. The fields component will search the current page/layout for the component matching the integration, so both must be added to the page/layout.</p><p>For example, the RainLab.User integration requires both the RainLab.User account and AttributizeUsers userFields components to be added to the page/layout.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="container-class" tabindex="-1">Container Class <a class="header-anchor" href="#container-class" aria-label="Permalink to &quot;Container Class&quot;">​</a></h3><p>Container class used for fields container. Default: <code>row</code></p><h3 id="floating-labels" tabindex="-1">Floating Labels <a class="header-anchor" href="#floating-labels" aria-label="Permalink to &quot;Floating Labels&quot;">​</a></h3><p>Enable Bootstrap 5 floating labels on form fields. Default: <code>false</code></p><h3 id="use-tabbed-interface" tabindex="-1">Use Tabbed Interface <a class="header-anchor" href="#use-tabbed-interface" aria-label="Permalink to &quot;Use Tabbed Interface&quot;">​</a></h3><p>Use Bootstrap 5 tabbed interface for fields. Default: <code>true</code></p><h3 id="preview-mode" tabindex="-1">Preview Mode <a class="header-anchor" href="#preview-mode" aria-label="Permalink to &quot;Preview Mode&quot;">​</a></h3><p>User preview mode for the form fields (read only). Default: <code>false</code></p><h3 id="limit-fields" tabindex="-1">Limit Fields <a class="header-anchor" href="#limit-fields" aria-label="Permalink to &quot;Limit Fields&quot;">​</a></h3><p>Limit to checked fields. If none are checked, show all. Default: <code>[]</code></p><div class="danger custom-block"><p class="custom-block-title">Validation Notice</p><p>Fields not included in <code>codes</code> will not be validated.</p></div><h3 id="limit-tabs" tabindex="-1">Limit Tabs <a class="header-anchor" href="#limit-tabs" aria-label="Permalink to &quot;Limit Tabs&quot;">​</a></h3><p>Limit fields to checked tab. If none are checked, show all. Default: <code>[]</code></p><div class="danger custom-block"><p class="custom-block-title">Validation Notice</p><p>Fields not included in <code>tabs</code> will not be validated.</p></div>',18),n=[l];function s(r,d,c,h,p,b){return a(),t("div",null,n)}const u=e(i,[["render",s]]);export{m as __pageData,u as default};