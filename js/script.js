(function() {
    var searchForm = document.querySelector('.search-form');
    searchForm.onclick = function(evt) {
       evt.target.children[0].style.display = evt.target.children[0].style.display !== 'block' ? 'block' : 'none';
    };

    var userAccount = document.querySelector('.user-account');
    userAccount.onclick = function (evt) {
        evt.target.children[0].style.display = evt.target.children[0].style.display !== 'block' ? 'block' : 'none';
    };

    var userCart = document.querySelector('.user-cart');
    userCart.onclick = function(evt) {
        evt.target.children[0].style.display = evt.target.children[0].style.display !== 'block' ? 'block' : 'none';
    };

    var indexModalShow = document.querySelector('.map button');
    if (indexModalShow) {
        indexModalShow.onclick = function() {
            document.querySelector('.index .modal-window').style.display = 'block';
        };
    }

    var indexModalClose = document.querySelector('.index .modal-window .close');
    if (indexModalClose) {
        indexModalClose.onclick = function () {
            document.querySelector('.index .modal-window').style.display = 'none';
        };
    }

})();