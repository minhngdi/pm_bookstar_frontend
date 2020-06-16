//half
$(document).ready(function() {
    $('.logout-nav').hide();
    $('.current-user').hide();

    var sessiondata =sessionStorage.getItem("mySession");


    if (sessiondata!=null) {
        $.ajax({
            url: `https://lib-server.herokuapp.com/${sessiondata}`||`http://localhost:6969/api/user/id/${sessiondata}`,
            method: 'GET',
            success: function (data) {
                $('.current-user').show();
                $('.current-user').html(`Hello ${data.user[0].username} !`);
                $('.login-nav').hide();
                $('.logout-nav').show();
            },
            error: function () {
                console.log("error");
            }
        });

    }


    let url = window.location.href; // or window.location.href for current url
    if((/id=([^&]+)/.exec(url))) {
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let bookid = captured ? captured : 1;
        console.log(bookid);

        $.ajax({
            url: `https://lib-server.herokuapp.com/api/bookdetail/info/${bookid}`||`http://localhost:6969/api/bookdetail/info/${bookid}`,
            method: 'GET',
            success: function (data) {
               console.log(data);
                $('#bookImage').attr("src", "uploads/" + `${data.book[0].url}`);
                $('#bookName').html(`${data.book[0].bookname.toUpperCase()}`);

                $('#tacgia').html(`Tác giả: ${data.book[0].authorname}`);
                $('#nhaxuatban').html(`Nhà xuất bản:       ${data.book[0].publishername}`);
                var date=data.book[0].release_time;
                $('#namxuatban').html(`Năm xuất bản: ${date.slice(0,4)}`);
                // $('#namphathanh').html(`Năm phát hành: ${data.book[0].update_time}`);

                if(data.book[0].lang === "en") {
                    $('#ngonngu').html(`Ngôn ngữ: English`);
                }
                else if(data.book[0].lang === "vie") {
                    $('#ngonngu').html(`Ngôn ngữ: Tiếng Việt`);
                }
                else $('#ngonngu').html(`Ngôn ngữ: ${data.book[0].lang}`);


                $('#theloai').html(`Thể loại: ${data.book[0].tag}`);

                $.ajax({
                    url: `https://lib-server.herokuapp.com/api/search/tag/${data.book[0].tag}`||`http://localhost:6969/api/search/tag/${data.book[0].tag}`,

                    method: 'GET',
                    success: function (data2) {
                        if (data2.book[0]) {
                            $('#recommendImage1').attr("src", "uploads/" + `${data2.book[0].url}`);
                            $('#recommendName1').html(`${data2.book[0].bookname}`);
                            $('.recommendDetail1').click(function () {
                                window.location.href = `bookdetail.html?id=${data2.book[0].bookid}`;
                            });
                            $('#recommendRating1').html(` RATING:${data2.book[0].avg}/5`);
                        }

                        if (data2.book[1]) {
                            $('#recommendImage2').attr("src", "uploads/" + `${data2.book[1].url}`);
                            $('#recommendName2').html(`${data2.book[1].bookname}`);
                            $('.recommendDetail2').click(function () {
                                window.location.href = `bookdetail.html?id=${data2.book[1].bookid}`;
                            });
                            $('#recommendRating2').html(` RATING:${data2.book[1].avg}/5`);
                        }

                        if (data2.book[2]) {
                            $('#recommendImage3').attr("src", "uploads/" + `${data2.book[2].url}`);
                            $('#recommendName3').html(`${data2.book[2].bookname}`);
                            $('.recommendDetail3').click(function () {
                                window.location.href = `bookdetail.html?id=${data2.book[2].bookid}`;
                            });
                            $('#recommendRating3').html(` RATING:${data2.book[2].avg}/5`);
                        }

                        if (data2.book[3]) {
                            $('#recommendImage4').attr("src", "uploads/" + `${data2.book[3].url}`);
                            $('#recommendName4').html(`${data2.book[3].bookname}`);
                            $('.recommendDetail4').click(function () {
                                window.location.href = `bookdetail.html?id=${data2.book[3].bookid}`;
                            });
                            $('#recommendRating4').html(` RATING:${data2.book[3].avg}/5`);
                        }

                        if (data2.book[4]) {
                            $('#recommendImage5').attr("src", "uploads/" + `${data2.book[4].url}`);
                            $('#recommendName5').html(`${data2.book[4].bookname}`);
                            $('.recommendDetail5').click(function () {
                                window.location.href = `bookdetail.html?id=${data2.book[4].bookid}`;
                            });
                            $('#recommendRating5').html(` RATING:${data2.book[4].avg}/5`);
                        }




                    },
                    error: function () {
                        console.log("error");
                    }
                });


            },
            error: function () {
                console.log("error");
            }
        });

        $.ajax({
            url: `https://lib-server.herokuapp.com/api/bookdetail/comment/${bookid}`||`http://localhost:6969/api/bookdetail/comment/${bookid}`,
            method: 'GET',
            success: function (data) {
                $('#commentlist').html('');
                if (data.book && data.book.length > 0) {
                    let commentListItem = data.book.map(function (commentItem) {
                        console.log(commentItem);
                        return `<a class="list-group-item"><h4>${commentItem.username}</h4><div class="p-l-20 p-t-10">${commentItem.comment}</div></a>`;
                    });
                    $('#commentlist').append(commentListItem);
                }
                if (data.book.length === 0) {
                    $('#commentlist').append(`<div class="p-l-30">No comment yet</div>`)

                }
            },
            error: function () {
                console.log("error");
            }
        });

        $('.logout-nav').on('click', function (e) {
            e.preventDefault();
            sessionStorage.clear();
            window.location.href = '/';

            // $.ajax({
            //     url: `http://localhost:6969/api/auth/logout/`,
            //     method: 'DELETE',
            //     success: function (data) {
            //         console.log("logout success");
            //         window.location.href = data.redirect;
            //
            //     },
            //     error: function () {
            //         console.log("error");
            //     }
            // });
        });    //logout



    }
});