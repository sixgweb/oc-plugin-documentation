# Conditions

Adds conditional logic repeater field to other OctoberCMS plugins via integrations.  Conditioners are loaded and applied to Conditionables through a global scope, which excludes records that don't meet the required conditions.

<iframe height="388" src="https://www.youtube-nocookie.com/embed/jwV07dcMXeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%"></iframe>

### Conditions Editor
The conditions editor is an OctoberCMS repeater field, automatically added to form widgets that edit Conditionable models.  [Learn More](./usage/editor)


### Conditionable Models
Conditionable Models compare their conditions to the loaded Conditioner Model(s), using a [global scope](https://laravel.com/docs/9.x/eloquent#global-scopes)

### Conditioner Models
Conditioner Models are defined via Integrations and used by the Conditionable Model(s)