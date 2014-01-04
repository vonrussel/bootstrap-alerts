#Bootstrap Alerts

Meteor Package for [Bootstrap Alerts](http://getbootstrap.com/components/#alerts)

Bootstrap 3.0 contains 4 types of builtin alerts: success, info, warning, danger

You can easelly add such sort of notifications to your [Meteor](https://meteor.com) project by using this package.

## Simple using

Install package from [Atmosphere](https://atmosphere.meteor.com/wtf/app):

```sh
mrt add bootstrap-alerts
```

Put template string to top of your page: 

```html
{{> bootstrapAlerts}}
```
Display alerts from JavaScript code:

```javascript
Alerts.add('Local drive [C:] formatted successfully!', 'success');
Alerts.add('Server recovered from crash.', 'info');
Alerts.add('Please don\'t eat my cake!', 'warning');
Alerts.add('Can\'t remove Admin user!', 'danger');
```

## Customisation

### Default options is:

```javascript
    defaultOptions: {

        /**
         * Button with cross icon to hide (close) alert
         */
        dismissable: true,

        /**
         * CSS classes to be appended on each alert DIV (use space for separator)
         */
        classes: '',

        /**
         * Hide alert after delay in ms or false to infinity
         */
        autoHide: false,

        /**
         * Time in ms before alert fully appears
         */
        fadeIn: 200,

        /**
         * If autoHide enabled then fadeOut is time in ms before alert disappears
         */
        fadeOut: 600,

        alertsLimit : 3
    }
```
You can override from javaScript code, e.g.:

```javascript
Alerts.defaultOptions.alertsLimit = 1;
```

### Alert.add

The prototype of ```Alert.add``` function is:

```javascript
 /**
     * Add an alert
     *
     * @param message (String) Text to display.
     * @param mode (String) One of bootstrap alerts types: success, info, warning, danger
     * @param options (Object) Options if required to override some of default ones.
     *                          See Alerts.defaultOptions for all values.
     */
    add: function (message, mode, options)
```


The ```options``` parameter provides customization for current alert. Example:

```javascript
Alerts.add('Can\'t remove Admin user!', 'danger', {
                fadeIn: 1000, fadeOut: 1000, autoHide: 3000
            });
```


## License

MIT
