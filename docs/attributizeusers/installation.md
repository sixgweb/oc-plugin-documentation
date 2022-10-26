# Installation

## Requirements

- Sixgweb.Attributize
- RainLab.User

## Marketplace

Add the plugin to your project via the [OctoberCMS Market Place](https://octobercms.com/plugins) and run the following command in your project root:

```
php artisan project:sync
```

## Composer

Install via composer by running the following command in your project root:
```
composer require sixgweb/attributizeusers-plugin
```

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


