# Forms Controller
The forms area contains all of the forms for your project and provides the following configuration:

![Form Editor](./../images/forms-controller.jpg)

## Details Tab
![Form Details](./../images/form-tab-details.jpg)

| Field | Description |
| --- | -- |
| Is Enabled | Enable or disable the form |
| Name | The name of the form |
| Description | The description of the form, shown above the form fields |
| Confirmation Message | The message displayed to the user upon successful entry.  Message does not display if form set to redirect after submission |

## Settings Tab
![Form Settings](./../images/form-tab-settings.jpg)

| Field | Description |
| ----------- | ----------- |
| Submission Redirect URL | URL to redirect to after submission. Leave blank to show form confirmation message. |
| Save Entries | Save entries to the database |
| Purge Entries | Purge entries saved to the database, after a specified number of days |
| Purge Days | Number of days to keep form entries in database |
| Throttle Entries | Limit the number of Entries Allowed in a given Time Period/Unit |
| Entries Allowed | Number of entries allowed in the given time period |
| Entry Time Period | Time period number to allow number of entries |
| Entry Time Period Unit | Unit of time used for the time period value |
| Throttle by IP Address | Throttle entries by IP address, instead of session ID. If user is logged in, throttling is done by user ID regardless of this setting |

## Fields Tab

The Attributize fields editor is available, after the form has been created.

![Form Fields](./../images/form-tab-fields.jpg)

Displays the Attributize field editor.

::: tip Automatic Conditions
Fields created under the Fields Tab will automatically have a condition created for the current form.
:::

## Conditions Tab
Displays the form Conditions editor, allowing conditions required to view the form.