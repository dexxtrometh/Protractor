"use strict";

var rootDir = __dirname;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--window-size=1360,768',
                'disable-infobars=true'
            ],
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'default_directory': rootDir
                }
            }
        }
    },
    specs: ['specs/**/*.e2e-spec.js'],    
    params: {
        baseUrl: 'http://vtest16:8093/catalog-planning/#/productionsEditor',
        randomValues: {
            from: 1111,
            to: 9999
        },
        visibilityWaitingTime: {
            fileDownloading: 30000,
            elementDrawing: 8000
        },
        downloading: {
            path: rootDir,
            fileName : '/report.xlsx'
        }
    },
    onPrepare: function () {
        var env = jasmine.getEnv();
        var matchers = require(rootDir + '/matchers/matchers.js');
        env.beforeEach(function () {
            jasmine.addMatchers(matchers);
        });
    }
};