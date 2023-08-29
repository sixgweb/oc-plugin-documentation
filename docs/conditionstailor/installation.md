# Installation

## Requirements

- OctoberCMS 3.x
- Sixgweb.Conditions

## Marketplace

Add the plugin to your project via the [OctoberCMS Marketplace](https://octobercms.com/plugins) and run the following command in your project root:

```
php artisan project:sync
```

## Composer
Install via composer by running the following command in your project root:
```
composer require sixgweb/conditionstailor-plugin
```

## Blueprint Field
Conditions will only be added to entry records that have a conditions field defined.  See [Blueprints](https://docs.octobercms.com/3.x/cms/tailor/blueprints.html) for more information on defining blueprint fields.

The conditions field must be named conditions and use type conditions.

``` YAML
fields:
    conditions:
        type: conditions

```

After you add the conditions field to the blueprint, press Save and Migrate