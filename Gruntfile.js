module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['web/assets/src/**/*.*'],
                tasks: ['copy', 'shell:rollupDev']
            }
        },
        shell: {
            rollupDev: {
                command: 'export BABEL_ENV=dev && ./node_modules/.bin/rollup -c rollup-dev.config.js'
            },
            removeBuild: {
                command: 'rm -rf web/assets/build'
            },
            tests: {
                command: 'export BABEL_ENV=test && ./node_modules/.bin/babel-tape-runner tests/*.test.js | ./node_modules/.bin/faucet'
            },
            coverage: {
                command: 'export BABEL_ENV=test && ./node_modules/.bin/nyc ./node_modules/.bin/babel-tape-runner tests/*.test.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'web/assets/src/img/',
                        src: ['**'],
                        dest: 'web/assets/build/img/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'web/assets/src/css/site.css'
                        ],
                        dest: 'web/assets/build/css/',
                        filter: 'isFile'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['shell:removeBuild', 'copy:main', 'shell:rollupDev']);
    grunt.registerTask('dev', ['shell:removeBuild', 'copy:main', 'shell:rollupDev', 'watch']);
    grunt.registerTask('tests', ['shell:tests']);
    grunt.registerTask('coverage', ['shell:coverage']);
};