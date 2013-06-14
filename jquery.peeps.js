(function($) {

$.fn.peeps = function(uopts) {
var
	dopts = {
		classes: ['peeps'],
		onStart: null,
		beforeLoad: null,
		afterLoad: null
	},
	opts = $.extend(dopts, uopts);

	if(opts.onStart) {
		opts.onStart();
	}

	return this.each(function(i) {
		if(opts.beforeLoad) {
			$.proxy(opts.beforeLoad, this, i)();
		}
		$(this).addClass(opts.classes.join(' ')).on('load', function(ev) {
			$(this).removeClass(opts.classes.join(' '));
			if(opts.afterLoad) {
				$.proxy(opts.afterLoad, this, ev)();
			}
		});
	});
};

})(jQuery);
