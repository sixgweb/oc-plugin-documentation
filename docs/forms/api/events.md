# Events

## sixgweb.forms.entry.beforeSave

Event fired before the entry is saved to the database, after validation.

``` php
Event::listen('sixgweb.forms.entry.beforeSave', function ($entry) {
    if ($entry->form->slug == 'soup') {
        throw new ApplicationException('No Soup for You!');
    }
});
```

## sixgweb.forms.entry.afterSave

Event fired after the entry is saved to the database.

``` php
Event::listen('sixgweb.forms.entry.afterSave', function ($entry) {
    if (
        $entry->field_values['cellphone'] && 
        $entry->field_values['text_me']
    ) {
        $this->addTextMessageSubscriber($entry->field_values['cellphone']);
    }
});
```