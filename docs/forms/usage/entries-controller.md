# Entries Controller

The Entries Controller displays all the form submissions for your website, filterable by Form and/or Creation Date.

![Entries List](./../images/entries-controller-no-form-filter.jpg)

Once a form is selected in the Form filter, you will have the corresponding fields available in the List Setup and any fields with the setting **Is Filterable** added to the filter widget.

![Entries List](./../images/entries-controller.jpg)

::: tip ListSaver Plugin
Check out the [ListSaver](https://octobercms.com/plugin/sixgweb-listsaver) plugin to save your filter/list column setup for quick switching between entries.
:::

## Entry Editor

Fields without form conditions will alway be visible.  Fields with form conditions will appear/hide based on the selected form value.

![Entry Editor](./../images/entry-editor.jpg)

## Entry Import/Export
![Entries List](./../images/entries-controller.jpg)

Form entries can be exported directly from the list view or via the export behavior.  Entries can be imported via the import behavior.  [Read the Documentation](https://docs.octobercms.com/3.x/extend/importexport/importexport-controller.html) to learn more about OctoberCMS import/export behaviors.

### List View Export
Set up your desired list columns and filter values and press the **Download Results** button to export the current list to a .csv file

### Export Behavior
Press the **Export** button to view the entry exporter.  Selecting a Form value in the exporter will update the available columns.

### Import Behavior
Press the **Import** button to view the entry importer.  Selecting a Form value in the importer will update the available columns.

