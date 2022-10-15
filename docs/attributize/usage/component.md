# Component

It is the responsibility of the integration plugin to inject the component into the corresponding frontend component.  For example, the [RainLab User Integration](/attributizeusers/) injects the Fields component into the Account component for registration and update.

End users need only ensure the component is added to the page or partial via the twig component tag
```
{% component 'attributizeFields' %}
```