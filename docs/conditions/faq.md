# FAQ

## How is the Data Stored?

Integrations add a TEXT column named **conditions** to the Conditionable model's table, which stores the conditions repeater field data.  Upon saving, the data from the **conditions** column is synced to a central conditions table.

## Can I Use Other Model Properties for Conditions?
At this time, conditions are only available for model ids.
