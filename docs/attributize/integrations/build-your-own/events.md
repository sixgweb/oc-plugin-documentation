# Events

## Fieldable

**getFieldableFields**<br />
Opportunity to manipulate the fieldable query
``` php
Event::listen('sixgweb.attributize.getFieldableFields', function (&$fieldQuery) {
    $fieldQuery->where('code', 'your_code');
});
```

**getFieldableFields**<br />
Opportunity to manipulate the fields results
``` php
Event::listen('sixgweb.attributize.beforeGetFieldableFields', function (&$fields) {
    $fields->wehere
});
```

## Attributize
**createPreview**<br />
Opportunity to manipulate the field query and filterWidget in the Attributize form widget
``` php
Event::listen('sixgweb.attributize.createPreview', function ($fieldQuery, $this->filterWidget) {
    $fields->wehere
});
```