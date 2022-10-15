# Conditioner Event Handler

Event Subscriber class for Conditioners.  Extends AbstractConditionerEventHandler class.  See [Build Your Own](/conditions/integrations/build-your-own.html#conditionereventhandler) for code sample.

## Methods

### protected function getModelClass(): string

Return conditioner model class

### protected function getModelOptions(): array

Returns array of options used for in filter, import, and export dropdowns 

### protected function getControllerClass(): string

Controller class responsible for editing model class

### protected function getConditionerCallback(): ?callable;

Opportunity to create custom logic for adding conditioners to the ConditionersManager.  If null returned, conditioner is added during the **model.afterFetch** event

### protected function getFieldConfig(): array

Returns conditions field configuration

### protected function getGroupName(): string

Repeater group name used for the conditions repeater
