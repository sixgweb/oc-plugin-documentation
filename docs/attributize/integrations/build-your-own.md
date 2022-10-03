# Build Your Own
Basic integration with Attributize is achieved through a simple [Plugin File](#plugin) and an [Event Handler](#event-handler).  

## Plugin
```php
<?php

namespace Acme\AttributizeCharacter;

use Event;
use System\Classes\PluginBase;
use Acme\AttributizeCharacter\Classes\EventHandler;

/**
 * Plugin Information File
 */
class Plugin extends PluginBase
{

    public $require = [
        'Sixgweb.Attributize',
        'Acme.Character',
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
        Event::subscribe(EventHandler::class);
    }
}

```

## Event Handler

```php
<?php

namespace Acme\AttributizeCharacter\Classes;

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
        return 'Character Field';
    }

    /**
     * Model class that stores the field data in the field_values column
     *
     * @return string
     */
    protected function getModelClass(): string
    {
        return \Acme\Characters\Models\Character::class;
    }

    /**
     * Frontend component to inject Attributize Fields component
     * into. Return null if no frontend editing required.
     *
     * @return string|null
     */
    protected function getComponentClass(): ?string
    {
        return \Acme\Characters\Components\Character::class;
    }

    /**
     * Controller class responsible for editing model class
     *
     * @return string
     */
    protected function getControllerClass(): string
    {
        return \Acme\Characters\Controllers\Characters::class;
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
        return $component->getCharacter() ?? new ($this->getModelClass())();
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
            'owner' => 'Acme.Characters',
            'code' => 'characters',
            'path' => 'acme/characters/characters/',
        ];
    }
}

```