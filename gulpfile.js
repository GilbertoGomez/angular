/*
* Dependencias
*/

var gulp = require('gulp')
var browserify = require('browserify') 
var babelify = require('babelify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var conc = require('gulp-concat')
var uglify = require('gulp-uglify')
var comp = require('gulp-compressor')
var mini = require('gulp-minify-css')


gulp.task('js', function (){
	return browserify({ 
		entries:'lib/controladores/controllers.js',
		transform: [ babelify]
	})
	.bundle()
	.pipe(source('index.js'))
	.pipe(buffer())
	//.pipe(uglify())
	.pipe(gulp.dest('./public/js/'))
})

gulp.task('css',function (){
	gulp.src('./lib/*.css')
	.pipe(conc('index.css'))
	.pipe(mini())
	.pipe(gulp.dest('./public/css/'))
})
