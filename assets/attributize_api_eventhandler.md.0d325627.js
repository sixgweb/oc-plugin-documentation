import{_ as e,c as t,o as n,a as o}from"./app.47e09d4a.js";const m=JSON.parse('{"title":"Event Handler","description":"","frontmatter":{},"headers":[{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"protected function getTitle(): string","slug":"protected-function-gettitle-string","link":"#protected-function-gettitle-string","children":[]},{"level":3,"title":"protected function getModelClass(): string","slug":"protected-function-getmodelclass-string","link":"#protected-function-getmodelclass-string","children":[]},{"level":3,"title":"protected function getComponentClass(): ?string","slug":"protected-function-getcomponentclass-string","link":"#protected-function-getcomponentclass-string","children":[]},{"level":3,"title":"protected function getControllerClass(): string","slug":"protected-function-getcontrollerclass-string","link":"#protected-function-getcontrollerclass-string","children":[]},{"level":3,"title":"protected function getComponentModel($component): Model","slug":"protected-function-getcomponentmodel-component-model","link":"#protected-function-getcomponentmodel-component-model","children":[]},{"level":3,"title":"protected function getBackendMenuParameters(): array","slug":"protected-function-getbackendmenuparameters-array","link":"#protected-function-getbackendmenuparameters-array","children":[]}]}],"relativePath":"attributize/api/eventhandler.md"}'),r={name:"attributize/api/eventhandler.md"},a=o('<h1 id="event-handler" tabindex="-1">Event Handler <a class="header-anchor" href="#event-handler" aria-hidden="true">#</a></h1><p>Attributize integration Event Subscriber class. Extends AbstractEventHandler class. See <a href="/oc-plugin-documentation/attributize/integrations/build-your-own.html#event-handler">Build Your Own</a> for code sample.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="protected-function-gettitle-string" tabindex="-1">protected function getTitle(): string <a class="header-anchor" href="#protected-function-gettitle-string" aria-hidden="true">#</a></h3><p>Title used in backend navigation and field editor</p><h3 id="protected-function-getmodelclass-string" tabindex="-1">protected function getModelClass(): string <a class="header-anchor" href="#protected-function-getmodelclass-string" aria-hidden="true">#</a></h3><p>Model class that stores the field data in the field_values column</p><h3 id="protected-function-getcomponentclass-string" tabindex="-1">protected function getComponentClass(): ?string <a class="header-anchor" href="#protected-function-getcomponentclass-string" aria-hidden="true">#</a></h3><p>Frontend component to inject Attributize Fields component into. Return null if no frontend editing required.</p><h3 id="protected-function-getcontrollerclass-string" tabindex="-1">protected function getControllerClass(): string <a class="header-anchor" href="#protected-function-getcontrollerclass-string" aria-hidden="true">#</a></h3><p>Controller class responsible for editing model class</p><h3 id="protected-function-getcomponentmodel-component-model" tabindex="-1">protected function getComponentModel($component): Model <a class="header-anchor" href="#protected-function-getcomponentmodel-component-model" aria-hidden="true">#</a></h3><p>Logic used to retrieve model via the frontend component.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><p>Cms\\Classes\\ComponentBase $component</p><h3 id="protected-function-getbackendmenuparameters-array" tabindex="-1">protected function getBackendMenuParameters(): array <a class="header-anchor" href="#protected-function-getbackendmenuparameters-array" aria-hidden="true">#</a></h3><p>Existing backend plugin menu parameters. Used to insert new link to edit fields.</p>',17),i=[a];function c(d,s,l,p,h,u){return n(),t("div",null,i)}const f=e(r,[["render",c]]);export{m as __pageData,f as default};
