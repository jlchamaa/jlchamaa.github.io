$(document).ready(function() {
    var radioCur="resu";
// This command is used to initialize some elements and make them work properly
    $.material.init();
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('.row').toggleClass('active');
        $('.all').toggleClass('active');
    });
    $("[data-toggle=popover]").popover();

    $("#edu").click(function(){
        var tempheight = $('#education').height();
        if(tempheight==0){
            var curHeight = $('#education').height();
            $('#education').css('height', 'auto');
            var autoHeight = $('#education').height(); 
            $('#education').height(curHeight).animate({height:autoHeight,marginBottom:"+=20px"});
        }
        else{
            $('#education').animate({height:0,marginBottom:"-=20px"});
        }
    });

    $("#exp").click(function(){
        var tempheight = $('#experience').height();
        if(tempheight==0){
            var curHeight = $('#experience').height();
            $('#experience').css('height', 'auto');
            var autoHeight = $('#experience').height(); 
            $('#experience').height(curHeight).animate({height:autoHeight,marginBottom:"+=20px"});
        }
        else{
            $('#experience').animate({height:0,marginBottom:"-=20px"});
        }
    });

    $("#exc").click(function(){
        var tempheight = $('#extracurricular').height();
        if(tempheight==0){
            var curHeight = $('#extracurricular').height();
            $('#extracurricular').css('height', 'auto');
            var autoHeight = $('#extracurricular').height(); 
            $('#extracurricular').height(curHeight).animate({height:autoHeight,marginBottom:"+=20px"});
        }
        else{
            $('#extracurricular').animate({height:0,marginBottom:"-=20px"});
        }
    });
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='optionsRadios']:checked").val();
        if(radioCur!=radioValue){
            console.log("rv: "+radioValue);
            switch(radioValue){
                case "resu":
                    //code;
                    break;
                case "abou":
                case "cred":
                case "pers":
                case "pdfr":
                case "cont":
                    //code;
                    break;

                default:
                    break;
            }
        }
        radioCur=radioValue;
    });


});