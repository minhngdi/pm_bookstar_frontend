//done
$(document).ready(function () {
    $('#login').on('submit', function (e) {
        e.preventDefault();
        var name = $('#username').val();
        var pass = $('#password').val();
        $.ajax({
            url: `https://lib-server.herokuapp.com/api/auth/login`||'http://localhost:6969/api/auth/login',
            method: 'POST',
            data: {username: name, password: pass},
            success: function (data) {
                console.log(data);
                $('#log_fail').empty();

                console.log("success");
                sessionStorage.mySession = data.userid;

                window.location.href = data.redirect;


            },
            error: function (result) {
                console.log(JSON.stringify(result));
                $('#log_fail').empty();
                $('#log_fail').append(`<p>
					${result.responseJSON.error}
					</p>
					`);
            }
        });
    });
});