# Behaviors

All behaviors are implemented via integrations extending the [AbstractEventHandler](/attributize/api/eventhandler) class.

## Sixgweb\Attributize\Behaviors\Fieldable

Fieldable creates the relationship between the Field model and the Plugin model.

## Methods

### public function getFieldableFields(): October\Rain\Database\Collection

Returns model fields based on the current area (frontend/backend), action (create/update) and enabled status.

### public function getAllFieldableFields(): October\Rain\Database\Collection

Returns all model fields, regardless of area, action or enabled status. 

## Sixgweb\Attributize\Behaviors\FieldsController

Adds the **fields** controller action, updates available list columns, 

## Sixgweb\Attributize\Behaviors\FieldsImportExportController

Adds Fieldable Fields to the export columns

### Methods