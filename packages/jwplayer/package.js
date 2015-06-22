Package.describe({
    name: 'cafe4it:jwplayer',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'An easily configured CDN hosted version of JWPlayer using your own license. ',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use('jquery', 'client');
    api.addFiles('jwplayer.js', 'client');
});

