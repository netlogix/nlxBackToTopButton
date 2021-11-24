;(function ($, window) {

    $.plugin('nlxScrollTop', {
        defaults: {
            showCls:       'show',
            exceptElement: 'body',
            exceptClasses: '.is--ctl-checkout, .is--target-checkout',
            button:        '#button--back-to-top',
            scrollTop:     300
        },

        init: function () {
            var me = this;
            if (!$(me.opts.exceptElement).is(me.opts.exceptClasses)) {
                me._on(window, 'scroll', $.proxy(me.upToTop, me));
            }
        },

        upToTop: function () {
            var me = this,
                offset = $(window).scrollTop();
            if (offset >= me.opts.scrollTop) {
                $(me.opts.button).addClass(me.opts.showCls);
            } else {
                $(me.opts.button).removeClass(me.opts.showCls);
            }

            $(me.opts.button).on('click', function (e) {
                e.preventDefault();
                $(window).scrollTop(0);
            });
        },

        destroy: function () {
            var me = this;
            $(me.$el).removeClass(me.opts.showCls);
            me._destroy();
        }
    });
    window.StateManager.addPlugin('body', 'nlxScrollTop');
})(jQuery, window);
