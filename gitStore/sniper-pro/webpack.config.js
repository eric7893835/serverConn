var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new webpack.optimize.CommonsChunkPlugin(
        {
            name: ['jquery'],   // 将公共模块提取
            filename: 'common.js',
            minChunks: Infinity // 提取所有entry公用依赖的模块
        }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new webpack.IgnorePlugin(/src\/libs\/*/),
    new ExtractTextPlugin('[name].[contenthash:9].css')
];

module.exports = {
    cache: true,
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    entry: {
        whd: 'webpack/hot/dev-server',
        client: 'webpack-dev-server/client?http://localhost:8080',
        'login': './src/js/login.js',
        'index': './src/js/index.js',
        'host-manage': './src/js/host-manage.js',
        'log-details': './src/js/log-details.js',
        'strategy': './src/js/strategy.js'
    },
    plugins: plugins,
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].js',
        publicPath: './js/'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css-loader'},
            {test: /\.js$/, loader: 'babel?presets[]=es2015'},
            {test: /\.less$/, loader: 'style!css!less?sourceMap'},
            {test: /\.(gif|png|jpg|jpeg)$/, loader: 'url?limit=8192&name=images/[name].[ext]'},
            {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'url'}
        ]
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json', '.less'],
        alias: {
            baseURL: 'src/js/base-url.js',
            jquery: 'src/lib/jquery-1.12.1.min.js',
            layer: 'src/lib/layer/layer.js',
            daterangepicker: 'src/lib/daterangepicker/daterangepicker.js',
            jqueryModal: 'src/lib/jquery-modal/jquery.modal.min.js',
            scrollbar: 'src/lib/jquery.perfect-scrollbar/perfect-scrollbar.jquery.min.js',
            switchery: 'src/lib/switchery/switchery.js',
            dataTables: 'src/lib/jquery.dataTables/js/jquery.dataTables.min.js',
            validate: 'src/lib/validate/jquery.validate.min.js',
            messagesZh: 'src/lib/validate/localization/messages_zh.min.js',
            jqueryUi: 'src/lib/jquery-ui.min.js',
            world: 'src/lib/world.js',
            serialize: 'src/lib/jquery.serialize-object.js',
            select2: 'src/lib/select/select2.js',
            contextMenu: 'src/lib/contextMenu/jquery.contextMenu.js',
            tooltipster: 'src/lib/tooltipster/tooltipster.bundle.min.js',
            echarts: 'src/lib/echarts.min.js',
            pie:'src/lib/chart/pie.js',
            bar:'src/lib/chart/bar.js',
            line:'src/lib/chart/line.js',
            map:'src/lib/chart/map.js'
        }
    },
    externals: {
        '$': 'jquery'
    }
};
