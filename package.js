Package.describe({
    summary: "Wrapper for bootstrap 3 alerts. Simple add this package and call Alerts.add(message, type)"
});

Package.on_use(function (api, where) {
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
    api.add_files([
        'bootstrap-alerts.js'
        , 'bootstrap-alerts_templates.html'
        , 'bootstrap-alerts_templates.js'
    ]
        , 'client');
    if (api.export) {
        api.export('Alerts');
    }
});

Package.on_test(function (api) {
    api.use('bootstrap-alerts');

    api.add_files('bootstrap-alerts_tests.js', ['client']);
});
