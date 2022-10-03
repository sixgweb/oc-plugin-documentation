# Conditions
An OctoberCMS plugin that enables filtering of Conditionable Models by one or more Conditioner Models.  Conditionable and Conditioner Models are defined in each plugin integration.

For example, the RainLab.User integration enables the User Group Conditioner.

![Conditions Editor](./images/conditions-repeater.png 'Conditions Editor')

### Conditions Editor
The conditions editor is an OctoberCMS repeater field, automatically added to form widgets that edit Conditionable models.  [Learn More](./usage/editor)


### Conditionable Models
Conditionable Models compare their conditions to the loaded Conditioner Model(s), using a [global scope](https://laravel.com/docs/9.x/eloquent#global-scopes)

### Conditioner Models
Conditioner Models are eager loaded, through Integrations, and used by the Conditionable Model(s) [global scope](https://laravel.com/docs/9.x/eloquent#global-scopes).