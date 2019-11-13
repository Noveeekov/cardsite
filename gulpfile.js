const
    gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    browserSync = require( 'browser-sync' ).create(),
    gulpStylelint = require( 'gulp-stylelint' );

function style () {
    return gulp.src([
        './static/scss/*.scss',
        '!./static/scss/normalize.scss'
    ])
          .pipe( gulpStylelint({
              reporters: [
                  {
                      formatter: 'string',
                      console: true
                  }
              ]
          }))
          .pipe( sass({
              indentType: 'space',
              indentWidth: 4,
              outputStyle: 'expanded'
          }))
          .pipe( gulp.dest( './static/css' ))
          .pipe( browserSync.stream());
}

function watch () {
    browserSync.init({
        open: false,
        server: {
            baseDir: './',
            index: './templates/index.html'
        }
    });
    gulp.watch( './static/scss/*.scss', style );
    gulp.watch( './templates/*.html' )
        .on( 'change', browserSync.reload );
    gulp.watch( './static/js/*.js' )
        .on( 'change', browserSync.reload );
}

exports.style = style;
exports.watch = watch;