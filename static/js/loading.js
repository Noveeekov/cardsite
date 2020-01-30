function onReady (callBack) {
    "use strict";

    setTimeout(function() {
        document.querySelector('.window-load').style.display = 'none';
    }, 1000);    
}

document.addEventListener('DOMContentLoaded', onReady);