﻿var gulp = require("gulp");
var del = require("del");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var watchify = require("watchify");
var gutil = require("gulp-util");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var typedoc = require("gulp-typedoc");
var packageJson = require("./package.json");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var streamify = require("gulp-streamify");

var b = browserify({
		basedir: ".",
		debug: true,
		entries: ["src/renderer.ts"],
		cache: {},
		packageCache: {},
		standalone: "JSCLModules"
	}).plugin(tsify);

var watchedBrowserify = null;

function bundle(task) {
	return task.
		bundle().
		on("error", gutil.log).
		pipe(source("jsc-modules.js")).
		pipe(buffer()).
		pipe(sourcemaps.init({ loadMaps: true })).
		pipe(sourcemaps.write("./")).
		pipe(gulp.dest("dist"));
}

gulp.task("watch", function () {
	if (!watchedBrowserify) {
		watchedBrowserify = watchify(b);
		watchedBrowserify.on("update", function() {
			return bundle(b);
		});
		watchedBrowserify.on("log", gutil.log);
	}
	return bundle(watchedBrowserify);
});

gulp.task("min", function () {
	return b.
		bundle().
		on("error", gutil.log).
		pipe(source("jsc-modules.min.js")).
		pipe(buffer()).
		pipe(sourcemaps.init({ loadMaps: true })).
		pipe(uglify()).
		pipe(sourcemaps.write("./")).
		pipe(gulp.dest("dist"));
});

gulp.task("default", function () {
	return bundle(b);
});

gulp.task("typedoc", function () {
	return gulp.
		src([packageJson.srcPath + "**/*.ts", "./typings/index.d.ts"]).
		pipe(typedoc({
			module: "commonjs",
			target: "es5",
			out: packageJson.docsPath,
			name: packageJson.name,
			includeDeclarations: true,
			ignoreCompilerErrors: false,
			version: true
		}))
	;
});

gulp.task("clean", function () {
	return del(["./dist/*", "./docs/*"]);
});
gulp.task("build", ["clean", "typedoc", "min", "default"]);
