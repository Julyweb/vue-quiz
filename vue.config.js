const webpack = require("webpack");

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ]
    },
    publicPath: '/',
    assetsDir: './plugins/petitions/src/Themes/Petition/assets',
    filenameHashing: false,
    productionSourceMap: false,
    pages:{
        ox_quiz:{
            entry: 'src/pages/oxQuiz/main.js',
            template: 'public/ox_quiz.html',
            filename: 'ox_quiz.out.html'
        },
        type_test:{
            entry: 'src/pages/typeTest/main.js',
            template: 'public/type_test.html',
            filename: 'type_test.out.html'
        }
    },
};
