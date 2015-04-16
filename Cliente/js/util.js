function getProducts() {
    clearResponse();
    var request = $.ajax({
        url: "http://localhost:3000/products.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {

        $('#response').val(JSON.stringify(msg));
        $('#status').val(textStatus + ":" + e.status)
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });
}

function clearDropDown(){

  $('.clearDropDownProducts').remove();
}

function getTransactionProduct(){
    clearResponse();
    var request = $.ajax({
        url: "http://localhost:3000/transaction.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {
        if(msg.retorno == false)
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(JSON.stringify(msg));
        $('#status').val(textStatus + ":" + e.status)
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });
}

function clearResponse(){
    $('#response').val("");
    $('#status').val("");
}

function dropdownShowProducts() {
    clearResponse();
    clearDropDown();
    var request = $.ajax({
        url: "http://localhost:3000/products.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {
        if(msg.retorno == false)
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        var dropdownProducts = "";
        for (var i = 0; i < msg.length; i++)
        {
            dropdownProducts += "<li class='clearDropDownProducts'><a href='#' onclick='showProduct("+msg[i].id+");'>" + msg[i].name +" </a></li>";
        }
        $('#dropdownProducts').append(dropdownProducts);
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });
}

function dropdownTransactionProduct() {
    clearResponse();
    clearDropDown();
    var request = $.ajax({
        url: "http://localhost:3000/products.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {
        if(msg.retorno == false)
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        var dropdownFirstTransactionProduct = "";
        var first = "first";
        for (var i = 0; i < msg.length; i++)
        {
            //dropdownFirstTransactionProduct += "<li class='clearDropDownProducts'><a href='#' onclick='setCreateTransaction("+msg[i].id+", "+true+")'>" + msg[i].name +" </a></li>";
            dropdownFirstTransactionProduct += "<option class='clearDropDownProducts' value='"+msg[i].id+"'>" + msg[i].name +" </option>";
        }
        $('.dropdownFirstTransactionProduct').append(dropdownFirstTransactionProduct);

        var dropdownsecondTransactionProduct = "";
        var second = "second";
        for (var i = 0; i < msg.length; i++){
                //dropdownsecondTransactionProduct += "<li class='clearDropDownProducts'><a href='#' onclick='setCreateTransaction("+msg[i].id+","+false+")'>" + msg[i].name +" </a></li>";
            dropdownsecondTransactionProduct += "<option class='clearDropDownProducts' value='"+msg[i].id+"'>" + msg[i].name +" </option>";
            }

        $('.dropdownsecondTransactionProduct').append(dropdownsecondTransactionProduct);
        setCreateTransaction();
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });
}

function setCreateTransaction(){
    $('.dropdownFirstTransactionProduct').on('change', function() {
        $('#transaction_product_req_id').val(this.value);
    });
    $('.dropdownsecondTransactionProduct').on('change', function() {
        $('#transaction_product_offered_id').val(this.value);
    });
   /* if(transaction == true)
    {
        $('#transaction_product_req_id').val(id);
    }else if(transaction == false)
    {
        $('#transaction_product_offered_id').val(id);
    }*/
}



function dropdownDeleteProducts() {
    clearResponse();
    clearDropDown();
    var request = $.ajax({
        url: "http://localhost:3000/products.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {
        if(msg.retorno == false)
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        var deleteProduct = "";
        for (var i = 0; i < msg.length; i++)
        {
            deleteProduct += "<li class='clearDropDownProducts'><a href='#' onclick='deleteProduct("+msg[i].id+");'>" + msg[i].name +" </a></li>";
        }
        $('#dropdownDeleteProduct').append(deleteProduct);
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });
}

function dropdownEditProducts() {
    clearResponse();
    clearDropDown();
    var request = $.ajax({
        url: "http://localhost:3000/products.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {
        if(msg.retorno == false)
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        var editProduct = "";
        for (var i = 0; i < msg.length; i++)
        {
            editProduct += "<li class='clearDropDownProducts'><a href='#' onclick='editProduct("+msg[i].id+");'>" + msg[i].name +" </a></li>";
        }
        $('.dropdownEditProducts').append(editProduct);
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });
}

function showProduct(idProduct) {

    var request = $.ajax({
        url: "http://localhost:3000/products/" + idProduct + ".json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {
        if(msg.retorno == false)
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(JSON.stringify(msg));
        $('#status').val(textStatus + ":" + e.status)
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });

}

