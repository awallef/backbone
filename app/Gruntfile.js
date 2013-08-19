module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        
        // CSS
        compass: {
            prod: {
                options: {
                    sassDir: 'webroot/css/app',
                    cssDir: 'webroot/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'webroot/css/app',
                    cssDir: 'webroot/css'
                }
            }
        },
        
        // JS
        uglify: {
            options: {
                banner: '/*!    */',
                beautify: true
            },
            dist: {
                src: [
                'webroot/js/app/main.js',
                'webroot/js/app/router.js',
                'webroot/js/app/collections/*',
                'webroot/js/app/models/*',
                'webroot/js/app/views/*',
                ],
                dest: 'webroot/js/app.js'
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
                tasks: ['uglify'],
                options: {
                    nospawn: true
                }
            },
            css: {
                files: [
                'webroot/css/app/app.scss',
                'webroot/css/app/**/*.scss'
                ],
                tasks: ['compass:dev']
            }
        }
    });
    
    // tasks from npm
    grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // our tasks
    grunt.registerTask('default', 'watch');
}