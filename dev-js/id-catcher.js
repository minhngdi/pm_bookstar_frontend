$(document).ready(function() {
    $('.logout-nav').hide();

    let url = window.location.href; // or window.location.href for current url
    if((/id=([^&]+)/.exec(url))) {
        $('.login-nav').hide();
        $('.logout-nav').show();

        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let userid = captured ? captured : 1;
        console.log(userid);

        $.ajax({
            url: `https://lib-server.herokuapp.com/api/user/${userid}`||`http://localhost:6969/api/user/${userid}`,
            method: 'GET',
            success: function (data) {
                $('.current-user').html(`Hello ${data.user[0].username} !`);

                console.log(data);
            },
            error: function () {
                console.log("error");
            }
        });
    }


});