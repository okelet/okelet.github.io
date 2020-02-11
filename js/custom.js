$( document ).ready(function() {

    $('a[href^="http://"],a[href^="https://"]').attr('target','_blank');

    $('a[href^="http://"],a[href^="https://"]').each(function() {
        if (!$(this).hasClass("iconfont")) {
            $(this).css({
                background: "url(https://www.google.com/s2/favicons?domain=" + this.hostname + ") left center no-repeat",
                "padding-left": "20px"
            });
        }
    });

});

var actualDomain = "https://blog.okelet.com";
if (window.location.hostname != "" && window.location.hostname != "localhost" && window.location.hostname != "127.0.0.1" && window.location.origin != actualDomain) {
    window.location.href = actualDomain + window.location.pathname + window.location.search;
}
