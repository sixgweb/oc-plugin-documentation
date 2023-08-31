# Twig Functions
The following functions are provided by the Forms plugin.

## entryFieldValuesToHTML(): string
Generates nested HTML from the model's field values.

``` twig
{% set options = {'container':'div', 'wrapper':'div', 'label':'strong', 'labelSeparator':' - ' } %}
{{ entryFieldValuesToHTML(entry, options)}}
```

### Parameters

#### model
[Fieldable model](/attributize/api/behaviors.html#sixgweb-attributize-behaviors-fieldable).  In this case, the Entry model 

#### options

| Key | Description | Default |
| ----------- | ----------- | ----------- |
| container | Container HTML element. | ul |
| wrapper | Element wrapper HTML element. | li |
| label | Element wrapper for field name. | strong |
| labelSeparator | Separator between field name an value | : |