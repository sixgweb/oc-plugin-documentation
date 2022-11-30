# Build Your Own
Basic integration with Attributize is achieved through a Migration, Plugin File, Event Handler and Component.

## Migration

Integrations are required to add the **field_values** column to the Fieldable model's table

`plugins/acme/attributizeproduct/updates/add_field_values_to_table.php`

```php
<?php

namespace Acme\AttributizeProduct\Updates;

use Schema;
use Acme\Products\Models\Product;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class AddFieldValuesToTable extends Migration
{
    public function up()
    {
        Schema::table('acme_products_products', function ($table) {
            $table->json('field_values')->nullable();
        });
    }

    public function down()
    {
        Schema::table('acme_products_products', function (Blueprint $table) {
            if (Schema::hasColumn($table->getTable(), 'field_values')) {
                $table->dropColumn('field_values');
            }
        });

        Schema::table('acme_products_products', function ($table) {
            $product = new Product;
            foreach ($product->getAllFieldableFields() as $field) {
                $field->deleteVirtualColumn();
            }
            if (Schema::hasColumn($table->getTable(), 'field_values')) {
                $table->dropColumn(['field_values']);
            }
        });
    }
}
```

## Plugin

The plugin file subscribes to event handler and registers the fields component (optional);

```php
<?php

namespace Acme\AttributizeProduct;

use Event;
use System\Classes\PluginBase;
use Acme\AttributizeProduct\Classes\EventHandler;

/**
 * Plugin Information File
 */
class Plugin extends PluginBase
{

    public $require = [
        'Sixgweb.Attributize',
        'Acme.Product',
    ];

    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'AttributizeProduct',
            'description' => 'Attributize Acme Product',
            'author'      => 'Acme',
            'icon'        => 'icon-user'
        ];
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return void
     */
    public function boot()
    {
        Event::subscribe(EventHandler::class);
    }

    /**
     * register plugin components
     *
     * @return array
     */
    public function registerComponents(): array
    {
        return [
            'Acme\AttributizeProduct\Components\Fields' => 'productFields',
        ];
    }
}

```

## Event Handler

The event handler provides a title, class names and backend menu configuration.

```php
<?php

namespace Acme\AttributizeProduct\Classes;

use October\Rain\Database\Model;
use Acme\Attributize\Classes\AbstractEventHandler;

class EventHandler extends AbstractEventHandler
{
    
    /**
     * Title used in backend navigation and field editor
     *
     * @return string
     */
    protected function getTitle(): string
    {
        return 'Product Field';
    }

    /**
     * Model class that stores the field data in the field_values column
     *
     * @return string
     */
    protected function getModelClass(): string
    {
        return \Acme\Store\Models\Product::class;
    }

    /**
     * Frontend component to inject Attributize Fields component
     * into. Return null if no frontend editing required.
     *
     * @return string|null
     */
    protected function getComponentClass(): ?string
    {
        return \Acme\Store\Components\Product::class;
    }

    /**
     * Controller class responsible for editing model class
     *
     * @return string
     */
    protected function getControllerClass(): string
    {
        return \Acme\Store\Controllers\Products::class;
    }

    /**
     * Logic used to retrieve model via the frontend component.
     * 
     * @param [type] $component
     * @return Model
     */
    protected function getComponentModel($component): Model
    {
        //Component should provide a method of retrieving the model.
        return $component->getProduct() ?? new ($this->getModelClass())();
    }

    /**
     * Existing backend plugin menu parameters.  Used to insert new
     * link to edit fields. 
     *
     * @return array
     */
    protected function getBackendMenuParameters(): array
    {
        return [
            'owner' => 'Acme.Products',
            'code' => 'products',
            'url' => \Backend::url('acme/store/products/fields'),
        ];
    }
}

```

## Component

The component extends the Attributize Fields component and only provides component details.

```php
<?php

namespace Acme\AttributizeProduct\Components;

use Sixgweb\Attributize\Components\Fields as FieldsBase;

/**
 * Fields Component
 *
 * @link https://docs.octobercms.com/3.x/extend/cms-components.html
 */
class Fields extends FieldsBase
{
    /**
     * componentDetails
     */
    public function componentDetails()
    {
        return [
            'name' => 'Product Fields',
            'description' => 'Display Attributize Fields for Acme.Products'
        ];
    }
}

```