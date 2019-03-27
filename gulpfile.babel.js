import gulp from 'gulp'
import plumber from 'gulp-plumber'
import pug from 'gulp-pug'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import watch from 'gulp-watch'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import sourcemaps from 'gulp-sourcemaps'
import buffer from 'vinyl-buffer'
import imagemin from 'gulp-imagemin'
import autoprefixer from 'autoprefixer'
import tildeImporter from 'node-sass-tilde-importer'

const server = browserSync.create()

gulp.task('styles-dev', () =>
  gulp.src('./dev/scss/styles.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      importer: tildeImporter
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
      })
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(server.stream({match: '**/*.css'}))
);

gulp.task('styles-build', () =>
  gulp.src('./dev/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
      importer: tildeImporter
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
      })
    ]))
    .pipe(gulp.dest('./public/css'))
)


gulp.task('pug', () =>
  gulp.src('./dev/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
      basedir: './dev'
    }))
    .pipe(gulp.dest('./public'))
);

gulp.task('scripts', () =>
  browserify('./dev/js/index.js')
    .transform(babelify, {
      global: true
    })
    .bundle()
    .on('error', function(err){
      console.error(err);
      this.emit('end')
    })
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'))
);

gulp.task('images-build', () => {
  gulp.src('./dev/img/**/**')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('./public/img'))
})

gulp.task('images-dev', () => {
  gulp.src('./dev/img/**/**')
    .pipe(gulp.dest('./public/img'))
})

gulp.task('dev', ['styles-dev', 'pug', 'scripts', 'images-dev'], () => {
  server.init({
    server: {
      baseDir: './public'
    },
  });

  // imagenes
  gulp.watch('./dev/scss/**/**', () => gulp.start('styles-dev'))
  gulp.watch('./dev/js/**/**', () => gulp.start('scripts', server.reload))
  gulp.watch('./dev/md/**/**', () => gulp.start('pug', server.reload))
  gulp.watch('./dev/pug/**/**', () => gulp.start('pug', server.reload))
  gulp.watch('./dev/img/**/**', () => gulp.start('images-dev'))
});

gulp.task('build', ['styles-build', 'pug', 'scripts', 'images-build'])
