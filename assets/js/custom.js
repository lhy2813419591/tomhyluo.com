let img = null
function view() {
    if(!img) {
        img = new Viewer(document.getElementById('weixinLink'));
        img.show();
    }
}