import gulp       from 'gulp';
import connect    from 'gulp-connect';
import babelify   from 'babelify';
import browserify from 'browserify';
import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';

const paths = {
  root: './app',
  html: './app/index.html',
  css : './app/css/main.css',
  src: {
    input : './src/app.jsx',
    js    : './src/**/*.jsx'
  },
  build: {
    output: 'bundle.js',
    js    : './app/js/'
  }
};

gulp.task('connect', () => {
  connect.server({
    root: paths.root,
    hostname: '0.0.0.0',
    port : 3000,
    livereload: true
  });
});

gulp.task('css', () => {
  gulp.src(paths.css)
  .pipe(connect.reload());
});

gulp.task('build', () => {
  browserify({
    entries: paths.src.input,
    debug: true,
    extensions:['.js','.jsx'],
    transform: babelify
  }).bundle()
    .pipe(source(paths.build.output))
    .pipe(buffer())
    .pipe(gulp.dest(paths.build.js));
});

gulp.task('watch', () => {
  gulp.watch(paths.src.js, ['build']);
  gulp.watch(paths.css, ['css']);
});

gulp.task('default', ['connect','watch']);
