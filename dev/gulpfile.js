const {src, dest} = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const plumber = require("gulp-plumber");
const panini = require("panini");
const scss = require("gulp-sass");
const stylelint = require("gulp-stylelint");
const rename = require("gulp-rename");
const comments = require("gulp-strip-comments");
const rigger = require("gulp-rigger");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const del = require("del");
const browserSync = require("browser-sync").create();

// // // // // // //
// Paths to files //
// // // // // // //

let path = {
    dist: {
        html: "./dist/templates/",
        css: "./dist/static/css/",
        js: "./dist/static/js/",
        images: "./dist/static/image/"
    },
    src: {
        html: "./src/*.{htm,html,pht}",
        css: "./src/static/css/*.css",
        scss: "./src/static/scss/style.scss",
        js: "./src/static/js/*.js",
        jslib: "./src/static/js/lib/*js",
        json: "./src/static/js/*.json",
        images: "./src/static/image/**/*.{jpg,jpeg,png,svg,gif,ico}"
    },
    watch: {
        html: "./src/**/*.{htm,html,php}",
        css: "./src/static/css/*.css",
        scss: "./src/static/scss/**/*.scss",
        js: "./src/static/js/**/*.js",
        json: "./src/static/js/*.json",
        images: "./src/static/image/**/*.{jpg,jpeg,png,svg,gif,ico}"

    },
    clean: "./dist/"
};

// // // //
// Tasks //
// // // //

function browser(done) {
    "use strict";

    browserSync.init({
        open: false,
        server: {
            baseDir: "./dist/",
            index: "templates/index.html"
        }
    });

    done();
}

function browserReload(done) {
    "use strict";

    browserSync.reload();

    done();
}

function templates() {
    "use strict";

    panini.refresh();
    return src(path.src.html, {base: "./src/"})
        .pipe(plumber())
        .pipe(panini({
            root: "./src/",
            layouts: "./src/tpl/layouts/",
            partials: "./src/tpl/partials/",
            helpers: "./src/tpl/helpers/",
            data: "./src/tpl/data/"
        }))
        .pipe(comments({
            safe: true
        }))
        .pipe(dest(path.dist.html))
        .pipe(browserSync.stream());
}

function css() {
    "use strict";

    return src(path.src.css, {base: "./src/static/css/"})
        .pipe(plumber())
        .pipe(dest(path.dist.css))
        .pipe(cssnano ({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.dist.css))
        .pipe(browserSync.stream());
}

function styles() {
    "use strict";

    return src(path.src.scss,  {base: "./src/static/scss/"})
        .pipe(plumber())
        .pipe(stylelint({
            reporters: [
                {
                    formatter: "string",
                    console: "true"
                }
            ]
        }))
        .pipe(scss({
            indentType: "space",
            indentWidth: 4,
            outputStyle: "expanded"
        }).on("error", scss.logError))
        .pipe(autoprefixer())
        .pipe(dest(path.dist.css))
        .pipe(cssnano ({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.dist.css))
        .pipe(browserSync.stream());
}

function scripts() {
    "use strict";

    return src(path.src.js, {base: "./src/static/js/"})
        .pipe(plumber())
        .pipe(rigger())
        .pipe(babel({
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: {
                            "ie": "10"
                        }
                    }
                ]
            ]
        }))
        .pipe(dest(path.dist.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.dist.js))
        .pipe(browserSync.stream());
}

function jslibs() {
    "use strict";

    return src(path.src.jslib, {base: "./src/static/js/lib/"})
        .pipe(plumber())
        .pipe(rigger())
        .pipe(dest(path.dist.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.dist.js))
        .pipe(browserSync.stream());
}

function json() {
    "use strict";

    return src(path.src.json, {base: "./src/static/js/"})
        .pipe(dest(path.dist.js));
}

function images() {
    "use strict";

    return src(path.src.images, {base: "./src/static/images/"})
        .pipe(dest(path.dist.images));
}

function clean() {
    "use strict";

    return del(path.clean);
}

function watchFiles() {
    "use strict";

    gulp.watch([path.watch.html], templates);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.scss], styles);
    gulp.watch([path.watch.js], scripts);
    gulp.watch([path.watch.json], json);
    gulp.watch([path.watch.images], images);
}

const build = gulp.series(clean, gulp.parallel(templates, css, styles, scripts, jslibs, json, images));
const watch = gulp.parallel(build, watchFiles, browser);

// // // // // // 
// Export tasks //
// // // // // //

exports.templates = templates;
exports.css = css;
exports.styles = styles;
exports.scripts = scripts;
exports.jslibs = jslibs;
exports.json = json;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;

