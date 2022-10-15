# Conditions

![Conditions Editor](./images/conditions-banner.png 'Conditions Banner')

Adds conditional logic repeater field to other OctoberCMS plugins via integrations.  Conditioners are eager loaded and applied to Conditionables through a global scope, which excludes records that don't meet the required conditions.

### Conditions Editor
The conditions editor is an OctoberCMS repeater field, automatically added to form widgets that edit Conditionable models.  [Learn More](./usage/editor)


### Conditionable Models
Conditionable Models compare their conditions to the loaded Conditioner Model(s), using a [global scope](https://laravel.com/docs/9.x/eloquent#global-scopes)

### Conditioner Models
Conditioner Models are eager loaded, through Integrations, and used by the Conditionable Model(s) [global scope](https://laravel.com/docs/9.x/eloquent#global-scopes).