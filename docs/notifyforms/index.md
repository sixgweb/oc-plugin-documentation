# Forms Notify Integration

Integrates Forms with RainLab Notify plugin.  Adds new **Notifying** tab to the form editor **Settings** tab

:::tip Default Notification Rule
This plugin creates a permanent notification rule to notify all backend users of new entries if [Send Notifications](#send-notifications) is enabled in the form settings.  Disable this rule, if you do not want to use it, as it will recreate upon deletion.
:::

### Send Notifications
Available as a Notify Rule condition.  Default Notification Rule (below) uses this condition to send notifications to all backend users.

### Sender Email Field
To use the "Sender user email address" options in RainLab.Notify actions, you must have an email field in your form and select it here

### Sender Name Field (optional)
Used as the "Sender" user name in RainLab.Notify actions