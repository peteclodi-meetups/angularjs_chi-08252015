// Generated on 2015-08-11 using generator-angular 0.12.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        protractor: 'grunt-protractor-runner'
    });

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || '.',
        assets: 'assets',
        testAssets: 'assetsTest',
        e2eAssets: 'assetsE2E'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/scripts/**/*.js'],
                tasks: ['newer:copy:js'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            views: {
                files: ['<%= yeoman.app %>/views/**/*.html'],
                tasks: ['newer:copy:views'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            sass: {
                files: ['<%= yeoman.app %>/scss/**/*.{scss,sass}'],
                tasks: ['sass', 'autoprefixer']
            },
            gruntfile: {
                files: ['gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/**/*.html',
                    '<%= yeoman.assets %>/css/**/*.css',
                    '<%= yeoman.assets %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35730
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            connect.static('<%= yeoman.assets %>'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                '/scss',
                                connect.static('./app/scss')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9002,
                    middleware: function (connect) {
                        return [
                            connect.static('<%= yeoman.testAssets %>'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            app: '<%= yeoman.assets %>',
            test: '<%= yeoman.testAssets %>',
            e2e: '<%= yeoman.e2eAssets %>'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            app: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.assets %>/css/',
                    src: '**/*.css',
                    dest: '<%= yeoman.assets %>/css/'
                }]
            },
            test: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.testAssets %>/css/',
                    src: '**/*.css',
                    dest: '<%= yeoman.testAssets %>/css/'
                }]
            },
            e2e: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.e2eAssets %>/css/',
                    src: '**/*.css',
                    dest: '<%= yeoman.e2eAssets %>/css/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            },
            sass: {
                src: ['<%= yeoman.app %>/scss/**/*.{scss}'],
                    ignorePath: /(\.\.\/){1,2}bower_components\//,
                    fileTypes: {
                    css: {
                        detect: {
                            css: /'(.*\.css)'/gi
                        },
                        replace: {
                            css: '\'{{filePath}}\','
                        }
                    }
                }
            }
        },

        sass: {
            options: {
                lineNumbers: false,
                sourceMap: false,
                outputStyle: 'nested',
                sourceComments: true
            },
            app: {
                files: [{
                    'expand': true,
                    'cwd': '<%= yeoman.app %>',
                    'src': ['scss/*.scss'],
                    'dest': '<%= yeoman.assets %>/css',
                    'ext': '.css',
                    'flatten': true
                }]
            },
            test: {
                files: [{
                    'expand': true,
                    'cwd': '<%= yeoman.app %>',
                    'src': ['scss/*.scss'],
                    'dest': '<%= yeoman.testAssets %>/css',
                    'ext': '.css',
                    'flatten': true
                }]
            },
            e2e: {
                files: [{
                    'expand': true,
                    'cwd': '<%= yeoman.app %>',
                    'src': ['scss/*.scss'],
                    'dest': '<%= yeoman.e2eAssets %>/css',
                    'ext': '.css',
                    'flatten': true
                }]
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                files: [
                    {
                        src: [
                            '<%= yeoman.assets %>/js/**/*.js',
                            '<%= yeoman.assets %>/css/**/*.css'
                        ]
                    }
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.assets %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat'],
                            css: []
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.assets %>/**/*.html'],
            css: ['<%= yeoman.assets %>/css/**/*.css'],
            options: {
                assetsDirs: [
                    '<%= yeoman.assets %>',
                    '<%= yeoman.assets %>/css'
                ]
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.assets%>',
                        src: ['css/**/*.css'],
                        dest: '<%= yeoman.assets%>'
                    }
                ]
            }
        },
        uglify: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.assets%>',
                        src: ['js/**/*.js'],
                        dest: '<%= yeoman.assets%>'
                    }
                ]
            }
        },
        // concat: {
        //   dist: {}
        // },

        imagemin: {
            dist : {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/img',
                        src: '**/*.{png,jpg,jpeg,gif}',
                        dest: '<%= yeoman.assets %>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback_common/assets/img',
                        src: '**/*.{png,jpg,jpeg,gif}',
                        dest: '<%= yeoman.assets %>/img'
                    }
                ]
            }
        },

        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/img',
                        src: '**/*.svg',
                        dest: '<%= yeoman.assets %>/img'
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/bower_components/packback_common/assets/img',
                        src: '**/*.svg',
                        dest: '<%= yeoman.assets %>/img'
                    }
                ]
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.assets %>/concat/scripts',
                        src: '*.js',
                        dest: '<%= yeoman.assets %>/concat/scripts'
                    }
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true, // Only if you don't use comment directives!
                    preventAttributesEscaping: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        src: ['views/**/*.html'],
                        dest: '<%= yeoman.assets %>'
                    }
                ]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            '*.{ico,png,txt}',
                            '*.html',
                            'img/**/*.{webp}'
                        ]
                    }
                ]
            },
            js: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            'index.html',
                            'scripts/**/*.js'
                        ]
                    }
                ]
            },
            views: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            'views/**/*.html'
                        ]
                    }
                ]
            },
            local: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.assets %>',
                        src: [
                            '*.{ico,png,txt}',
                            '*.html',
                            'img/**/*.{png,jpg,jpeg,gif,svg,webp}',
                            'scripts/**/*.js',
                            'views/**/*.html',
                            'bower_components/**'
                        ]
                    }
                ]
            },
            e2e: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.e2eAssets %>',
                        src: [
                            '*.{ico,png,txt}',
                            '*.html',
                            'img/**/*.{png,jpg,jpeg,gif,svg,webp}',
                            'scripts/**/*.js',
                            'views/**/*.html',
                            'bower_components/**'
                        ]
                    }
                ]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            app: [
                'sass:app'
            ],
            dist: [
                'sass:app',
                'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            ci: {
                configFile: './karma.conf.js',
                singleRun: false
            },
            unit: {
                configFile: './karma.conf.js',
                singleRun: true
            }
        },

        protractor: {
            options: {
                configFile: 'protractor.conf.js', // Default config file
                noColor: false, // If true, protractor will not use colors in its output.
                keepAlive: true // If false, the grunt process stops when the test fails.
            },
            app: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    args: {
                    } // Target-specific arguments
                }
            },
            dev: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    args: {
                        params: { env: 'dev' }
                    } // Target-specific arguments
                }
            },
            prod: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    args: {
                        params: { env: 'prod' }
                    } // Target-specific arguments
                }
            }
        }
    });
    grunt.registerTask('test-ci', [
        'clean:test',
        'wiredep:test',
        'sass:test',
        'autoprefixer:test',
        'connect:test',
        'karma:ci'
    ]);

    grunt.registerTask('test', [
        'clean:test',
        'wiredep:test',
        'sass:test',
        'autoprefixer:test',
        'connect:test',
        'karma:unit'
    ]);

    grunt.registerTask('e2e', 'Run E2E testing on our stuff', function(env) {
        grunt.task.run(['clean:e2e', 'sass:e2e', 'autoprefixer:e2e', 'copy:e2e']);
        if(arguments.length === 0) {
            grunt.task.run('protractor:app');
        }
        else {
            grunt.task.run('protractor:' + env);
        }
    });

    grunt.registerTask('dev', [
        'clean:app',
        'wiredep:app',
        'wiredep:sass',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer:app',
        'ngAnnotate',
        'concat',
        'copy:dist',
        'htmlmin',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'local'
    ]);

    grunt.registerTask('local', [
        'clean:app',
        'sass:app',
        'autoprefixer:app',
        'copy:local'
    ]);

    grunt.registerTask('local-watch', [
        'sass:app',
        'autoprefixer:app',
        'copy:local',
        'watch'
    ]);
};
