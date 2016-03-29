'use strict';

module.exports = {
    // 
     'serverport': 9000,

    // 'styles': {
    //     'watch':'web/scss/**/*.scss',
    //     'src': 'web/scss/**/*.scss',
    //     'dest': 'build/css'
    // },
    'server':{
        port:9000
    },
    'demoserver':{
        port:9300
    },
    //
    'styles': {
        'watch':['src/less/*.less','src/less/*/*.less'],
        'src': ['src/less/AdminLTE.less'],
        'dest': 'build/css'
    },
    'lib': {
        'dist':'lib.js',
        'src': [
                "src/bower_components/jquery/dist/jquery.min.js",
                "src/bower_components/bootstrap/js/dropdown.js",
                "src/bower_components/slimScroll/jquery.slimscroll.min.js",
                //"src/bower_components/isMobile/isMobile.min.js",
                //"src/bower_components/easing/jquery.easing.1.3.min.js",
                //"src/bower_components/bootstrap/dist/js/bootstrap.min.js",
                //"src/bower_components/jquery.inview/jquery.inview.min.js",
                //"src/bower_components/fitvids/jquery.fitvids.js",
                //"src/bower_components/jquery.scrollTo/jquery.scrollTo.min.js",
                //"src/bower_components/jquery-placeholder/jquery.placeholder.min.js",
                //"src/bower_components/flexslider/jquery.flexslider-min.js",
                //"src/bower_components/matchHeight/jquery.matchHeight-min.js",
                 ],
        'dest': 'build/js'
    },
    'copycss':{
        'src':[
            'web/bower_components/bootstrap/dist/css/bootstrap.min.css',
            'web/bower_components/fontawesome/css/font-awesome.min.css',
            'web/bower_components/flexslider/flexslider.css',
            'web/bower_components/animate.css/animate.min.css'
            ],
        'dest':'build/css'
    },
    'copyfonts':{
        'src':["src/bower_components/font-awesome/fonts/*","src/fonts/*/*"],
        'dest':'build/fonts'
    },
    'scripts': {
        'src': 'src/js/*.js',
        'dest': 'build/js/'
    },
    'images': {
        'src': 'src/images/**/*',
        'dest': 'build/images'
    },
    'views': {
        'watch': [
            
            'build/index.html',
            'build/pages/*.html'
            //'web/web/views/**/*.html'
        ],
        'src': ['rev/**/*.json','src/index.html','src/pages/*'],
        'base': 'src',
        'dest': 'build/'
    },
    tmodtpl:{
        'watch':[
            "src/tpl/*.html"
        ],
        'src':"src/tpl/*.html",
        'dest':'build/js/'
    },
    'dist': {
        'root': 'build'
    }
}
