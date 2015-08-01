$(document).ready(function() {
// This command is used to initialize some elements and make them work properly
    $.material.init();
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
    $("[data-toggle=popover]").popover();
    $("#edu").click(function(){
        if(!$("#experience").is(':hidden')){
        hidediv("#experience","left",500);
        var timeoutID = setTimeout(showdiv,750,"#education","left",1250);
        }
        if(!$("#extracurricular").is(':hidden')){
            hidediv("#extracurricular","left",500);
            var timeoutID = setTimeout(showdiv,750,"#education","left",1250);
    }
    });
    $("#exp").click(function(){
        if(!$("#education").is(':hidden')){
        hidediv("#education","left",500);
        var timeoutID = setTimeout(showdiv,750,"#experience","left",1250);
        }
        if(!$("#extracurricular").is(':hidden')){
            hidediv("#extracurricular","left",500);
            var timeoutID = setTimeout(showdiv,750,"#experience","left",1250);
        }
    });
    $("#exc").click(function(){
        if(!$("#education").is(':hidden')){
            hidediv("#education","left",500);
            var timeoutID = setTimeout(showdiv,750,"#extracurricular","left",1250);
        }
        if(!$("#experience").is(':hidden')){
            hidediv("#experience","left",500);
            var timeoutID = setTimeout(showdiv,750,"#extracurricular","left",1250);
        }
        });
});
function showdiv(div,dir,speed){
    $(div).show("slide",{ direction: dir, easing: 'easeOutQuint', duration: speed});
}
function hidediv(div,dir,speed){
    $(div).hide("slide",{ direction: dir, easing: 'easeInQuint', duration: speed});
}
