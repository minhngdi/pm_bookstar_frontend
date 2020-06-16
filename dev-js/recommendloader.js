$(document).ready(function() {

    $.ajax({
        url: 'https://lib-server.herokuapp.com/api/recommend'||'http://localhost:6969/api/recommend',

        method: 'GET',
        success: function (data) {
            if (data.book[0]) {
                $('#recommendImage1').attr("src", "uploads/" + `${data.book[0].url}`);
                $('#recommendName1').html(`${data.book[0].bookname}`);
                $('.recommendDetail1').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[0].bookid}`;
                });
                $('#recommendRating1').html(` RATING:${data.book[0].avg}/5`);
            }

            if (data.book[1]) {
                $('#recommendImage2').attr("src", "uploads/" + `${data.book[1].url}`);
                $('#recommendName2').html(`${data.book[1].bookname}`);
                $('.recommendDetail2').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[1].bookid}`;
                });
                $('#recommendRating2').html(` RATING:${data.book[1].avg}/5`);
            }

            if (data.book[2]) {
                $('#recommendImage3').attr("src", "uploads/" + `${data.book[2].url}`);
                $('#recommendName3').html(`${data.book[2].bookname}`);
                $('.recommendDetail3').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[2].bookid}`;
                });
                $('#recommendRating3').html(` RATING:${data.book[2].avg}/5`);
            }

            if (data.book[3]) {
                $('#recommendImage4').attr("src", "uploads/" + `${data.book[3].url}`);
                $('#recommendName4').html(`${data.book[3].bookname}`);
                $('.recommendDetail4').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[3].bookid}`;
                });
                $('#recommendRating4').html(` RATING:${data.book[3].avg}/5`);
            }

            if (data.book[4]) {
                $('#recommendImage5').attr("src", "uploads/" + `${data.book[4].url}`);
                $('#recommendName5').html(`${data.book[4].bookname}`);
                $('.recommendDetail5').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[4].bookid}`;
                });
                $('#recommendRating5').html(` RATING:${data.book[4].avg}/5`);
            }

            if (data.book[5]) {
                $('#recommendImage6').attr("src", "uploads/" + `${data.book[5].url}`);
                $('#recommendName6').html(`${data.book[5].bookname}`);
                $('.recommendDetail6').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[5].bookid}`;
                });
                $('#recommendRating6').html(` RATING:${data.book[5].avg}/5`);
            }

            if (data.book[6]) {

                $('#recommendImage7').attr("src", "uploads/" + `${data.book[6].url}`);
                $('#recommendName7').html(`${data.book[6].bookname}`);
                $('.recommendDetail7').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[6].bookid}`;
                });
                $('#recommendRating7').html(` RATING:${data.book[6].avg}/5`);
            }

            if (data.book[7]) {
                $('#recommendImage8').attr("src", "uploads/" + `${data.book[7].url}`);
                $('#recommendName8').html(`${data.book[7].bookname}`);
                $('.recommendDetail8').click(function () {
                    window.location.href = `bookdetail.html?id=${data.book[7].bookid}`;
                });
                $('#recommendRating8').html(` RATING:${data.book[7].avg}/5`);
            }
        },
        error: function () {
            console.log("error");
        }
    });
});