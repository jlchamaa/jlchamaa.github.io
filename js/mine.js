function buttonsizer(){
    var ratio = (($("#buttongroupwidth").width()-30) / $("#buttongroupheight").height());
    console.log("ratio",ratio);
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
          element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
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
    
    buttonsizer();
    $( window ).resize(buttonsizer);



// This command is used to initialize some elements and make them work properly
    $.material.init();
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('.row').toggleClass('active');
        $('.all').toggleClass('active');
    });
    $("[data-toggle=popover]").popover();

    $("#learnmore").click(function(){
        var curHeight = $('.jumbotron').outerHeight();
        $('.jumbotron').css('height', curHeight);
        $('.tofadeonclick, #menubutton').toggle("fade",250);
        
        setTimeout(function(){ 
            var jumbo = $('.jumbotron');
            autoHeightAnimate(jumbo,1000);
            var master = $('#masterrow');
            $("#masterrow").show("blind", 3000 );
            autoHeightAnimate(master,1000);
        }, 250);
        setTimeout(function(){ 
          autoHeight = $(".jumbotron").css('height', '100%');
        }, 2000);


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


});