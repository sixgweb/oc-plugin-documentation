# Behaviors

## Fieldable Behavior
Responsible for creating the relationship between the Field model and the model implementing the behavior.  This behavior handles Field validation and system file attachments.  

::: tip Required Column
Implementing model must have database column names **field_values**
:::

## FieldsController Behavior
Provides the **fields** controller action 

## FieldsImportExportController Behavior
Extends the FormImportExportController config, adding fields to the list of exportable columns. 