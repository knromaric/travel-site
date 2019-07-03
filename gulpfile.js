var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function () {
    console.log("Hello, My FIRST GULP TASK");
});

gulp.task('html', function () {
    console.log("Hope to do something useful with this HTML");
});

gulp.task('styles', function () {
    console.log("Imagine SASS or PostCSS tasks running here");
});

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html')
    })

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    })
})