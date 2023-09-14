# Events

### listSaverPreferencesQuery
Opportunity for 3rd party developers to modify the preferences query.
``` php
Event::listen('sixgweb.listsaver.listSaverPreferencesQuery', function (&$query) {
    $query->whereNotIn('id', $this->getUserIgnoreListSaverPreferences());
});
```

### applyScopeToQuery
Opportunity for other plugins to extend the scope query
```php
Event::listen('sixgweb.listsaver.applyScopeToQuery', function ($listSaverWidget, $preference, $query) {
    $ids = $preference->list['checked'] ?? [];
    if (!empty($ids)) {
        $query->whereIn('id', $ids);
    }
});
```