var webpack = require("webpack");
var AotPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
var AngularCompilerPlugin = new AotPlugin({
    entryModule: "./src/app/app.module#AppModule",
    tsConfigPath: "./tsconfig.json"
});

module.exports = (environment)=>{
    const webpackconfig = {
        entry: {            
            "app": "./src/main.ts"
        },
        output: {
            filename: "[name].js",
            path: __dirname + "/dist",
            libraryTarget: "umd"
        },
        mode: "development",
        
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    rxjs: {
                        test: /[\\/]rxjs[\\/]/,
                        name: "rxjs",
                        minSize: 0
                    },
                    angular: {
                        test: /[\\/]@angular[\\/]/,
                        name: "angular",
                        minSize: 0
                    }
                }
            }
        },
        
        devServer: {
            contentBase: __dirname + '/dist',
            https: true,
            inline: false,
            compress: true,
            port: 10086
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: [ /*"awesome-typescript-loader",*/"@ngtools/webpack" ] },
                { test: /\.(html|css)$/, loader: 'raw-loader', exclude: /\.async\.(html|css)$/}
            ]
        },
        devtool: "source-map",    
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },    
        plugins: [ AngularCompilerPlugin ]
    };

    return webpackconfig;
};