+
$(document).ready(function() {
// This command is used to initialize some elements and make them work properly
    $.material.init();
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
    $("[data-toggle=popover]").popover();
    var eduheight = $('#education').height();
    var expheight = $('#experience').height();
    var excheight = $('#extracurricular').height();

    $("#edu").click(function(){
        var tempheight = $('#education').height();
        if(tempheight==0){
        $('#education').animate({height:eduheight,marginBottom:"+=20px"});
        }
        else{
            $('#education').animate({height:0,marginBottom:"-=20px"});
        }
    });
    $("#exp").click(function(){
        var tempheight = $('#experience').height();
        if(tempheight==0){
        $('#experience').animate({height:expheight,marginBottom:"+=20px"});
       
        }
        else{
            $('#experience').animate({height:0,marginBottom:"-=20px"});
        }
    });
    $("#exc").click(function(){
        var tempheight = $('#extracurricular').height();
        if(tempheight==0){
        $('#extracurricular').animate({height:excheight,marginBottom:"+=20px"});
        }
        else{
            $('#extracurricular').animate({height:0,marginBottom:"-=20px"});
        }
    });
});