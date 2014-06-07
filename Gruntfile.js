/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jslint: {
      client: {
        src: [
          'src/**/*.js'
        ]
      }
    },

    concat: {
      options: {
        stripBanners: true,
        banner: '// <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "// " + pkg.homepage + "\\n" : "" %>' +
        '// Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
      },
      dist: {
        src: ['src/underscore-ko.js'],
        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.js',
        nonull: true
      }
    },

    min: {
      dist: {
        src: ['build/<%= pkg.name %>-<%= pkg.version %>.js'],
        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    },

    clean: ['build/*.js', 'build/*.nupkg'],

    shell: {
      nuget: {
        command: 'tools\\nuget pack UnderscoreKO.nuspec -Version <%= pkg.version %> -Output build',
        stdout: true
      }
    }
  });

  // Exec task
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-min');
  grunt.loadNpmTasks('grunt-jasmine-node');

  // Default task.  
  grunt.registerTask('default', ['clean', 'concat', 'min', 'shell']);

};
