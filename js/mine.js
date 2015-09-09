function buttonsizer(){
    var ratio = (($("#buttongroupwidth").width()-30) / $("#buttongroupheight").height());
    //console.log("ratio",ratio);
    if(ratio>(6.857)){
        // port too wide, match height
        var scale=$("#buttongroupheight").height()/70;     
    }
    else{
        // port too tall, match width
        var scale=($("#buttongroupwidth").width()-30)/480;  

    }
        $( ".btn.btn-fab" ).css( "margin", 10*scale); 
        $( ".btn.btn-fab" ).css( "padding",15*scale);  
        $( ".btn.btn-fab" ).css( "width", 60*scale); 
        $( ".btn.btn-fab" ).css( "height", 60*scale);
        $( ".btn.btn-fab" ).css( "font-size", 30*scale);
    }

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
    var curHeight = element.height(), // Get Default Height
    autoHeight = element.css('height', 'auto').outerHeight(); // Get Auto Height
    element.outerHeight(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight },{duration: parseInt(time), easing:'easeOutQuad'}); // Animate to Auto Height
}
var globalcolorcounter=0;
var topset=500;
var colorpalette=['#F44336', '#E91E63', '#9C27B0', '#3F51B5','#2196F3','#FFC107','#FF5722'];

function highlight(element){
    var newcol= ('5px solid '+colorpalette[globalcolorcounter%7]);
    $(element).css('border-left', newcol);
    $(element).css('margin-left', '-5px');
}
function toggletree(element){ // needs to be passed elements of class .tree-toggler
    $(element).parent().children('ul.tree').toggle(300);
    $(element).children('span').toggleClass('glyphicon-triangle-bottom');
    $(element).children('span').toggleClass('glyphicon-triangle-right');
}
function cleanhighlighting(){
    $('.skillselect').css('border-left','0px solid');
    $('.skill').css('border-left','0px solid');
    $('.skill').css('margin-left','0px');
    $('.tree').each(function(i){
        if($(this).is(":visible")){
            toggletree($(this).parent().children('label'));
        }
    });
}
function calculatetopset(){
    topset = $('#skills').offset().top;
}


$(document).ready(function() {
    var radioCur="resu";
    $("#masterrow").hide();
    $("#abourow").hide();
    $("#credrow").hide();
    $("#persrow").hide();
    $("#pdfrrow").hide();
    $("#getirow").hide();
    $("#menubutton").hide();
    /*
    calculatetopset();
    $( window ).scroll(function() {

        if($('#learnmore').is(":visible")==false){
            calculatetopset();
            console.log("topset= ",topset);
            console.log("scrollTop= ",$(document).scrollTop());
            
            if($(document).scrollTop()+15>topset){
                
                 $('#skills').css('padding-top',($(document).scrollTop()+15-topset));
                // $('#skills').css('top', '0px');

                // $('#skills').css('left', leftset); 
            
                //console.log($('#skills').offset().left); 
            }
            
        }
        
    });
*/

    buttonsizer();
    $( window ).resize(buttonsizer);
    //keep skills high
    $(window).on("resize", function(event){
      calculatetopset();

    });
    


    
    $('label.tree-toggler').parent().children('ul.tree').toggle();

    $('label.tree-toggler').click(function () {
        toggletree(this);
    });


    // This command is used to initialize some elements and make them work properly
    $.material.init();
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('#masterrow').toggleClass('active');
        $('.all').toggleClass('active');
        window.dispatchEvent(new Event('resize'));
        buttonsizer();
    });
    $("[data-toggle=popover]").popover();

    //"Learn More" button click
    $("#learnmore").click(function(){
        var curHeight = $('.jumbotron').outerHeight();
        $('.jumbotron').css('height', curHeight);
        $('.tofadeonclick, #menubutton').toggle("fade",200);
        
        setTimeout(function(){ 
            var jumbo = $('.jumbotron');
            autoHeightAnimate(jumbo,2000);
            var master = $('#masterrow');
            $("#masterrow").show("blind", 3000 );
            //autoHeightAnimate(master,3000);
        }, 250)
;        setTimeout(function(){ 
          autoHeight = $(".jumbotron").css('height', '100%');
          calculatetopset();
        }, 4000);
    });

    // collapsing the resume sections on toggle
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

    // sidebar radio features
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='optionsRadios']:checked").val();
        if(radioCur!=radioValue){
            var temp="#"+radioCur+"row";
                $(temp).hide();
            var temp="#"+radioValue+"row";
                $(temp).show();
            switch(radioValue){
                case "resu":
                    $('#quote').text("\"One man's 'magic' is another man's engineering.\"");
                    $('#author').text("- Robert Heinlein");
                    $("#edu").prop("disabled", false);
                    $("#exc").prop("disabled", false);
                    $("#exp").prop("disabled", false);
                    break;
                case "abou":
                    $('#quote').text("\"One man's 'magic' is another man's engineering.\"");
                    $('#author').text("- Robert Heinlein");
                    $("#edu").prop("disabled", true);
                    $("#exc").prop("disabled", true);
                    $("#exp").prop("disabled", true);    
                    break;
                case "cred":
                    $('#quote').text("\"One man's 'magic' is another man's engineering.\"");
                    $('#author').text("- Robert Heinlein");
                    $("#edu").prop("disabled", true);
                    $("#exc").prop("disabled", true);
                    $("#exp").prop("disabled", true);
                    break;
                case "pers":
                    $('#quote').text("\"One man's 'magic' is another man's engineering.\"");
                    $('#author').text("- Robert Heinlein");
                    $("#edu").prop("disabled", true);
                    $("#exc").prop("disabled", true);
                    $("#exp").prop("disabled", true);
                    break;
                case "pdfr":
                    $('#quote').text("\"Innovation distinguishes between a leader and a follower.\"");
                    $('#author').text("- Steve Jobs");
                    $("#edu").prop("disabled", true);
                    $("#exc").prop("disabled", true);
                    $("#exp").prop("disabled", true);
                    break;
                case "geti":
                    $('#quote').text("\"One man's 'magic' is another man's engineering.\"");
                    $('#author').text("- Robert Heinlein");
                    $("#edu").prop("disabled", true);
                    $("#exc").prop("disabled", true);
                    $("#exp").prop("disabled", true);
                    break;
                default:
                    break;
            }
        }
        radioCur=radioValue;
    });

    // skill selection
    $(".skillselect").click(function(){
        cleanhighlighting();
        var thiselement=$(this);
        setTimeout(function(){
            highlight(thiselement);
            var classList =thiselement.attr('class').split(/\s+/);
            classList.splice(0,2);
            $.each(classList, function(index, item){
                highlight($("#"+item));
                if($("#"+item).parent().is(":hidden")){
                    toggletree($("#"+item).parent('.tree').parent().children('.tree-toggler'));
                }
            });
                

        },350);
        globalcolorcounter+=1;
    });
    

});