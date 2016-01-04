require.config({
	paths: {
		foo: './modules/foo'
	}
});
require(['foo'], function (foo) {
	'use strict';
	document.writeln(foo.bar);
	document.writeln(foo.baz);
});