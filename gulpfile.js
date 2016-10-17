'use strict';
var gulp = require('gulp'),
	bs = require('browser-sync'),
	concatCSS = require('gulp-concat-css'),
	stylus = require('gulp-stylus'),
	notify = require('gulp-notify'),
	autopref = require('gulp-autoprefixer'),
	reload = bs.reload;

gulp.task('default', function() {
	console.log('Working');
});

var path = {
	html: ['./index.html'],
	styl: ['./style/*.styl'],
	img: ['./images/**'],
	js: ['./script/script.js']
}

//bs
gulp.task('bs', function() {
	bs({
		server: {
		baseDir: 'app'
	},
		port: 9999,
		open: true,
		notify: true
	});
});

//html
gulp.task('html', function() {
	gulp.src(path.html)
	.pipe(gulp.dest('app/'))
	.pipe(reload({stream: true}));
});

//stylus
gulp.task('stylus', function() {
	gulp.src(path.styl)
	.pipe(stylus())
	.pipe(autopref(['last 3 versions']))
	.pipe(concatCSS('style.css'))
	.pipe(gulp.dest('app/style/'))
	.pipe(reload({stream: true}));
});

// gulp.task('img', function() {
// 	gulp.src(path.img)
// 	.pipe(gulp.dest('app/images/'));
// })

//js
gulp.task('script', function() {
	gulp.src(path.js)
	.pipe(gulp.dest('app/script/'))
	.pipe(reload({stream: true}));
});

//watch
gulp.task('watch', function() {
	gulp.watch(path.styl, ['stylus']);
	gulp.watch(path.js, ['script']);
	gulp.watch(path.html, ['html']);
});

gulp.task('default',['stylus', 'script', 'html', 'watch', 'bs']);