function editProduct(idProduct) {

    var request = $.ajax({
        url: "http://localhost:3000/products/" + idProduct + "/edit.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {
        if(msg.retorno == false)
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#edit_id_product').val(msg.id);
        $('.edit_product_name').val(msg.name);
        $('.edit_product_description').val(msg.description);
        $('.edit_product_state').val(msg.state);
    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });

}

function deleteProduct(idProduct) {

    $("#dialog-confirm").html("Are your sure?");

    // Define the Dialog and its properties.
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Modal",
        height: 250,
        width: 400,
        buttons: {
            "Yes": function () {
                var request = $.ajax({
                    url: "http://localhost:3000/products/" + idProduct + ".json",
                    headers: {
                        "authtoken": localStorage["authtoken"]
                    },
                    method: "DELETE"
                });

                request.done(function( msg, textStatus,e ) {
                    if(msg.retorno == false)
                    {
                        $('.tab-pane').removeClass("active");
                        $('#login').addClass("active");
                        $('#user_user').val("");
                        $('#user_password').val("");
                    }
                    $('#response').val(JSON.stringify(msg));
                    $('#status').val(textStatus + ":" + e.status)
                });

                request.fail(function( e, textStatus) {
                    if(e.status == "401")
                    {
                        $('.tab-pane').removeClass("active");
                        $('#login').addClass("active");
                        $('#user_user').val("");
                        $('#user_password').val("");
                        localStorage.removeItem("authtoken");
                    }
                    $('#response').val(e.statusText);
                    $('#status').val(textStatus + ":" + e.status)
                });
                $(this).dialog('close');

            },
            "No": function () {
                $(this).dialog('close');

            }
        }
    });


}

function logOut(){
    var request = $.ajax({
        url: "http://localhost:3000/user/logout.json",
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        method: "GET"
    });

    request.done(function( msg, textStatus,e ) {

            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
        $('#response').val(JSON.stringify(msg));
        $('#status').val(textStatus + ":" + e.status)
        localStorage.removeItem("authtoken");

    });

    request.fail(function( e, textStatus ) {
        if(e.status == "401")
        {
            $('.tab-pane').removeClass("active");
            $('#login').addClass("active");
            $('#user_user').val("");
            $('#user_password').val("");
            localStorage.removeItem("authtoken");
        }
        $('#response').val(e.statusText);
        $('#status').val(textStatus + ":" + e.status)
    });
}

