# FAQ

## How is the Data Stored?
Integrations add a JSON column named **field_values** to the Fieldable model's table where all field data is stored.  Fields with **Is Searchable** or **Is Filterable** enabled will have a generated column and corresponding index created, using the value from the field_values column.

## How do I access the data for display?
Use the [Twig Filter](/attributize/usage/twigfilter.html#twig-filter) or you may access the model data by using the **field_values** column and the field [code](/attributize/usage/editor/tabs/settings.html).

``` twig
{% for item in items %}
    {{ item.field_values.favorite_color}}
{% endfor %}
```

## What Happens to the Data when a field is deleted?
The data in the **field_values** column will be kept for backup/historical purposes.

Let's say you accidentally delete the **First Name** field.  Luckily, the data remains in the table and is easily retrievable by recreating the **First Name** field. 

## Invalid date value supplied to DateTime helper
This happens when an existing Field, with model data, is changed to a datetime type.  You must either update the records to use a datetime value or revert the Field back to the original type.

## Can I Customize Frontend Output?
Not at this time.  Attributize exposes backend form widgets for frontend use.  All form fields are generated using the same HTML output found in the backend, which is currently Bootstrap 5 markup.