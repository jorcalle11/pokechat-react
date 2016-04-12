import gulp       from 'gulp';
import babelify   from 'babelify';
import browserify from 'browserify';
import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';
import stylus     from 'gulp-stylus';
import concat     from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import babel      from 'gulp-babel';
import nodemon    from 'gulp-nodemon';

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
    server: {
      input: './src/server/server.js',
      output: './build/server.js',
      build: './build'
    },
    build: {
      output: 'bundle.js',
      js    : './app/js/'
    }
  }
};

gulp.task('nodemon', () => {
  nodemon({
    script: paths.scripts.server.output,
    watch: ['./src'],
    env: {
      PORT: 3000
    },
    tasks: ['transpilate','build:js']
  });
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

gulp.task('transpilate', () => {
	gulp.src(paths.scripts.server.input)
		.pipe(babel())
		.pipe(gulp.dest(paths.scripts.server.build));
});

gulp.task('watch', () => {
  gulp.watch(paths.scripts.src.js, ['build:js']);
  gulp.watch(paths.styles.stylus.input, ['build:css']);
});

gulp.task('build', ['transpilate','build:js','build:css']);

gulp.task('default', ['nodemon','watch']);
