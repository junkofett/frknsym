"use strict";

var gulp    = require("gulp"),
    sass    = require("gulp-sass"),
    plumber = require("gulp-plumber"),
    concat  = require("gulp-concat"),
    connect = require("gulp-connect");

gulp.task('connect-front', function () {
  connect.server({
    root: 'public',
    port: 8080,
    livereload: true
  });
});

gulp.task("html", function () {
  gulp.src("./public/*.html")
    .pipe(connect.reload());
});

gulp.task("sass-bootstrap", function(){

//  gulp.src(["./bower_components" + "/bootstrap-sass/assets/stylesheets/*",
//            "./bower_components" + "/bootstrap-sass/assets/stylesheets/bootstrap/*",
//            "./bower_components" + "/bootstrap-sass/assets/stylesheets/bootstrap/*",
//            "./bower_components" + "/bootstrap-sass/assets/stylesheets/bootstrap/*"])
/*  gulp.src("./bower_components" + "/bootstrap-sass/assets/stylesheets/**")
    .pipe(plumber())
    .pipe(sass({
          includePaths: ['./bower_components' + '/bootstrap-sass/assets/stylesheets'],
          style: 'compressed'
        })
      ).on('error', function(e){
        console.log(e);
      })
    .pipe(gulp.dest("./build"))
    .pipe(connect.reload());

  gulp.src("./build/css/*")
    .pipe(concat("bootstrap.css"))
    .pipe(gulp.dest("./public/css"))
    .pipe(connect.reload());
    */
});

gulp.task("sass-override", function() {
  gulp.src("./sass/**")
    .pipe(plumber())
    .pipe(sass({
          outputStyle : 'compressed'
        })
      )
    .pipe(concat("override.css"))
    .pipe(gulp.dest("./public/css"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch("./sass/*", ["sass-override"]);
  gulp.watch("./bower_components/bootstrap-sass/assets/stylesheets/*", ["sass-bootstrap"]);
  gulp.watch("./public/*.html", ["html"]);
});

gulp.task("default", ["connect-front", "watch"]);
