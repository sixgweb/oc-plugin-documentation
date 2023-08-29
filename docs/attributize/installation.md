# Installation

## Requirements
- OctoberCMS 3.x
- Mysql 5.7+ or Postgres 12+
- Bootstrap 5.x <br /><small>Injectable via Attributize setting, if you're theme doesn't use Bootstrap 5.  Attributize exposes backend form widgets for frontend use, which are built with Bootstrap 5 markup.</small>

## Marketplace

Add the plugin to your project via the [OctoberCMS Marketplace](https://octobercms.com/plugin/sixgweb-attributize).

### Command Line

```
php artisan project:sync
```

### Backend Installer

In the Backend, visit **Settings->System Updates->Install Packages** press the **Sync Project** button.

## Scheduler

With the availability of frontend file uploads comes the potential for orphaned file attachments.
Attributize will remove any orphaned file uploads every hour, if you have the [scheduler set up](https://docs.octobercms.com/3.x/setup/scheduler.html).