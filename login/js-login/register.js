
$(document).ready(function () {
    $('#register').on('submit', function (e) {
        e.preventDefault();
        var name = $('#username').val();
        var pass = $('#password').val();
        var re_pass = $('#confirm_password').val();
        var email = $('#email').val();
        var age = $('#age').val();
        var address = $('#address').val();

        if (name === '' || pass === '' || re_pass === ''|| email === '' || age === '' || address === '' ) {
            $('#log_fail').append(`<p>
					Please fill all fields!
					</p>
					`);
        } else if ((name.length) < 5) {
            $('#log_fail').html(`<p>
				    Username must be at least 5 characters!
					</p>
					`);
        } else if ((pass.length) < 6) {
            $('#log_fail').html(`<p>
					Password must be at least 6 characters!
					</p>
					`);
        } else if (!(pass).match(re_pass)) {
            $('#log_fail').html(`<p>
				    Password didn't match!Try again!
					</p>
					`);
        } else if (age<=5) {
            $('#log_fail').html(`<p>
				    User must be older than 5 years old!
					</p>
					`);
        } else if ((address.length) < 6) {
            $('#log_fail').html(`<p>
					Address must be at least 6 characters!
					</p>
					`);
        } else {
            $.ajax({
                url: `https://lib-server.herokuapp.com/api/user/username/username`||'http://localhost:6969/api/user/username/username',
                method: 'GET',
                success: function (data) {
                    console.log(data);
                    if(data.user.length!==0){
                        $('#log_fail').html(`<p>
				    username already existed!Try again!
					</p>
					`);
                    }
                    else{
                        $.ajax({
                            url: `https://lib-server.herokuapp.com/api/user/`||'http://localhost:6969/api/user/',
                            method: 'POST',
                            data: {username: name, password: pass ,email:email, age:age,address:address},
                            success: function () {
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

                            },
                            error: function (result) {
                                console.log(JSON.stringify(result));
                                $('#sign_fail').append(`<p>
					Sign up fail! Try Again!
					</p>
					`);
                            }
                        });

                    }
                },
                error: function (result) {
                    console.log(JSON.stringify(result));
                    $('#log_fail').html(`<p>
				    Server error!Try again!
					</p>
					`);
                }
            });
        }
    });
});

