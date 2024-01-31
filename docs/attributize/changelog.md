# 1.1.0
 - Create FieldValue model and field_values table to store dropdown, checkbox list and radio options and auto-populate on migrate
 - Deprecated events
    - sixgweb.attributize.getFieldableFields
    - sixgweb.attributize.afterGetFieldableFields
 - Added new events
   - sixgweb.attributize.fieldable.getFields
   - sixgweb.attributize.fieldable.afterGetFields
# 1.0.40
  - Add isset check for externalToolbarEventBus, which is now missing in 3.5 repeater changes
# 1.0.39
  - Remove unused code for backend menu context
# 1.0.38
  - Add default value field.  Add useTimezone to datepicker.  Remove list column format.  Fix modified indicator script and style.
# 1.0.37
  - Use datepicker format/mode for list column display
# 1.0.36
  - Fix eventlistener cache index using old listeners.
# 1.0.35
  - Fix turbo router and dirty field indicator
# 1.0.34
  - Add dirty field/tab indicator to field editor.  Fix bug with scope modelClass for filterable dropdown fields.
# 1.0.33
  - Add checkbox list listfilter support via scope method
# 1.0.32
  - Paginate 10 records when sorting, remix JS for oc.Modules support, fix return type in component and add light background to widget container
# 1.0.31
  - Add icons to indicate locked, filterable and searchable.  Add lock/unlock to bulk actions and check permissions.
# 1.0.30
  - Check if plugins fields component class when extending.
# 1.0.29
  - Validate fieldable during model.afterValidate event
# 1.0.28
  - Fix fileupload checked background color
# 1.0.27
  - Add support for relation manage form
# 1.0.26
  - Fix sorting with global scopes disabled
# 1.0.25
  - Turbo router compatibility and bootstrap 5 dark mode variables
# 1.0.24
  - Update CSS variables to mimic original repeater button styles
# 1.0.23
  - Update repeater partial overrides and add css variables
# 1.0.22
  - Remove checkbox partial override
# 1.0.21
  - Update filterable virtual query to work with MariaDB lack of arrow operator support
# 1.0.20
  - Remove attributizeFields formwidget and manipulate formcontroller fields via addField and addTabField
# 1.0.19
  - Add quickselect setting for checkbox lists
# 1.0.18
  - Set backendmenu sidemenu context only
# 1.0.17
  - Add support for inlineOptions for checkboxes/radios and support for repeater tabs
# 1.0.16
  - Add ExportsFieldValues trait to handle exporting of field_values column, including repeater data.
# 1.0.15
  - Add script to update confirm modal z-index to top of field editor modal stack.  Add top level repeater fields to available list columns. Hide filter/search for repeater fields.
# 1.0.14
  - Remove fileupload from repeater, add event listeners to field model, remove unused settings, add field attributes to repeater
# 1.0.13
  - Move to integration components for frontend fields.  Allow multiple integrations on page.  Bug fixes.
# 1.0.12
  - Fix for RelationController missing model.  Allow backend menu params to override all keys.
# 1.0.11
  - Fix validation error for fields not included in codes or tabs, when used
# 1.0.10
  - Ability to limit fields by code, tabs and/or remove tabbed interface
# 1.0.9
  - Virtual columns only created when field is searchable or filterable
# 1.0.8
  - Remove unused reference to locale in preview
# 1.0.7
  - Add Postgres 12+ support
# 1.0.6
  - Add ImportsFieldValues trait to convert import data
# 1.0.5
  - Fix ajax requests for form widgets
# 1.0.4
  - Sync to github tag
# 1.0.3
  - Sync to github tag
# 1.0.2
  - Sync to github tag

# 1.0.1
  - First version of Attributize
