'use strict';
/**
 * サーバー起動タスク
 */
let gulp = require('gulp');
let merge = require('merge');
let rewrite = require('connect-modrewrite');
let config = require('./config');
var browser = require('browser-sync');

gulp.task('server', () => {
    let options = merge(config.server, {
        server: {
            baseDir: config.public,
            directory: false,
            middleware: [
                rewrite([
                    '^[^\\.]*$ /index.html [L]'
                ])
            ]
        },
        notify: false
    });
    if (options.proxy) {
        delete options.server;
    }
    return browser(options);
});
gulp.task('reload', () => {
    browser.reload();
});
