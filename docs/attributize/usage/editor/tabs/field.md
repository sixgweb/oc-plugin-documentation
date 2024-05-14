# Field Tab

In addition the following standard inputs, the Field tab also displays configuration options based on the Field Type.  (refer to the Fields section in the sidebar)

![Field Editor](../../images/tab-configuration-standard.jpg 'Standard')

## Standard Options
- **Name**: Used as the label for the field, as well as the column header for exports.
- **Type**: Type of field displayed to the user
- **Tab**: (optional) Tab name used to display field
- **CSS Classes**: (optional) CSS classes added to the field's container
- **Instructions**: (optional) Provide the user with helpful information about the field

## Checkbox List/Radio
![Field Editor](../../images/tab-configuration-values.jpg 'Values')
- **Values**: Add the available Values, including Label and Value

## Color Picker
![Field Editor](../../images/tab-configuration-colors.jpg 'Color Picker')
- **Available Colors**: Tag list of available hexadecimal colors

## Date Picker
![Field Editor](../../images/tab-configuration-datepicker.jpg 'Date Picker')
- **Mode**: Set the date picker mode to date and time, date only or time only.
- **Date Form**: (optional) Preferred date format (m/d/Y)
- **Minimum Date**: (optional) Set minimum date allowed
- **Maximum Date**: (optional) Set maximum date allowed

## Dropdown
![Field Editor](../../images/tab-configuration-dropdown.jpg 'Values')
- **Empty Option Text**: Text displayed when no option is selected
- **Use Predefined Values**: Predefined values provided by other plugins or define your own values.  (see [RainLab Location Integration](/attributize/integrations/rainlab-location) for a predefined example)
- **Values**: Press the New Value button to define your own dropdown values. 

## File Upload
![Field Editor](../../images/tab-configuration-fileupload.jpg 'File Upload')
- **Mode**: File upload mode of either single/multi image or single/multi file
- **Make Public**: 
    - **On**: Public images/files accessible through the frontend/backend (profile images, resumes, etc.)
    - **Off**: Private images/files only accessible through the backend (tax documents, etc.).
- **Use Captions**: Allow editing of title and description of uploaded image/file.
- **Allowed File Types**: Allowed image/file types for upload.  Select from predefined options or enter your own, separated by a comma.

## Number
![Field Editor](../../images/tab-configuration-number.jpg 'Number')
- **Minimum**: Minimum number allowed.
- **Maximum**: Maximum number allowed.

## Repeater
![Field Editor](../../images/tab-configuration-repeater.jpg 'Repeater')
- **Minimum Required**: Minimum number of repeater items required.
- **Maximum Allowed**: Maximum number of repeater items allowed.
- **Add Item Button Text**: Text used in the repeater add button.
- **Fields**: A nested  Field Editor to create repeater fields.