# Fields Component

Each integration will provide its own fields component to display the corresponding fields.  The fields component will search the current page/layout for the component matching the integration, so both must be added to the page/layout.  

For example, the RainLab.User integration requires both the RainLab.User account and AttributizeUsers userFields components to be added to the page/layout.

## Properties

### Container Class
Container class used for fields container.  Default: `row`

### Floating Labels
Enable Bootstrap 5 floating labels on form fields.  Default: `false`

### Use Tabbed Interface
Use Bootstrap 5 tabbed interface for fields. Default: `true`

### Preview Mode
User preview mode for the form fields (read only). Default: `false`

### Limit Fields
Limit to checked fields.  If none are checked, show all.  Default: `[]`

::: danger Validation Notice
Fields not included in `codes` will not be validated.
:::

### Limit Tabs
Limit fields to checked tab.  If none are checked, show all.  Default: `[]`

::: danger Validation Notice
Fields not included in `tabs` will not be validated.
:::
