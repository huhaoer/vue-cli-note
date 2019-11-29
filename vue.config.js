// 配置文件  完成时运行npm run build 打包上线会生成一个Dist文件夹,在js文件夹下面有map映射文件可以在配置文件中取消
const path = require('path')//下面要用到Path变量,先从node 获取
module.exports = {
    //配置是否打包map文件
    productionSourceMap: false,

    //配置输出的文件夹目录
    outputDir: './myDist',

    //上线以后 请求的css文件和js文件等不是在根目录下,可以设置自己请求的地址
    publicPath: process.env.NODE_ENV === 'production' ? 'http://www.baidu.com' : '/',

    //将静态资源css,js,img等 都放在一个文件夹下
    assetsDir: 'assets',

    chainWebpack: config => {//config是上面导出的这个对象,作为参数  设置快捷代表文件夹  这里是将src/views文件夹用_V表示
        config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))
    },

    configureWebpack: {//正常配置webpack在这里面
        //plugin : [],
        // module : {}
    },

    devServer: {//配置代理,用axios请求时,前面的请求地址只填写请求的内容就可以,不用带上域名  请求的是localhost,这里配置代理,可以将loaclhost转为target里里面的地址
        proxy: {
            '/api/chat/sendMsg': {//具体请求的地址
                target: 'http://api.duyiedu.com'//将localhost代理的地址,访问的localhost,通过target代理,将地址改变为target地址
            }
        }
    },

    // 这就是style-resources-loader的配置文件  在patterns里面写上要使用文件的路径就可以全局使用
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, 'src/assets/styles/variale.less')
            ]
        }
    }
}
