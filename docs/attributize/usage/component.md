# Fields Component

The `attributizeFields` component is automatically injected via the integration.  For example, the [RainLab User Integration](/attributizeusers/) injects the Fields component into the Account component for registration and update.

End users need only ensure the component is added to the page or partial via the twig component tag
```
{% component 'attributizeFields' %}
```

## Properties

### codes
Limit fields to specified code(s). Accepts comma separated or array value.  Default: `[]`

_Note: Field codes can be found in field's [settings tab](/attributize/usage/editor/tabs/settings)_

```
{% component 'attributizeFields' tabs='first_name,last_name,city,state' %}`
```
OR
```
{% 
    component 'attributizeFields'
    tabs=['first_name', 'last_name', 'city', 'state'] 
%}`
```

::: danger Validation Notice
Fields not included in `codes` will not be validated.
:::

### tabs
Limit fields to specified tab(s).  Accepts comma separated or array value. Default: `[]`

_Note: Values must match tab names exactly.  If you change tab names, you must change the value(s) as well._

```
{% component 'attributizeFields' tabs='Address,Contact Information' %}`
```
OR
```
{% component 'attributizeFields' tabs=['Address, 'Contact Information'] %}`
```

::: danger Validation Notice
Fields not included in `tabs` will not be validated.
:::


### useTabs
Use Bootstrap 5 tabbed interface for fields. Default: `true`

```
{% component 'attributizeFields' useTabs=true %}`
```

### floatingLabels
Enable Bootstrap 5 floating labels on form fields.  Takes precedence over [Settings](/attributize/settings.html#floating-labels). Default: `false`

```
{% component 'attributizeFields' floatingLabels=true %}
```

### previewMode
Enable preview mode for the form fields, rending them readonly. Default: `false`

```
{% component 'attributizeFields' previewMode=true %}
```

### fieldsContainerClass
Container class used for fields container.  Default: `row`

```
{% component 'attributizeFields' fieldsContainerClass='bg-light p-5' %}
```