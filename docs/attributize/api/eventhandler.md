# Event Handler

Attributize integration Event Subscriber class.  Extends AbstractEventHandler class.  See [Build Your Own](/attributize/integrations/build-your-own.html#event-handler) for code sample.

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