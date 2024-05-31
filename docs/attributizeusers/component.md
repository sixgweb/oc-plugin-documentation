# Frontent Component 

## RainLab.User Version 2.x

Add the **AttributizeUsers->User Fields** and **User->Account** components to the page.  Override the RainLab Account register.html and update.html partials to include the `userFields` component tag before the submit button.  Refer to OctoberCMS <a href="https://docs.octobercms.com/3.x/cms/themes/components.html#overriding-component-partials" target="_blank">Overriding Component Partials</a> for more information on overriding component partials.

Refer to [Attributize Fields Component](/attributize/usage/component) for component options

Partials/account/register.htm
```twig
{% component 'userFields' %}

<button type="submit" class="btn btn-default">Register</button>
```

Partials/account/update.htm
```twig
{% component 'userFields' %}

<button type="submit" class="btn btn-default">Save</button>
```

## RainLab.User Version 3.x

Version 3.x splits the registration and account management into two separate components.  Refer to the [User Plugin Documentation](https://octobercms.com/plugin/rainlab-user) for more information on setting these up.

### Registration

Add the **AttributizeUsers->User Fields** and **User->Registration** components to the [registration page](https://octobercms.com/plugin/docs/rainlab-user/component-registration).  Override the RainLab Registration default.html partial to include the `userFields` component tag before the submit button.  Refer to OctoberCMS <a href="https://docs.octobercms.com/3.x/cms/themes/components.html#overriding-component-partials" target="_blank">Overriding Component Partials</a> for more information on overriding component partials.

Refer to [Attributize Fields Component](/attributize/usage/component) for component options

Partials/registration/default.htm
```twig
{% component 'userFields' %}

<button
    class="btn btn-primary btn-lg w-100 py-2"
    data-attach-loading
    type="submit">
    Create account
</button>
```

### Account

Add the **AttributizeUsers->User Fields** and **User->Account** components to the [account page](https://octobercms.com/plugin/docs/rainlab-user/component-account).  Add the `userFields` component tag before the submit button of your account update partial.  Refer to the [User Plugin Documentation](https://octobercms.com/plugin/docs/rainlab-user/component-account) for more information on the account update partial.

Refer to [Attributize Fields Component](/attributize/usage/component) for component options.

Here is a simple partial you can use to add the account update form.

Partials/account/default.htm
```twig
{{ form_ajax('onUpdateProfile') }}
    <input type="hidden" name="redirect" value="{{ 'account/index'|page }}" />

    {% component 'userFields' %}

    <button type="submit" class="btn btn-primary">Save</button>

    <a href="#" data-request="session::onLogout" class="btn btn-secondary">Logout</a>

{{ form_close() }}
```
