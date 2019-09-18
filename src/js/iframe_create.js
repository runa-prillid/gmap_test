/**************************************************
 * modules load
 *************************************************/
const gulp   = require('gulp');
const fs     = require('fs');
const data   = require('gulp-data');
const rename = require('gulp-rename');

/**************************************************
 * config
 *************************************************/
const template = './src/html/planTemplate.html';
const jsonPath = './src/json/planData.json';
const dest     = './dest/';

/**************************************************
 * task
 *************************************************/
// 指定するのが面倒なのでtask名をdefaultに変更
gulp.task('default', (done) => {
    const json = JSON.parse(fs.readFileSync(jsonPath));
    
    for (let key of json) {
      gulp.
          })
          .pipe(gulp.dest(dest));
    }
    // gulp4系から明示的に終了のコールバックを実行しないとエラーが出るので追加。
    done();
  });