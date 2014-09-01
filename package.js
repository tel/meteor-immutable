Package.describe({
  summary: "Immutable Data Collections for Javascript",
  version: "2.0.16",
  git: "https://github.com/kraf/meteor-immutable.git"
});

Npm.depends({
	"immutable": "2.0.16"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('lib/require-immutable.js');
  api.export("Immutable", ["server", "client"]);
});
