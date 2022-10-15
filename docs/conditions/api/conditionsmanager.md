# ConditionersManager

Manager to Add, replace or remove conditioners for the request.

```php
use \Sixgweb\Conditions\Classes\ConditionersManager;

//Add single conditioner object
$conditioner = Product::first();
ConditionersManager::instance()->addConditioner($conditioner);

//Add a collection of conditioner objects
$conditioner = Product::get();
ConditionersManager::instance()->addConditioner($conditioner);

//Add an array of conditioner ids, keyed by conditioner class
$conditioner = [
    Product::class => [1,2,3,4,5],
];
ConditionersManager::instance()->addConditioner($conditioner);


```

## Methods

### public function addConditioner(object|array $conditioner): void 

Adds a conditioner or conditioners to the manager.

**$conditioner**:  Collection of of model objects, model object, or a class keyed array with ids.

### public function removeConditioner(string $class): void

Removes a conditioner from the manager

**$class**: Qualified class name to remove from the conditioners

```php
//Class keyed array of ids
ConditionersManager::instance()->removeConditioner(Product::class);
```

### public function replaceConditioner(object|array $conditioner): void

Replaces a conditioner or conditioners to the manager.

**$conditioner**:  Collection of of model objects, model object, or a class keyed array with ids.

```php
//Single object
$conditioner = Product::first();
ConditionersManager::instance()->replaceConditioner($conditioner);
```

### public function getConditioners(): array

Gets the conditioners