# Event Handler

Attributize integration Event Subscriber class.  Extends AbstractEventHandler class.  See below for code sample.

## Methods

### protected function getTitle(): string

Title used in backend navigation and field editor

### protected function getModelClass(): string

Model class that stores the field data in the field_values column

### protected function getComponentClass(): ?string

Frontend component to inject Attributize Fields component into. Return null if no frontend editing required.

### protected function getControllerClass(): string

Controller class responsible for editing model class

### protected function getComponentModel($component): Model

Logic used to retrieve model via the frontend component.

#### Parameters

Cms\Classes\ComponentBase $component

### protected function getBackendMenuParameters(): array

Existing backend plugin menu parameters.  Used to insert new link to edit fields.

---

``` php
<?php

namespace Acme\AttributizeProduct\Classes;

use October\Rain\Database\Model;
use Sixgweb\Attributize\Classes\AbstractEventHandler;

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
     * @param \Cms\Classes\ComponentBase $component
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
            'path' => 'acme/store/products/',
        ];
    }
}
```