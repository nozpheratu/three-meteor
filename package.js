Package.describe({
  summary: "three.js packaged for use in Meteor."
});

Package.on_use(function (api) {
	api.add_files('lib/three.js', 'client');
});