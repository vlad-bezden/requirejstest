define([ './modules/bar', './modules/baz'], function (bar, baz) {
	'use strict';
	
	// construction
	return {
		bar: bar.value,
		baz: baz.value
	};
});