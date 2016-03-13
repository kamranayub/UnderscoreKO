/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine: {
      tests: {
        src: [           
          'bower_components/knockout/dist/knockout.js', 
          'bower_components/underscore/underscore.js',
          'build/*.js'
        ],
        options: {
          specs: 'spec/spec.js'
        }
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
        src: ['build/<%= pkg.name %>.js'],
        dest: 'build/<%= pkg.name %>.js',
        nonull: true
      },
      min: {
        src: ['build/<%= pkg.name %>.min.js'],
        dest: 'build/<%= pkg.name %>.min.js',
        nonull: true
      }
    },

    min: {
      dist: {
        src: ['build/<%= pkg.name %>.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    clean: ['build/**/*'],

    shell: {
      
      tsc: {
        command: 'node_modules\\.bin\\tsc -p src --outFile build\\<%= pkg.name %>.js',
        stdout: true
      },
      
      tscw: {
        command: 'node_modules\\.bin\\tsc -p src --outFile build\\<%= pkg.name %>.js --watch',
        stdout: true
      },
      
      nuget: {
        command: 'tools\\nuget pack UnderscoreKO.nuspec -Version <%= pkg.version %> -Output build',
        stdout: true
      }
    }
  });

  // Exec task
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-min');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.  
  grunt.registerTask('compile', ['clean', 'shell:tscw']);
  grunt.registerTask('default', ['clean', 'shell:tsc', 'jasmine', 'min', 'concat', 'shell:nuget']);
};
