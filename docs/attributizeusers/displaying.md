# Displaying Values

Values can be displayed on any page by adding the RainLab.User Account component (for version 2.x) or RainLab.User Session component (for version 3.x) to the page.  This will expose the `user` variable to your page, which can then be passed to the [field_value twig filter](/attributize/usage/twigfilter.html)

```twig
{% if user %}
    {{ user|field_value('field_code_here') }}
{% endif %}
```

