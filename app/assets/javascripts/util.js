$(document).ready(function(){
$("#btnCreateProduct").on('click',function() {
    var form = $('#form_crete_product');
        $.ajax({
        url: 'products',
        type: 'post',
        data  : form.serialize(),
        success: function(data) {
            var pruebaDatos = data;
            alert(data);
        },
        error : function(err, req) {
            alert("Your browser broke!");
        }
    });

});
});