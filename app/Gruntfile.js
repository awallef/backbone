module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        
        // CSS
        compass: {
            prod: {
                options: {
                    sassDir: 'webroot/css/app',
                    cssDir: 'webroot/css/app',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'webroot/css/app',
                    cssDir: 'webroot/css/app'
                }
            }
        },
        
        cssmin: {
          compress: {
            options: {
              banner: '/*    */'
            },
            files: {
              'webroot/css/app.css': ['webroot/css/vendors/*', 'webroot/css/app/app.css']
            }
          }
        },
        
        // JS
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['webroot/js/vendors/*','webroot/js/app/app.js'],
                dest: 'webroot/js/app.js'
            }
        },
        
        uglify: {
            options: {
                banner: '/*!    */'
            },
            dist: {
                src: [
                'webroot/js/app/main.js',
                'webroot/js/app/router.js',
                'webroot/js/app/collections/*',
                'webroot/js/app/models/*',
                'webroot/js/app/views/*',
                ],
                dest: 'webroot/js/app/app.js'
            }
        },
        
        // WATCH AND RUN TASKS
        watch: {
            scripts: {
                files: [
                'webroot/js/app/main.js',
                'webroot/js/app/router.js',
                'webroot/js/app/collections/*',
                'webroot/js/app/models/*',
                'webroot/js/app/views/*'
                ],
                tasks: ['uglify','concat'],
                options: {
                    nospawn: true
                }
            },
            css: {
                files: [
                'webroot/css/app/app.scss',
                'webroot/css/app/**/*.scss'
                ],
                tasks: ['compass:dev','cssmin']
            }
        }
    });
    
    // tasks from npm
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // our tasks
    grunt.registerTask('default', 'watch');
}