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
function cleanhighlighting(skillclick){//skillclick=true if a skill was clicked, false if experience clicked
    $('.list-group-item').css('border-left','0px solid');
    $('.skill').css('border-left','0px solid');
    $('.skill').css('margin-left','0px');
    if(!skillclick){
        $('.tree').each(function(i){
            if($(this).is(":visible")){
                toggletree($(this).parent().children('label'));
            }
        });
    }
    
}
var iScrollPos = 0;

function scrolldirup() { // up is TRUE
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        iScrollPos = iCurScrollPos;
        return false;
    } else {
       iScrollPos = iCurScrollPos;
       return true;
    }
}
    var curpos =1;
function calculateoffset(){
    // decides the scrolling of the skills section
    var offsetarr = new Array(0,0,0,0,0,0,0);
    offsetarr[0] = $('#education').offset().top;
    offsetarr[1] = offsetarr[0] + $('#education').height()/2;
    offsetarr[2] = offsetarr[0] + $('#education').height();
    offsetarr[3] = $('#experience').offset().top;
    offsetarr[4] = offsetarr[3] + $('#experience').height()/2;
    offsetarr[5] = offsetarr[3] + $('#experience').height();
    offsetarr[6] = $('#extracurricular').offset().top;
    
    var currentpadding = $('#skills').css('padding-top').replace(/[^-\d\.]/g, '');
    var yscroll = $(window).scrollTop();
    //console.log(currentpadding,yscroll, curpos,offsetarr);
    if(curpos==1){ // in position 1
        if(yscroll>offsetarr[1]  && !scrolldirup() ){ // move to position 2
            $('#skills').animate({'padding-top':offsetarr[3]-offsetarr[0]},500); curpos=2;
        }
    }
    if(curpos==2){ //in position 2
        if(yscroll>offsetarr[4] && !scrolldirup() ){ //move to position 3
            $('#skills').animate({'padding-top':offsetarr[6]-offsetarr[0]},500); curpos=3;
        }
         if(yscroll<offsetarr[0] && scrolldirup() ){ // move to position 1
            $('#skills').animate({'padding-top':offsetarr[0]-offsetarr[0]},500); curpos=1;
        }
    }
    if(curpos==3){ // in position 3
        if(yscroll<offsetarr[3] && scrolldirup() ){ // move to position 2
            $('#skills').animate({'padding-top':offsetarr[3]-offsetarr[0]},500); curpos=2;
        }
    }
    
}

$(document).ready(function() {
    //initialize everything
    var radioCur="resu";
    $("#masterrow").hide();
    $("#abourow").hide();
    $("#credrow").hide();
    $("#persrow").hide();
    $("#pdfrrow").hide();
    $("#getirow").hide();
    $("#menubutton").hide();

    //scrolling rules
    $( window ).scroll(function() {
        calculateoffset();
    });

    buttonsizer();
    $( window ).resize(buttonsizer);
    $( window ).resize(calculateoffset);
    //keep skills high
    // $(window).on("resize", function(event){
    //     calculateoffset();
    //     buttonsizer();
    // });
     (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));


    
    $('label.tree-toggler').parent().children('ul.tree').toggle();

    $('label.tree-toggler').click(function () {
        toggletree(this);
    });


    // This command is used to initialize some elements and make them work properly
    $.material.init();
    $("[data-toggle=popover]").popover();

    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('#masterrow').toggleClass('active');
        $('.all').toggleClass('active');
        window.dispatchEvent(new Event('resize'));
        buttonsizer();
    });
    
    //"Learn More" button click
    $("#learnmore").click(function(){
        var curHeight = $('.jumbotron').outerHeight();
        $('.jumbotron').css('height', curHeight);
        $('.tofadeonclick, #menubutton').toggle("fade",200);
        setTimeout(function(){ 
            var jumbo = $('.jumbotron');
            autoHeightAnimate(jumbo,2000);
            var master = $('#masterrow');
//            $("#masterrow").show("blind", 3000);
            $("#masterrow").show("fast",buttonsizer);
        }, 250);
        setTimeout(function(){ 
            buttonsizer();
            autoHeight = $(".jumbotron").css('height', '100%');
            calculateoffset();
        }, 4000);
    });

    // collapsing the resume sections on toggle
    $("#edu").click(function(){
        $(this).toggleClass('glyphicon-minus-sign');
        $(this).toggleClass('glyphicon-plus-sign');
        var tempheight = $('#educationcontent').height();
        if(tempheight==0){
            $('#educationcontent').animate({padding:"+=15px"},0);
            var curHeight = $('#educationcontent').height();
            $('#educationcontent').css('height', 'auto');
            var autoHeight = $('#educationcontent').height(); 
            $('#educationcontent').height(curHeight).animate({height:autoHeight});
        }
        else{
            $('#educationcontent').animate({height:0,padding:"-=15px"});

        }
    });

    $("#exp").click(function(){
        $(this).toggleClass('glyphicon-minus-sign');
        $(this).toggleClass('glyphicon-plus-sign');
        var tempheight = $('#experiencecontent').height();
        if(tempheight==0){
            $('#experiencecontent').animate({padding:"+=15px"},0);
            var curHeight = $('#experiencecontent').height();
            $('#experiencecontent').css('height', 'auto');
            var autoHeight = $('#experiencecontent').height(); 
            $('#experiencecontent').height(curHeight).animate({height:autoHeight});
        }
        else{
            $('#experiencecontent').animate({height:0,padding:"-=15px"});

        }
    });

    $("#exc").click(function(){
        $(this).toggleClass('glyphicon-minus-sign');
        $(this).toggleClass('glyphicon-plus-sign');
        var tempheight = $('#extracurricularcontent').height();
        if(tempheight==0){
            $('#extracurricularcontent').animate({padding:"+=15px"},0);
            var curHeight = $('#extracurricularcontent').height();
            $('#extracurricularcontent').css('height', 'auto');
            var autoHeight = $('#extracurricularcontent').height(); 
            $('#extracurricularcontent').height(curHeight).animate({height:autoHeight});
        }
        else{
            $('#extracurricularcontent').animate({height:0,padding:"-=15px"});

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
        }
        radioCur=radioValue;
    });

    // skill selection
    $(".skillselect").click(function(){
        cleanhighlighting(false);
        var thiselement=$(this);
        setTimeout(function(){
            highlight(thiselement.parent('.list-group-item'));
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

    $(".skill").click(function(){
        cleanhighlighting(true);
        var thiselement=$(this);
        setTimeout(function(){
            highlight(thiselement);
            var skillid =thiselement.attr('id').split(/\s+/);
            highlight($('.'+skillid).parent('.list-group-item'));
        },350);
        globalcolorcounter+=1;
    });
    

});