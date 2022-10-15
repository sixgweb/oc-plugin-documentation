# FAQ

## How is the Data Stored?

Integrations add a JSON column named **field_values** to the Fieldable model's table.  When a Field is saved, a virtual column and corresponding index are added, using the value from the field_values column

## How do I access the data for display?
you may access the model data by using the **field_values** column or the **field_values_** prefix, followed by the field code.  Field codes can be found in the field editor [settings tab](./usage/editor/tabs/settings).

``` twig
{% for item in items %}
    {{ item.field_values_favorite_color }}
    or
    {{ item.field_values.favorite_color}}
{% endfor %}
```

## What Happens to the Data when a field is deleted?
The data in the **field_values** column will be kept for backup/historical purposes.

Let's say you accidentally delete the **First Name** field.  Luckily, the data remains in the table and is easily retrievable by recreating the **First Name** field. 

## Invalid date value supplied to DateTime helper

This happens when an existing Field, with model data, is changed to a datetime type.  You must either update the records to use a datetime value or revert the Field back to the original type.