module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        
        // CSS
        compass: {
            prod: {
                options: {
                    sassDir: 'webroot/css/src',
                    cssDir: 'webroot/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'webroot/css/src',
                    cssDir: 'webroot/css'
                }
            }
        },
        
        cssmin: {
            compress: {
                options: {
                    banner: '/*    */'
                },
                files: {
                    'webroot/css/app.css': ['webroot/css/reset.css', 'webroot/css/style.css']
                }
            },
        },
        
        // JS
        uglify: {
            options: {
                banner: '/*!    */'
            },
            dist: {
                src: [
                'webroot/js/src/main.js',
                'webroot/js/src/router.js',
                'webroot/js/src/collections/*',
                'webroot/js/src/models/*',
                'webroot/js/src/views/*',
                ],
                dest: 'webroot/js/app.js'
            },
        },
        
        // WATCH AND RUN TASKS
        watch: {
            scripts: {
                files: [
                'webroot/js/src/main.js',
                'webroot/js/src/router.js',
                'webroot/js/src/collections/*',
                'webroot/js/src/models/*',
                'webroot/js/src/views/*',
                'webroot/css/*'
                ],
                tasks: ['uglify', 'cssmin'],
                options: {
                    nospawn: true
                }
            },
            css: {
                files: ['webroot/css/src/**/*.scss'],
                tasks: ['compass:dev']
            },
        }
    });
    
    // tasks from npm
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // our tasks
    grunt.registerTask('default', 'watch');
}