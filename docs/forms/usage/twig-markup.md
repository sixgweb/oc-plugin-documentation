# Twig Functions
The following functions are provided by the Forms plugin.

## entryFieldValuesToHTML(): string
Generates nested HTML from the model's field values.

| Parameter | Description |
| ----------- | ----------- |
| $model | [Fieldable model](/attributize/api/behaviors.html#sixgweb-attributize-behaviors-fieldable).  In this case, the Entry model  |
| $options array | Save entries to the database |
| Purge Entries | Purge entries saved to the database, after a specified number of days |
| Purge Days | Number of days to keep form entries in database |
| Throttle Entries | Limit the number of Entries Allowed in a given Time Period/Unit |
| Entries Allowed | Number of entries allowed in the given time period |
| Entry Time Period | Time period number to allow number of entries |
| Entry Time Period Unit | Unit of time used for the time period value |
| Throttle by IP Address | Throttle entries by IP address, instead of session ID. If user is logged in, throttling is done by user ID regardless of this setting |
