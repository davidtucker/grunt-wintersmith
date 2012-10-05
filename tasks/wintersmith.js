module.exports = function(grunt) {

  var wintersmith = require("wintersmith"),
  pluginsLoaded = false;

  grunt.registerTask("wintersmith", "Use the wintersmith static site generator", function() {
    var config = grunt.config("wintersmith"),
    done = this.async(),
    cwd = process.cwd();
    // This "pluginsLoaded" and concatenation of cwd is a dirty hack to get around some relative path resolution that I can't quite resolve yet
    if ( config.plugins && !pluginsLoaded ) {
      config.plugins.forEach(function(path, i) {
        config.plugins[i] = cwd + path;
      });
      pluginsLoaded = true;
    }
    grunt.helper("wintersmith", config, function(error) {
      if ( error ) {
        grunt.warn("Wintersmithing failed: "+error);
      }
      done();
    });
  });

  grunt.registerHelper("wintersmith", function(options, callback) {
      wintersmith( options, callback );
  });

  grunt.registerHelper("wintersmith-tree", function(options, callback) {
    wintersmith.loadContents( options.contents, callback );
  });

};
