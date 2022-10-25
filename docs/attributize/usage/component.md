# Fields Component

The `attributizeFields` component is automatically injected via the integration.  For example, the [RainLab User Integration](/attributizeusers/) injects the Fields component into the Account component for registration and update.

End users need only ensure the component is added to the page or partial via the twig component tag
```
{% component 'attributizeFields' %}
```

## Properties

### floatingLabels

Enable Bootstrap 5 floating labels on form fields.  Takes precedence over [Settings](/attributize/settings.html#floating-labels).

```
{% component 'attributizeFields' floatingLabels=true %}
```

### previewMode

Enable preview mode for the form fields, rending them readonly.

```
{% component 'attributizeFields' previewMode=true %}
```

### fieldsContainerClass

Container class used for fields container.  Defaults to `row`

```
{% component 'attributizeFields' fieldsContainerClass='bg-light p-5' %}
```