# Usage

## Default Notification Rule
NotifyForms creates a permanent Notification Rule title **Form Entry Created - Email Backend Users**.  This rule cannot be deleted.  However, the rule can be disabled or modified.

## Notify Backend User(s) of New Entry

By default, NotifyForms creates a Notification Ruled title **Form Entry Created - Email Backend Users**.  This rule cannot be deleted.  However, the rule can be disabled or modified to send to specific email address or specific backend user groups.

## Send Confirmation Email to Sender

1. Press New Notification Button, under Settings->Notification Rules
2. Select Forms and Select Entry Created
3. Press Add Action under the Actions tab
    1. Press Compose a Mail Message
    2. Select Mail Template sixgweb.notifyforms::mail.entry (or create your own)
    3. Select Sender user email address for the Send To value.
    4. Set your preferred reply to address
4. Click Conditions Tab
5. Press Add Condition button
6. Select Send Notification, under Sixgweb Forms and press Create
7. Set value = 1
8. Optional Form Specific Condition
    1. Press Add Condition button
    2. Select Form, under Sixgweb Forms and press create.
    3. Select form from dropdown