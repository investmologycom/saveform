function urlencodeFormData(fd) {
    var s = '';
    function encode(s) { return encodeURIComponent(s).replace(/%20/g,'+'); }
    for (var pair of fd.entries()) {
        if(typeof pair[1]=='string') {
            s += (s?'&':'') + encode(pair[0])+'='+encode(pair[1]);
        }
    }
    return s;
}

setInterval(function() {
    var form = document.getElementById('my-form-id');
    var request = new XMLHttpRequest();
    request.open(form.method, form.action);
    request.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    request.send(urlencodeFormData(new FormData(form)));
}, 10000);