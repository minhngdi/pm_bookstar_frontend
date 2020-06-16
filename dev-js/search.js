
$(document).ready(function() {
    let url = window.location.href; // or window.location.href for current url
    if((/string=([^&]+)/.exec(url))) {
        let captured = /string=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let USER_QUERY = captured ? captured : 1;
        console.log(USER_QUERY);
        $('#result-list').empty();
        $.ajax({
            url: `https://lib-server.herokuapp.com/api/search/keyword/${USER_QUERY}`||`http://localhost:6969/api/search/keyword/${USER_QUERY}`,
            method: 'GET',
            success: function (data) {
                if (data.book && data.book.length > 0) {
                    let bookListItem = data.book.map(function (bookItem) {
                        console.log(bookItem);
                        return ` <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
                        <!-- Block2 -->
                        <div class="block2">
                            <div class="block2-img wrap-pic-w of-hidden pos-relative">
                                <img src="uploads/${bookItem.url}" width="270px" height="390px" alt="IMG-PRODUCT">

                                <div class="block2-overlay trans-0-4">

                                    <div class="block2-btn-addcart w-size1 trans-0-4">
                                        <!-- Button -->
                                        <button onclick="window.location.href='bookdetail.html?id=${bookItem.bookid}'" class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="block2-txt p-t-20">
                                <a hrefbookdetail.html?id=${bookItem.bookid}" class="block2-name dis-block m-text6 p-b-5">
                                    ${bookItem.bookname}
                                </a>

                                <span class="block2-price s-text3 p-r-5">
										${bookItem.authorname}
									</span>
                            </div>
                        </div>
                    </div>
					
					`;
                    });
                    $('#result-list').append(bookListItem);
                }
                if (data.book.length === 0) {
                    $('#result-list').append('<h3>No result found</h3>');
                }
            },
            error: function () {
                console.log("error");
            }
        });
    }

    if((/tag=([^&]+)/.exec(url))) {
        let captured = /tag=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let tagname = captured ? captured : 1;
        console.log(tagname);
        $('#result-list').empty();
        $.ajax({
            url: `https://lib-server.herokuapp.com/api/search/tag/${tagname}`||`http://localhost:6969/api/search/tag/${tagname}`,
            method: 'GET',
            success: function (data) {
                if (data.book && data.book.length > 0) {
                    let bookListItem = data.book.map(function (bookItem) {
                        console.log(bookItem);
                        return ` <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
                        <!-- Block2 -->
                        <div class="block2">
                            <div class="block2-img wrap-pic-w of-hidden pos-relative">
                                <img src="uploads/${bookItem.url}" width="270px" height="390px" alt="IMG-PRODUCT">

                                <div class="block2-overlay trans-0-4">

                                    <div class="block2-btn-addcart w-size1 trans-0-4">
                                        <!-- Button -->
                                        <button onclick="window.location.href='bookdetail.html?id=${bookItem.bookid}'" class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="block2-txt p-t-20">
                                <a href="bookdetail.html?id=${bookItem.bookid}" class="block2-name dis-block m-text6 p-b-5">
                                    ${bookItem.bookname}
                                </a>

                                <span class="block2-price s-text3 p-r-5">
										${bookItem.authorname}
									</span>
                            </div>
                        </div>
                    </div>
					
					`;
                    });
                    $('#result-list').append(bookListItem);
                }
                if (data.book.length === 0) {
                    $('#result-list').append('<h3>No result found</h3>');
                }
            },
            error: function () {
                console.log("error");
            }
        });
    }

    $('#search').on('submit', function (e) {
        e.preventDefault();
        USER_QUERY = $('#keyword').val();
        $('#result-list').empty();

        $.ajax({
            url: `https://lib-server.herokuapp.com/api/search/keyword/${USER_QUERY}`||`http://localhost:6969/api/search/keyword/${USER_QUERY}`,
            method: 'GET',
            success: function (data) {
                if(data.book && data.book.length > 0) {
                    let bookListItem = data.book.map(function (bookItem) {
                        return ` <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
                        <!-- Block2 -->
                        <div class="block2">
                            <div class="block2-img wrap-pic-w of-hidden pos-relative">
                                <img src="uploads/${bookItem.url}" width="270px" height="390px" alt="IMG-PRODUCT">

                                <div class="block2-overlay trans-0-4">

                                    <div class="block2-btn-addcart w-size1 trans-0-4">
                                        <!-- Button -->
                                        <button onclick="window.location.href=bookdetail.html?id=${bookItem.bookid}'" class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="block2-txt p-t-20">
                                <a href="bookdetail.html?id=${bookItem.bookid}" class="block2-name dis-block m-text6 p-b-5">
                                    ${bookItem.bookname}
                                </a>

                                <span class="block2-price s-text3 p-r-5">
										${bookItem.authorname}
									</span>
                            </div>
                        </div>
                    </div>
					
					`;
                    });
                    $('#result-list').append(bookListItem);
                }
                    if(data.book.length === 0 ) {
                        $('#result-list').append('<h3>No result found</h3>');
                    }
            },
            error: function () {
                console.log("error");
            }
        });
    });

    $('#nav-search').on('submit', function (e) {
        e.preventDefault();
         USER_QUERY = $('#nav-keyword').val();
        $('#result-list').empty();

        $.ajax({
            url: `https://lib-server.herokuapp.com/api/search/keyword/${USER_QUERY}`||`http://localhost:6969/api/search/keyword/${USER_QUERY}`,
            method: 'GET',
            success: function (data) {
                if(data.book && data.book.length > 0) {
                    let bookListItem = data.book.map(function (bookItem) {
                        return ` <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
                        <!-- Block2 -->
                        <div class="block2">
                            <div class="block2-img wrap-pic-w of-hidden pos-relative">
                                <img src="uploads/${bookItem.url}" width="270px" height="390px" alt="IMG-PRODUCT">

                                <div class="block2-overlay trans-0-4">

                                    <div class="block2-btn-addcart w-size1 trans-0-4">
                                        <!-- Button -->
                                        <button onclick="window.location.href='bookdetail.html?id=${bookItem.bookid}'" class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="block2-txt p-t-20">
                                <a hrefbookdetail.html?id=${bookItem.bookid}" class="block2-name dis-block m-text6 p-b-5">
                                    ${bookItem.bookname}
                                </a>

                                <span class="block2-price s-text3 p-r-5">
										${bookItem.authorname}
									</span>
                            </div>
                        </div>
                    </div>
					
					`;
                    });
                    $('#result-list').append(bookListItem);
                }
                if(data.book.length === 0 ) {
                    $('#result-list').append('<h3>No result found</h3>');
                }
            },
            error: function () {
                console.log("error");
            }
        });
    });

});
