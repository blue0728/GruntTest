// 项目配置
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*合并文件*/
        concat: {
            js: {
                src: ['./dev/js/lib/jquery.js', './dev/js/lib/require.js'],
                dest: './dev/js/lib/lib.js'
            }
        },

        /*js 压缩*/
        uglify: {
            js: {
                files: [{
                    expand: true,
                    cwd: './dev/js',
                    src: '**/*.js',
                    dest: './dist/js'
                }]
            }
        },

        /*css 压缩*/
        cssmin: {
            options: {
                compatibility: 'ie8', //设置兼容模式
                noAdvanced: true //取消高级特性
            },
            css: {
                files: [{
                    expand: true,
                    cwd: './dev/css',
                    src: '**/*.css',
                    dest: './dist/css'
                }, {
                    expand: true,
                    cwd: './dev/js/modules',
                    src: '**/*.css',
                    dest: './dist/js/modules'
                }]
            }
        },

        /*image 压缩*/
        imagemin: {
            image: {
                files: [{
                    expand: true,
                    cwd: './dev/images',
                    src: ['**/*.{png,gif,jpg}'],
                    dest: 'dist/images'
                }, {
                    expand: true,
                    cwd: './dev/js/modules',
                    src: ['**/*.{png,gif,jpg}'],
                    dest: './dist/js/modules'
                }]
            }
        },

        /*模版编译*/
        tmod: {
            tpl: {
                src: './dev/tpl/**/*.html',
                dest: './dev/tpl/build',
                options: {
                    base: './dev/tpl/',
                    combo: true,
                    charset: "utf-8",
                    syntax: "simple",
                    //helpers: "./helper/template-helper.js",   //自定义插件
                    escape: true,
                    compress: true,
                    type: "amd",
                    runtime: "template.js",
                    alias: null,
                    minify: true,
                    cache: true
                }
            }
        },

        /*文件拷贝*/
        copy: {
            /*拷贝模版文件*/
            tpl: {
                expand: true,
                cwd: './dev/tpl/',
                src: ['**/*'],
                dest: './dist/tpl'
            },
            /*拷贝html文件*/
            html: {
                expand: true,
                cwd: './dev/',
                src: ['*.html'],
                dest: './dist'
            }
        }

    });

    // 加载任务的插件
    grunt.loadNpmTasks('grunt-newer'); 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-tmod');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 默认任务
    grunt.registerTask('default', ['newer:concat:js', 'newer:uglify:js', 'newer:cssmin:css', 'newer:imagemin:image', 'newer:tmod:tpl', 'newer:copy:tpl']);

    grunt.registerTask('tpl', ['tmod:www', 'copy:tpl']); //单独执行tpl
    grunt.registerTask('html', ['copy:html']) //单独执行copy html

}