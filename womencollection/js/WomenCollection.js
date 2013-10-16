(function (ns) {     
    ns.Init = function () {
        jQuery("[title]").quickshop();    //jQuery("[title]").quickshop({ data: FeatureProducts });    
        buildSlider();
    },
 
    buildSlider = function () {      
        jQuery('#cycle-feature').cycle({
            fx: 'fade',
            delay: -2000,
            speed: 500,
            timeout: 0,
            pager: '#pager-feature',
            next: '#next-item',
            prev: '#prev-item',
            nowrap: true,           
            before: function (curr, next, opts) {
                jQuery(this).removeClass('activeSlide');
            },
            after: function (curr, next, opts) {
                jQuery(this).addClass('activeSlide');
                if (opts.currSlide == 0) { jQuery('#prev-item').addClass('disabled'); } else { jQuery('#prev-item').removeClass('disabled'); }
                if (opts.nextSlide == 0) { jQuery('#next-item').addClass('disabled'); } else { jQuery('#next-item').removeClass('disabled'); }
            }
        });
      
        jQuery('.cycleNextSlide').css('cursor', 'pointer');
        jQuery('.cycleNextSlide').click(function () {
            jQuery('#cycle-feature').cycle(1);
        });
      
        jQuery('.feature-slider').waitForImages({
            waitForAll: true,
            finished: function () {
                jQuery('.feature-slider').fadeIn();
            }
        });
      
        jQuery('.deeplink-kennedy').click(function () {
            jQuery('#cycle-feature').cycle(1);
        });
        jQuery('.deeplink-davis').click(function () {
            jQuery('#cycle-feature').cycle(2);
        });
    };

}(window.WC = window.WC || {}));

;jQuery(function () {
    WC.Init();
}); 