Package.describe({
  summary: "Basic authentication guard for development site"
});

Npm.depends({
  'connect': '2.7.10'
});

Package.on_use(function(api, where) {
  api.use('webapp', 'server');
  api.add_files('basic_auth.js', 'server');
});
