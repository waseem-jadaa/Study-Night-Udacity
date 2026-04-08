import gulp from 'gulp';
import shell from 'gulp-shell';

//run Parcel
gulp.task('default', shell.task([
    'parcel index.html'
]));
//run Mocha tests
gulp.task('test', shell.task([
    'npx mocha test/shuffle.js'
]));

gulp.task('cypress', shell.task([
    // تشغيل اختبارات E2E بدون فتح الواجهة الرسومية
    'npx cypress run --e2e' 
]));