module.exports = function(grunt) {

  var wintersmith = require("wintersmith");

  grunt.registerMultiTask("wintersmith", "Use the wintersmith static site generator", function () {
    var options = this.options({
        // create the sites environment, can also be called with a config object. e.g.
        // {contents: '/some/contents', locals: {powerLevel: 10}}, ..}
        config: "./config.json"
      }),
      done = this.async();

    // build site
    grunt.helper("wintersmith", options, function (error) {
      if (error) { throw error; }
      done();
    });

  });

  grunt.registerHelper("wintersmith", function (options, callback) {
    // create the sites environment, can also be called with a config object. e.g.
    // {contents: '/some/contents', locals: {powerLevel: 10}}, ..}
    var env = wintersmith(options.config);
    // build site
    env.build(callback);
  });

};
