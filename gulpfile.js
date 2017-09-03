const gulp = require('gulp')
const postcss = require('postcss')
const sass = require('postcss-node-sass')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const htmlMinify = require('html-minifier').minify
const importsInliner = require('gulp-js-text-imports')
const watch = require('gulp-watch')

gulp.task('default', () => {
    return gulp.src('./src/**/*.js')
        // TODO: here should be a check so we don't rebuild unmodified files each time
        .pipe(importsInliner({
            parserOptions: {
                allowImportExportEverywhere: true
            },
            handlers: {
                'scss': (content, path, callback) => {
                    postcss([
                        sass,
                        autoprefixer,
                        cssnano
                    ])
                        .process(content)
                        .then(result => callback(null, result.css))
                        .catch(err => callback(err, null))
                },
                'html': (content, path, callback) => {
                    let result
                    try {
                        result = htmlMinify(content, {
                            collapseWhitespace: true
                        })
                    } catch (err) {
                        return callback(err, null)
                    }
                    return callback(null, result)
                }
            }
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
    return watch(['./src/**/*.js', './src/**/*.html', './src/**/*.scss'], () => {
        gulp.start('default')
    })
})