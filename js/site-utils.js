
// When the user clicks anywhere outside of the navbar selection area, close it.
$(document).mouseup(function(e)
{
    var container = $("#navbarToggleExternalContent");
    var visibleArea = $("#navbarVisibleArea");

    // if the target of the click isn't the container nor a descendant of the container
    if (!visibleArea.is(e.target) && visibleArea.has(e.target).length === 0)
    {
        container.removeClass('show');
        e.preventDefault();
    }
});