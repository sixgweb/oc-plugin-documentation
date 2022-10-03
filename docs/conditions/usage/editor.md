# Editor
The conditions field will be added to form widgets that edit a Conditionable model, via integrations.  The conditions field is an [OctoberCMS repeater field](https://docs.octobercms.com/3.x/element/form/widget-repeater.html) that displays available Conditioners.

For example, the RainLab.User integration enables the User Group Conditioner.

![Column](../images/conditions-repeater.png)

## Fields

<dl>
    <dt><strong>New Condition Button</strong></dt>
    <dd>Press and select the type of conditioner you want added</dd> 
    <dt><strong>Condition Logic</strong></dt>
    <dd>Logic used when checking conditions.  Either includes the checked values (Inclusive) or excludes the checked values (Exclusive).</dd>
    <dt><strong>Nullable</strong></dt>
    <dd>When checked, conditions will also check for null conditioner value.  For example, a visitor that is not logged in would be NULL for the User or User Group conditioners</dd>
</dl>