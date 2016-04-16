'use strict';

var path = require('path');
var logMiddleware = require('morgan')('dev');

var rootPath = path.join(__dirname, '../');
var indexPath = path.join(rootPath, './index.html');
var faviconPath = path.join(rootPath, './public/favicon.ico');

module.exports = (app) => {
	app.setValue('projectRoot', rootPath);
	app.setValue('indexHTMLPath', indexPath);
	app.setValue('log', logMiddleware);
	app.setValue('faviconPath', faviconPath);
};

