
(function (ns) { 
    ns.bringOut = function () {
        buildHeroCarousel();
        getTumblr();        
    },
  
    buildHeroCarousel = function () {      
        jQuery('#hero-carousel').after('<ul id="hero-nav">').cycle({
            timeout: 5000,
            pager: '#hero-nav',          
            pagerAnchorBuilder: function (idx, slide) {
                return '<li id="thumb-' + idx + '" style="background-image: url(' + jQuery("#hero-carousel").find("li:eq(" + idx + ")").attr("title") + ')"></li>';
            }
        });
       
        jQuery("#hero-nav").find("li").each(function () {
            var index = jQuery(this).index();
            jQuery("#hero-nav").find('li:eq(3)').addClass('last');
            jQuery(this)
                .click(function () {
                    window.location = jQuery("#hero-carousel").find("li:eq(" + index + ")").find("a").attr("href");
                })
                .hover(function () {
                    jQuery("#hero-carousel").cycle(index);
                });
        });
    },

    getTumblr = function () {
        jQuery.ajax({
            url: "http://api.tumblr.com/v2/blog/cultureclub.clubmonaco.com/posts?notes_info=true&type=photo&api_key=4yDqeXjyYkmfNoh4gUZrS3hl3DQ0JWFDX9boHV6Dbkig27i7Nt&limit=8&tag=women",
            //url: "http://api.tumblr.com/v2/blog/cultureclub.clubmonaco.com/posts?notes_info=true&amp;type=photo&amp;api_key=4yDqeXjyYkmfNoh4gUZrS3hl3DQ0JWFDX9boHV6Dbkig27i7Nt&amp;limit=8&amp;tag=women",                  

            cache: true,
            dataType: 'jsonp',
            success: function (data) {
                $posturl = jQuery(".blog-url");
                $posturl.each(function (index, value) {
                    jQuery(this).attr('href', data.response.posts[index].short_url).find('.blog-image').attr('src', data.response.posts[index].photos[0].alt_sizes[2].url);
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + errorThrown);
            }
        });
    };
}(window.WLP = window.WLP || {}));

;jQuery(function () {
    WLP.bringOut();
});