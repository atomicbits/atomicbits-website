// When the user clicks anywhere outside of the navbar selection area, close it.
$(document).mouseup(function (e) {
    var container = $("#navbarToggleExternalContent");
    var visibleArea = $("#navbarVisibleArea");

    // if the target of the click isn't the container nor a descendant of the container
    if (!visibleArea.is(e.target) && visibleArea.has(e.target).length === 0) {
        container.removeClass('show');
        // e.preventDefault();
    }
});


$(
    function () {
        var bgvs = $('.bg-video');

        bgvs.each(
            function (i, bgv) {

                if ($(bgv).hasClass("lazy-loading")) {   // if ($(bgv).is(':visible')) { ...

                    $('source', bgv).each(
                        function () {
                            var el = $(this);
                            el.attr('src', el.attr('data-src'));
                        }
                    );

                    bgv.load();
                    $(bgv).removeClass("lazy-loading")
                }
            }
        );

    }
);
