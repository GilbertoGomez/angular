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
var mini = require('gulp-clean-css')
var pug = require('gulp-pug');


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
	gulp.src('./lib/css/*.css')
	.pipe(conc('index.css'))
	.pipe(mini({
		pretty:false
	}))
	.pipe(gulp.dest('./public/css/'))
})

gulp.task('html', function buildHTML() {
  gulp.src('./lib/vistas/index.pug')
  .pipe(pug({
  	pretty: false
  }))
  .pipe(gulp.dest('./public/pages/'))
});