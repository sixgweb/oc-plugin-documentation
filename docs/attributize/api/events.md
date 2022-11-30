# Events

## sixgweb.attributize.getFieldableFields

Provides and opportunity to modify the Field model query

``` php
//October\Rain\Database\Builder $fieldQuery
Event::listen('sixgweb.attributize.getFieldableFields', function (&$fieldQuery) {
    $fieldQuery->where('code', '!=', 'purple');
});
```

## sixgweb.attributize.afterGetFieldableFields

Provides and opportunity to modify the Field results collection.

``` php
//October\Rain\Database\Collection $fields
Event::listen('sixgweb.attributize.afterGetFieldableFields', function(&$fields) {
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

## sixgweb.attributize.createPreview

Provides access to the preview Field query and List View filter widget

``` php
//October\Rain\Database\Builder $fieldQuery
//Backend\Widgets\Filter $filterWidget
Event::listen('sixgweb.attributize.createPreview', function($fieldQuery, $filterWidget) {
    $filterWidget->addScopes([
        'new_scope' => [
            'label' => 'New Filter Scope'
        ]
    ]);
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