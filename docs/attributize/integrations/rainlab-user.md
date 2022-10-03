# RainLab User Integration

Integrates Attributize with RainLab User plugin. Adds a new **User Fields** backend menu item and injects the Attributize Field component into the RainLab.User Account component.

## Installation
Install via composer
```
composer require sixgewb/attributizeusers-plugin
```

## Managing Fields
Log into the backend of your OctoberCMS installation and click the **Users->User Fields** menu link.  Refer to the [Field List](/attributize/usage/list) and [Field Editor](/attributize/usage/editor) pages for more information on field management.

## Frontend Component
The Attributize Field component is automatically injected and available under the alias **attributizeFields**.  Override the RainLab Account register.html and update.html partials and include the component before the submit button.  Refer to OctoberCMS <a href="https://docs.octobercms.com/3.x/cms/themes/components.html#overriding-component-partials" target="_blank">Overriding Component Partials</a> for more information on overriding component partials.

plugins/rainlab/user/components/account/register.htm
```twig
{% component 'attributizeFields' %}

<button type="submit" class="btn btn-default">Register</button>
```

plugins/rainlab/user/components/account/update.htm
```twig
{% component 'attributizeFields' %}

<button type="submit" class="btn btn-default">Save</button>
```


