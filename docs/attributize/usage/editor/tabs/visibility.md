# Visibility Tab

Press the Add Validation button to add <a href="https://docs.octobercms.com/3.x/extend/services/validation.html#available-validation-rules" target="_blank">validation rules</a> to this field.
![Field Editor](../../images/tab-visibility.jpg 'Visibility')

## Area

Area of the website this field is visible

- **Frontend/Backend**: Show field in frontend and backend of website
- **Frontend**: Show field in frontend of website only
- **Backend**: Show field in backend of website only

## Action

Database action this field is visible for

- **Create/Update**: Creating and updating a record
- **Create**: Creating a record only
- **Update**: Updating a record only

## Trigger

Trigger this fields visibility based on another field's conditions.

- **Triggering Field**: Other field that triggers this field's visibility
- **Triggering Field Condition**: OctoberCMS <a href="https://docs.octobercms.com/3.x/element/field-conditions.html#trigger-events" target="_blank">trigger event condition</a>
- **Action**: Action to perform on this field, if triggering field condition is met.
    - **Show**: Show this field if condition met, otherwise hide it.
    - **Hide**: Hide this field if condition met, otherwise show it.
    - **Enable**: Enable this field if condition met, otherwise disable it.
    - **Disable**: Enable this field if condition met, otherwise enable it.
    - **Emtpy**: Empty this field if condition met.
