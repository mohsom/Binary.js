module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/*.js']
        },
        uglify: {
            options: {
                mangle: false
            },
            files: {
                'build/Binary.min.js': ['src/Binary_.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('build', ['jshint', 'uglify']);
};

