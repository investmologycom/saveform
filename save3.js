$(document).ready(function(){
        $('.auto-save').savy('load');
        $( "#hapus" ).click(function() {
            $('.auto-save').savy('destroy');
        });
    });