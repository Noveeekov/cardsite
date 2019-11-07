const
    gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    browserSync = require( 'browser-sync' ).create(),
    gulpStylelint = require( 'gulp-stylelint' );

function style () {
    return gulp.src( './static/scss/**/*.scss' )
          .pipe( gulpStylelint({
              reporters: [
                  {
                      formatter: 'string',
                      console: true
                  }
              ]
          }))
          .pipe( sass())
          .pipe( gulp.dest( './static/css' ))
          .pipe( browserSync.stream());
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './templates'
        },
        open: false
    });
    gulp.watch( './static/scss/**/*.scss', style );
    gulp.watch( './templates/**/*.html' )
        .on( 'change', browserSync.reload );
    gulp.watch( './static/js/**/*.js' )
        .on( 'change', browserSync.reload );
}

exports.style = style;
exports.watch = watch;