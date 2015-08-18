$(document).ready(function() {
    var radioCur="resu";
    $("#masterrow").hide();
    $("#author").hide();
    $("#abourow").hide();
    $("#credrow").hide();
    $("#persrow").hide();
    $("#pdfrrow").hide();
    $("#getirow").hide();

// This command is used to initialize some elements and make them work properly
    $.material.init();
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('.row').toggleClass('active');
        $('.all').toggleClass('active');
    });
    $("[data-toggle=popover]").popover();

    $("#learnmore").click(function(){
        var curHeight1 = $('.jumbotron').height();
        $('#jumbospacing').hide();
        $('.jumbotron').css('height', 'auto');
        var autoHeight1 = $('.jumbotron').height(); 
        

        $('#masterrow').css('height','0px');
        var curHeight2 = $('#masterrow').height();
        $('#masterrow').show();
        $('#masterrow').css('height', 'auto');
        var autoHeight2 = $('#masterrow').height(); 

            $('.jumbotron').height(curHeight1).animate({height:autoHeight1});
            $('#masterrow').height(curHeight2).animate({height:autoHeight2});
        
        
        

        $("#learnmore").hide();
        $("#author").show();

    });

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
            var temp="#"+radioCur+"row";
                $(temp).hide();
            var temp="#"+radioValue+"row";
                $(temp).show();
            switch(radioValue){
                case "resu":
                    $("#edu").prop("disabled", false);
                    $("#exc").prop("disabled", false);
                    $("#exp").prop("disabled", false);
                    break;
                case "abou":
                case "cred":
                case "pers":
                case "pdfr":
                case "geti":
                    $("#edu").prop("disabled", true);
                    $("#exc").prop("disabled", true);
                    $("#exp").prop("disabled", true);
                    $('#resurow').hide();
                    //code;
                    break;
                default:
                    break;
            }
        }
        radioCur=radioValue;
    });


});