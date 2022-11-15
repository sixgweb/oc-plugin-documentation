# Build Your Own
Basic integration with Attributize is achieved through a Migration, Plugin File and an Event Handler.  

## Migration

Integrations are required to add the **field_values** column to the Fieldable model's table

`plugins/acme/attributizeproduct/updates/add_conditions_to_table.php`

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
}

```

## Event Handler

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