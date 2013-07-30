var wintersmith = require("wintersmith");

module.exports = function(grunt) {

  var done = {};

  var callback = function(error) {
    if(error) {
      throw error;
    }
    if(done) {
      done();
    }
  };

  grunt.registerMultiTask("wintersmith", "Use the wintersmith static site generator", function () {

    var options = this.options();
    grunt.verbose.writeflags(options, 'Options');
    var _ = grunt.util._;

    options = _.defaults(options, {
      action: 'build',
      config: './config.json'
    });

    done = this.async();

    var env = wintersmith(options.config);

    if(options.action == 'build') {
      env.build(callback);
    } else if(options.action == 'preview') {
      env.preview(callback);
    } else {
      grunt.log.error('Action not supported.  May be build or preview.');
      done(false);
    }

  });

};
