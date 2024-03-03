const path = require('path');

module.exports = {
    entry: {index: './src/index.js',
            viewForm: './src/viewForm.js',
    },  
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        hot:true,
      },
    
};