'use strict';

var webpack = require('webpack');

var config = {
    "mode": "development",
    "context": "G:\\saar_docs\\GitHub\\finance-app-fe\\build\\classes\\kotlin\\main",
    "entry": {
        "main": "./finance-app-fe"
    },
    "output": {
        "path": "G:\\saar_docs\\GitHub\\finance-app-fe\\build\\bundle",
        "filename": "[name].bundle.js",
        "chunkFilename": "[id].bundle.js",
        "publicPath": "/"
    },
    "module": {
        "rules": [
            
        ]
    },
    "resolve": {
        "modules": [
            "classes\\kotlin\\main",
            "resources\\main",
            "G:\\saar_docs\\GitHub\\finance-app-fe\\build\\node_modules",
            "node_modules"
        ]
    },
    "plugins": [
        
    ]
};

module.exports = config;

