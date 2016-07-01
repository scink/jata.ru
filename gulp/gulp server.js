'use strict';

const
	gulp		= require('gulp'),
	bs			= require('browser-sync'),
	config	= require('./config');

module.exports = function() {
	return function() {
		bs.init({
			injectChanges	: true,
			logPrefix		: 'Server says, that',
			port				: 7778,
			// proxy				: 'admin.jata.ru',
			server			: 'build',
			// tunnel			: true,
		});
	}
};