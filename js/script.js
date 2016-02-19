(function() {

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