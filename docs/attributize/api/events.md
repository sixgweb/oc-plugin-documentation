# Events

## sixgweb.attributize.fieldable.getFields

~~sixgweb.attributize.getFieldableFields~~ <small>(deprecated 1.1.0)</small>

Provides and opportunity to modify the Field model query

``` php
//October\Rain\Database\Builder $fieldQuery
Event::listen('sixgweb.attributize.fieldable.getFields', function (&$fieldQuery) {
    $fieldQuery->where('code', '!=', 'purple');
});
```

## sixgweb.attributize.fieldable.afterGetFields

~~sixgweb.attributize.afterGetFieldableFields~~ <small>(deprecated 1.1.0)</small>

Provides and opportunity to modify the Field results collection.

``` php
//October\Rain\Database\Collection $fields
Event::listen('sixgweb.attributize.fieldable.afterGetFields', function(&$fields) {
    $fields = $fields->filter(function ($field) {
        return $field->type == 'text';
    });
});
```

## sixgweb.attributize.field.getOptionsOptions

Provides and opportunity to add predefined values for a dropdown field type.

``` php
//Sixgweb\Attributize\Models\Field
Field::extend(function ($model) {
    $model->bindEvent('sixgweb.attributize.field.getOptionsOptions', function (&$options) {
        $options['Sixgweb\AttributizeAcme\Plugin::getTimezoneOptions'] = 'Timezones';
    });
});
```

## fields.getFieldValues

Fired in the [Fields Component](/attributize/usage/component) and provides access to `$fieldValues` for customization.

``` php
use Sixgweb\Attributize\Components\Fields;

Fields::extend(function ($component) {
    $component->bindEvent('fields.getFieldValues', function (&$fieldValues) use ($component) {
    });
});
```

