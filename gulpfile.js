'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var babelify = require("babelify");
var rimraf = require('rimraf');

var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

// transpiles and bundles application code
gulp.task('build-js', function() {
    var ext = ['.js', '.json', '.es6'];
    return browserify({
            debug: true,
            extensions: ext
        })
        .transform(babelify.configure({
            extensions: ext,
            optional: ["es7.classProperties"]
        }))
        .require("./src/js/main.js", {
            entry: true
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'));
});

// copies html to output directory
gulp.task('build-html', function() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('dist'));
});

// clean up
gulp.task('dist-clean', function(cb){
    rimraf('dist', cb);
});

gulp.task('build', ['build-js', 'build-html']);
gulp.task('default', ['build']);
