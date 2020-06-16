//done
$(document).ready(function() {
    $('#nav-search').on('submit', function (e) {
        e.preventDefault();
        const USER_QUERY = $('#nav-keyword').val();
        window.location.href=`search.html?string=${USER_QUERY}`;
    });
});
