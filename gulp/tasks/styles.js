 var postcss = require('gulp-postcss'),
     gulp = require('gulp'),
     autoprefixer = require('autoprefixer'),
     cssvars = require('postcss-simple-vars'),
     nested = require('postcss-nested'),
     cssImport = require('postcss-import');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});