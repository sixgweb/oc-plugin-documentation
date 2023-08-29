# Installation

## Requirements

- Sixgweb.Attributize
- RainLab.User

## Marketplace

Add the plugin to your project via the [OctoberCMS Marketplace](https://octobercms.com/plugins) and run the following command in your project root:

```
php artisan project:sync
```

## Composer

Install via composer by running the following command in your project root:
```
composer require sixgweb/attributizeusers-plugin
```

## Frontend Component
Add the **AttributizeUsers->User Fields** and **User->Account** components to the page.  Override the RainLab Account register.html and update.html partials to include the `userFields` component, before the submit button.  Refer to OctoberCMS <a href="https://docs.octobercms.com/3.x/cms/themes/components.html#overriding-component-partials" target="_blank">Overriding Component Partials</a> for more information on overriding component partials.

Refer to [Attributize Fields Component](/attributize/usage/component) for component options

plugins/rainlab/user/components/account/register.htm
```twig
{% component 'userFields' %}

<button type="submit" class="btn btn-default">Register</button>
```

plugins/rainlab/user/components/account/update.htm
```twig
{% component 'userFields' %}

<button type="submit" class="btn btn-default">Save</button>
```


