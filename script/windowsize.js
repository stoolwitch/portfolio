function resizeForm() {
    var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
    if (width > 1024) {
        assignrandom();
    } else {

    }
}
window.onresize = resizeForm;
resizeForm();