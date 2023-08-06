# Events

## sixgweb.forms.beforeEntry

Event fired before the entry is saved to the database.

``` php
//Sixgweb\Forms\Models\Entry $entry
Event::listen('sixgweb.forms.beforeEntry', function ($entry) {
    if ($entry->form->slug == 'soup') {
        throw new ApplicationException('No Soup for You!');
    }
});
```

## sixgweb.forms.afterEntry

Event fired after the entry is saved to the database.

``` php
//Sixgweb\Forms\Models\Entry $entry
Event::listen('sixgweb.forms.afterEntry', function ($entry) {
    if ($entry->field_values['cellphone'] && $entry->field_values['text_me']) {
        sendTextMessage($entry->field_value['cellphone'], 'Thank you for your entry');
    }
});
```