# Frequently Asked Questions

For data storage and field information, see [Attributize FAQ](/attributize/faq)

## Am I Notified When an Entry Is Created?
Please install the [RainLab.Notify integration](/notifyforms/) and enable notifications under the Form Settings->Notifying tab.  By default, email notifications are sent to All Backend users.  You may customize this by editing the default "Form Entry Created - Email Backend Users" notification rule, found under the Notifications Rules setting.

## Can I send a confirmation email to the user?
First, Please install the [RainLab.Notify integration](/notifyforms/).  Toggle **Send Notifications** to ON and set the **Sender Email Field** value, under the Form's Settings->Notifying tab.

## Are forms available as snippets?
Unfortunately, Forms does not work as a snippet. Forms depends on Attributize, which exposes backend forms for frontend use.  This complexity requires the Form Entry component be added directly to the Editor and not nested inside other component's output, as a snippet.