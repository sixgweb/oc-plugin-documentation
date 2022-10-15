# Build Your Own
Integration with Conditions is achieved through a Migration, Plugin File, a Conditionable Event Handler and/or a Conditioner Event Handler.  

Integrations only providing Conditioners do not need the Conditionable Event Handler.  Integrations only defining Conditionables do not need the Conditioner Event Handler. 

## Migration

Integrations are required to add the **conditions** column to the Conditionable model's table

`plugins/acme/conditionsproduct/updates/add_conditions_to_table.php`

```php
<?php

namespace Acme\ConditionsProduct\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class AddConditionsToTable extends Migration
{
    public function up()
    {
        Schema::table('acme_products_products', function ($table) {
            $table->json('conditions')->nullable();
        });
    }

    public function down()
    {
        Schema::table('acme_products_products', function (Blueprint $table) {
            if (Schema::hasColumn($table->getTable(), 'conditions')) {
                $table->dropColumn('conditions');
            }
        });
    }
}

```
## Plugin

The plugin's main job is to subscribe the event handlers in the boot method

`plugins/acme/conditionsproduct/Plugin.php`

```php
<?php

namespace Acme\ConditionsProduct;

use Event;
use System\Classes\PluginBase;
use Acme\ConditionsProduct\Classes\ConditionerEventHandler;
use Acme\ConditionsProduct\Classes\ConditionableEventHandler;

/**
 * Plugin Information File
 */
class Plugin extends PluginBase
{

    public $require = [
        'Sixgweb.Conditions',
        'Acme.Products',
    ];

    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'AttributizeCharacter',
            'description' => 'Attributize Acme Character',
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
        Event::subscribe(ConditionerEventHandler::class);
        Event::subscribe(ConditionableEventHandler::class);
    }
}

```

## ConditionerEventHandler

The Conditioner Event Handler establishes a model as a conditioner and displays the backend interface (repeater) on the controller form.

`plugins/acme/conditionsproduct/classes/ConditionerEventHandler.php`

```php
<?php

namespace Acme\ConditionsProduct\Classes;

use Sixgweb\Conditions\Classes\ConditionersManager;
use Sixgweb\Conditions\Classes\AbstractConditionerEventHandler;

class ConditionerEventHandler extends AbstractConditionerEventHandler
{
    /**
     * Conditioner model class
     *
     * @return string
     */
    protected function getModelClass(): string
    {
        return \Acme\Products\Models\Product::class;
    }

    /**
     * Backend controller class that displays
     * the conditions repeater
     *
     * @return string|null
     */
    protected function getControllerClass(): ?string
    {
        return \Acme\Products\Controllers\Products::class;
    }

    /**
     * Returns array of options used for in filter,
     * import, and export dropdowns
     *
     * @return array
     */
    protected function getModelOptions(): array
    {
        return $this->getModelClass()::get()
            ->pluck('name', 'id')
            ->toArray();
    }

    /**
     * Returns conditions field configuration.  Recordfinder field types
     * will be added to a repeater, allowing multiple values
     * 
     * @return array
     */
    protected function getFieldConfig(): array
    {
        /**
         * Return checkboxlist
         * return [
         *     'label' => 'Product',
         *     'type' => 'repeater',
         *     'options' => \Acme\Products\Models\Product::lists('name', 'id'),
         * ];
         */

        //Return recordfinder
        return [
            'label' => 'Product',
            'type' => 'recordfinder',
            'list' => '~/plugins/acme/products/models/product/columns.yaml',
            'recordsPerPage' => 10,
            'title' => 'Find Product',
            'prompt' => 'Click the Find button to find a product',
            'keyFrom' => 'id',
            'nameFrom' => 'name',
            'descriptionFrom' => 'description',
            'searchMode' => 'all',
            'useRelation' => false,
            'modelClass' => 'Acme\Products\Model\Product',
        ];
    }

    /**
     * Repeater group name used for the conditions repeater
     *
     * @return string
     */
    protected function getGroupName(): string
    {
        return 'Form';
    }

    /**
     * Opportunity to create custom logic for adding conditioners
     * to the ConditionersManager.  If null, conditioner is added
     * to ConditionsManager afterFetch.
     *
     * @return callable|null
     */
    protected function getConditionerCallback(): ?callable
    {
        return null;
    }
}

```

## ConditionableEventHandler

The Conditionable Event Handler establishes a model as conditionable and adds the global scope to remove records that don't match the provided conditioners.

`plugins/acme/conditionsproduct/classes/ConditionableEventHandler.php`

```php
<?php

namespace Acme\ConditionsProduct\Classes;

use Sixgweb\Conditions\Classes\AbstractConditionableEventHandler;

class ConditionableEventHandler extends AbstractConditionableEventHandler
{
    /**
     * Conditionable model class
     *
     * @return string
     */
    protected function getModelClass(): string
    {
        return \Acme\Products\Models\Product::class;
    }
    
    /**
     * Tab to place Conditions repeater field under
     *
     * @return string|null
     */
    protected function getTab(): ?string
    {
        return 'Conditions';
    }

    /**
     * Label of Conditions repeater field
     *
     * @return string|null
     */
    protected function getLabel(): ?string
    {
        return 'Product Conditions';
    }

    /**
     * Comment used for Conditions repeater field
     *
     * @return string|null
     */
    protected function getComment(): ?string
    {
        return 'Conditions required for this product to be visible';
    }

}

```