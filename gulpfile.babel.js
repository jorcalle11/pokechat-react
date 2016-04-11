import gulp       from 'gulp';
import connect    from 'gulp-connect';
import babelify   from 'babelify';
import browserify from 'browserify';
import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';
import stylus     from 'gulp-stylus';
import concat     from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
  root: './app',
  html: './app/index.html',
  styles : {
    css : './app/css/*.css',
    stylus: {
      input:'./src/components/**/*.styl',
      output: './app/css',
      outputFileName : 'components.css'
    }
  },
  scripts : {
    src: {
      input : './src/app.jsx',
      js    : './src/**/*.jsx'
    },
    build: {
      output: 'bundle.js',
      js    : './app/js/'
    }
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
  gulp.src(paths.styles.css)
  .pipe(connect.reload());
});

gulp.task('build:css', () => {
  gulp.src(paths.styles.stylus.input)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat(paths.styles.stylus.outputFileName))
    .pipe(sourcemaps.write({addComment: false}))
    .pipe(gulp.dest(paths.styles.stylus.output));
});

gulp.task('build:js', () => {
  browserify({
    entries: paths.scripts.src.input,
    debug: true,
    extensions:['.js','.jsx'],
    transform: babelify
  }).bundle()
    .pipe(source(paths.scripts.build.output))
    .pipe(buffer())
    .pipe(gulp.dest(paths.scripts.build.js));
});

gulp.task('watch', () => {
  gulp.watch(paths.scripts.src.js, ['build:js']);
  gulp.watch(paths.styles.stylus.input, ['build:css']);
  gulp.watch(paths.styles.css, ['css']);
});

gulp.task('default', ['connect','watch']);
