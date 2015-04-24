Package.describe({
  name: 'tel:meteor-immutable',
  summary: "Immutable Data Collections for Javascript.",
  version: "3.7.2",
  git: "https://github.com/tel/meteor-immutable.git"
});

Npm.depends({
  "immutable": "3.7.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles("vendor/Immutable.js", "client");
  api.addFiles("lib/require-immutable.js", "server");
  api.export("Immutable", ["server", "client"]);
});
