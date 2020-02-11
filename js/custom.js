$( document ).ready(function() {

    $('a[href^="http://"],a[href^="https://"]').attr('target','_blank');

    $('a[href^="http://"],a[href^="https://"]').each(function() {
        if (!$(this).hasClass("iconfont")) {
            $(this).css({
                background: "url(http://www.google.com/s2/favicons?domain=" + this.hostname + ") left center no-repeat",
                "padding-left": "20px"
            });
        }
    });

});
