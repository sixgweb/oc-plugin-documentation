# Twig Filter

## |field_value(field)

The `|field_value` filter returns the model value for the provided field object or [field code](/attributize/usage/editor/tabs/settings.html) string.


For example, we can `fieldableGetFields()` for the current user and retrieve each value.
``` twig
<ul>
{% for field in user.fieldableGetFields() %}
    <li>{{ field.name }}: {{ user|field_value(field) }}</li>
{% endfor %}
</ul>
```

Alternatively, we can provide the [field code](/attributize/usage/editor/tabs/settings.html) to retrieve a single value
``` twig
<div id="welcome">
    Welcome {{ user|field_value('first_name') }}!
</div>
```