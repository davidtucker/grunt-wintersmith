module.exports = function(grunt) {

  var wintersmith = require("wintersmith");

  grunt.registerTask("wintersmith", "Use the wintersmith static site generator", function() {
    var config = grunt.config("wintersmith"),
    done = this.async();
    
    grunt.helper("wintersmith", config, function(error) {
      if ( error ) {
        grunt.warn("Wintersmithing failed.");
      } else {
        done();
      }
    });
  });

  grunt.registerTask("wintersmith-ordered", "Use the wintersmith static site generator, respecting an order.yaml file", function(){
    var config = grunt.config("wintersmith-ordered"),
    done = this.async();
    
    grunt.helper("wintersmith-tree", config, function(error, tree) {
      if ( error ) {
        grunt.warn("Wintersmithing failed.");
      } else {
        done();
      }
    });
  });

  grunt.registerHelper("wintersmith", function(options, callback) {
    wintersmith( options, callback );
  });

  grunt.registerHelper("wintersmith-tree", function(options, callback) {
    wintersmith.loadContents( options.contents, callback );
  });

};
