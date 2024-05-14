# Behaviors

All behaviors are implemented via integrations extending the [AbstractEventHandler](/attributize/api/eventhandler) class.

## Sixgweb\Attributize\Behaviors\Fieldable

Fieldable creates the relationship between the Field model and the Plugin model.

## Methods

### public function fieldableGetFields

``` php
public fieldableGetFields($options = []);

$myModel->fieldableGetFields([
    'useScopes' => true, //Default true.  Use area and action scopes
    'useGlobalScopes' => true, //Default true.  Use false to withoutGlobalScopes() on the query
    'useCache' => true, //Default true.  cache query results for duplicate queries
]);
```

Returns model fields based on provided $options.

## Sixgweb\Attributize\Behaviors\FieldsController

Adds the **fields** controller action, updates available list columns, 

## Sixgweb\Attributize\Behaviors\FieldsImportExportController

Adds Fieldable Fields to the export columns