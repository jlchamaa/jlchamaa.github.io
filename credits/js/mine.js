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


var currentslide=2;
function swiper(from,to){
    if(from==1 && to==2){
        console.log('1->2')
        $('#menusidebar').toggleClass('activemenu');
        $('#contentrow').toggleClass('activemenu'); 
        $('#slide1').children().css({ fill: "#303030" });
        $('#slide2').children().css({ fill: "#009688" });  
        currentslide=2;  
        return;
    }
    if(from==2 && to==3){
        console.log('2->3')
        $('#skills').toggleClass('activeskills');
        $('#exprow').toggleClass('activeskills');
        $('#slide2').children().css({ fill: "#303030" });
        $('#slide3').children().css({ fill: "#009688" });   
        currentslide=3;  
        return; 
    }
    if(from==3 && to==2){
        console.log('3->2')
        $('#skills').toggleClass('activeskills');
        $('#exprow').toggleClass('activeskills');
        $('#slide3').children().css({ fill: "#303030" });
        $('#slide2').children().css({ fill: "#009688" });  
        currentslide=2;   
        return;  
    }
    if(from==2 && to==1){
        console.log('2->1')
        $('#menusidebar').toggleClass('activemenu');
        $('#contentrow').toggleClass('activemenu'); 
        $('#slide2').children().css({ fill: "#303030" });
        $('#slide1').children().css({ fill: "#009688" }); 
        currentslide=1;  
        return;
    }
}


$(document).ready(function() {
    buttonsizer();
    $( window ).resize(buttonsizer);
    $('#slide3').hide();
     (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));



    // This command is used to initialize some elements and make them work properly
    $.material.init();
    $("[data-toggle=popover]").popover();

    // passing swipes
    $('#masterrow').on("swiperight", function (e) {
        if(currentslide==2){ //centered, going left
            swiper(2,1);
            console.log('Current Slide',currentslide);
            return;
        }
        if(currentslide==3){ // right, going center
            swiper(3,2);   
            console.log('Current Slide',currentslide);
            return;  
        }
    });
    $('#masterrow').on("swipeleft", function (e) {
        if(currentslide==1){ //left, going center
            swiper(1,2);   
            console.log('Current Slide',currentslide);
            return;
        }
        if(currentslide==2 && !$('#slide3').is(':hidden')){ //centered, going right
            swiper(2,3);    
            console.log('Current Slide',currentslide);
            return; 
        }
    });
    $('#slide1').click(function(){
        if(currentslide==3){
            swiper(3,2);
        }
        if(currentslide==2){
            swiper(2,1);
        }
    });
    $('#slide2').click(function(){
        if(currentslide==3){
            swiper(3,2);
        }
        if(currentslide==1){
            swiper(1,2);
        }
    });
    $('#slide3').click(function(){
        if(currentslide==1){
            swiper(1,2);
        }
        if(currentslide==2){
            swiper(2,3);
        }
    });
    



    // sidebar radio features
    $("a[data-toggle='pill']").click(function(){
        console.log('pill click');
        setTimeout(function(){
            var radioValue;
            radioValue = $("#skill-panel").children('.nav').children('.active').attr('id');    
            console.log(radioValue);
            if(radioValue=='resu'){
               window.location = "../resume";
            }
            if(radioValue=='port'){
               window.location = "../portfolio";
            }
            if(radioValue=='pdfr'){
               window.location = "../pdfresume";
            }
            if(radioValue=='abou'){
               window.location = "../about";
            }     
        });
    });

    // skill selection
    $(".skillselect").click(function(){
        cleanhighlighting(false);
        var thiselement=$(this);
        setTimeout(function(){
            highlight(thiselement.parent('.list-group-item'));
            thiselement.css('background-color','#3F51B5');
            var classList =thiselement.attr('class').split(/\s+/);
            classList.splice(0,2);
            $.each(classList, function(index, item){
                highlight($("#"+item));
                if($("#"+item).parent().is(":hidden")){
                    toggletree($("#"+item).parent('.tree').parent().children('.tree-toggler'));
                }
            });
                

        },350);
    });

});