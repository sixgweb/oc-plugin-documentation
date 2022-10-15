# Behaviors

All behaviors are implemented via integrations extending the [AbstractEventHandler](/attributize/api/eventhandler) class.

## Sixgweb\Conditions\Behaviors\Conditionable

Conditionable adds the global **meetsConditions()** scope to the model and syncs conditions to the conditions table.
