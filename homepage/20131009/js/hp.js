﻿$(document).ready(function () {

    jQuery('.carousel').after('<div id="nav">').cycle({
        fx: 'fade',
        speed: '2000',
        timeout: 3000,
        pager: '#nav',
        pagerAnchorBuilder: function (idx, slide) {
            return '<a href="#" id="page_' + idx + '"></a>';
        }
    });
});     