$(document).ready(function(){


    $.ajax({
        url: 'http://localhost:3000/user/auth.json',
        type: 'get',
        headers: {
            "authtoken": localStorage["authtoken"]
        },

        success: function(data, textStatus, e) {
            if(data.retorno == false)
            {
                $('.tab-pane').removeClass("active");
                $('#login').addClass("active");
                $('#user_user').val("");
                $('#user_password').val("");
            }else {
                $('.tab-pane').removeClass("active");
                $('#menu').addClass("active");
                $('#user_user').val("");
                $('#user_password').val("");

                $('.userLogin').append(data.data["userName"] + '<span class="caret"></span>');
            }


        },
        error : function(e, textStatus) {
            if(e.status == "401")
            {
                $('.tab-pane').removeClass("active");
                $('#login').addClass("active");
                $('#user_user').val("");
                $('#user_password').val("");
                localStorage.removeItem("authtoken");
            }
            $('#response').val(e.statusText);
            $('#status').val(textStatus + ":" + e.status)
        }
    });


$('.btn-login').on('click',function(){
    var form = $('#product');
    $.ajax({
        url: 'http://localhost:3000/user/authenticate.json',
        type: 'post',
        headers: {
            "authtoken": localStorage["authtoken"]
        },
        data: $('.form-signin').serialize(),
        success: function(data, textStatus, e) {


                $('.tab-pane').removeClass("active");
                $('#menu').addClass("active");
                $('#response').val(JSON.stringify(" authtoken: " + "" +  " \' " + data.token + " \' "));
                $('#status').val(textStatus + ":" + e.status);
                $('.userLogin').append(data["userName"]+ ' <span class="caret"> </span>');
                localStorage["authtoken"] = data.token;


        },
        error : function(e, textStatus) {

            $('#response').val(textStatus + " : User or password invalid");
            $('#status').val(textStatus + ":" + e.status)
        }
    });

});
$("#btnCreateProduct").on('click',function() {
    $('#product_description').removeClass("required");
    $('#product_state').removeClass("required");
    $('#product_name').removeClass("required");

    if ($('#product_name').val() == "" || $('#product_description').val() == "" || $('#product_state').val() == "") {
        if ($('#product_name').val() == "") {

            $('#product_name').addClass("required").attr('placeholder','Required...');

        }
        if ($('#product_description').val() == "") {
            $('#product_description').addClass("required").attr('placeholder','Required...');

        }
        if ($('#product_state').val() == "") {

            $('#product_state').addClass("required").attr('placeholder','Required...');

        }

    }else {


    var form = $('#product');
        $.ajax({
        url: 'http://localhost:3000/products.json',
        type: 'post',
            headers: {
                "authtoken": localStorage["authtoken"]
            },
        data  : form.serialize(),
        success: function(data, textStatus, e) {
            if(data.retorno == false)
            {
                $('.tab-pane').removeClass("active");
                $('#login').addClass("active");
                $('#user_user').val("");
                $('#user_password').val("");
            }
            $('#response').val(JSON.stringify(data));
            $('#status').val(textStatus + ":" + e.status)
        },
        error : function(e, textStatus) {
            if(e.status == "401")
            {
                $('.tab-pane').removeClass("active");
                $('#login').addClass("active");
                $('#user_user').val("");
                $('#user_password').val("");
                localStorage.removeItem("authtoken");
            }
            $('#response').val(e.statusText);
            $('#status').val(textStatus + ":" + e.status)
        }
    });
    }
});
    $("#btnCreateTransaction").on('click',function() {
        $('.dropdownFirstTransactionProduct').removeClass("required");
        $('.dropdownSecondTransactionProduct').removeClass("required");
        if($('.dropdownFirstTransactionProduct').val() == "first" || $('.dropdownSecondTransactionProduct').val() == "second")
        {
            if($('.dropdownFirstTransactionProduct').val() == "first")
            {
                $('.dropdownFirstTransactionProduct').addClass("required");
            }
            if($('.dropdownSecondTransactionProduct').val() == "second")
            {
                $('.dropdownSecondTransactionProduct').addClass("required");
            }
        }else {


        $.ajax({
            url: 'http://localhost:3000/transaction.json',
            type: 'post',
            headers: {
                "authtoken": localStorage["authtoken"]
            },
            data  : $('#form-create-transaction').serialize(),
            success: function(data, textStatus, e) {
                if(data.retorno == false)
                {
                    $('.tab-pane').removeClass("active");
                    $('#login').addClass("active");
                    $('#user_user').val("");
                    $('#user_password').val("");
                }
                $('#response').val(JSON.stringify(data));
                $('#status').val(textStatus + ":" + e.status)
            },
            error : function(e, textStatus) {
                if(e.status == "401")
                {
                    $('.tab-pane').removeClass("active");
                    $('#login').addClass("active");
                    $('#user_user').val("");
                    $('#user_password').val("");
                    localStorage.removeItem("authtoken");
                }
                $('#response').val(e.statusText);
                $('#status').val(textStatus + ":" + e.status)
            }
        });
        }
    });

    $("#btnUpdateProduct").on('click',function() {
        $('#edit_product_description').removeClass("required");
        $('#edit_product_state').removeClass("required");
        $('#edit_product_name').removeClass("required");

        if ($('#edit_product_name').val() == "" || $('#edit_product_description').val() == "" || $('#edit_product_state').val() == "") {
            if ($('#edit_product_name').val() == "") {

                $('#edit_product_name').addClass("required").attr('placeholder','Required...');

            }
            if ($('#edit_product_description').val() == "") {
                $('#edit_product_description').addClass("required").attr('placeholder','Required...');

            }
            if ($('#edit_product_state').val() == "") {

                $('#edit_product_state').addClass("required").attr('placeholder','Required...');

            }

        }else {
            var id = $('#edit_id_product').val();
            $.ajax({
                url: 'http://localhost:3000/products/' + id + ".json",
                type: 'put',
                headers: {
                    "authtoken": localStorage["authtoken"]
                },
                data: $('#form_edit_product').serialize(),
                success: function (data, textStatus, e) {
                    if (data.retorno == false) {
                        $('.tab-pane').removeClass("active");
                        $('#login').addClass("active");
                        $('#user_user').val("");
                        $('#user_password').val("");
                    }
                    $('#response').val(JSON.stringify(data));
                    $('#status').val(textStatus + ":" + e.status)
                },
                error: function (e, textStatus) {
                    if (e.status == "401") {
                        $('.tab-pane').removeClass("active");
                        $('#login').addClass("active");
                        $('#user_user').val("");
                        $('#user_password').val("");
                        localStorage.removeItem("authtoken");
                    }
                    $('#response').val(e.statusText);
                    $('#status').val(textStatus + ":" + e.status)
                }
            });
        }
    });
});