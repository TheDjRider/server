jQuery(function($){$(".leftbutton").hide();$(".rightbutton").on("click",function(){$(".sidebar").animate({height:"hide",opacity:0},150,function(){$(".forums").animate({width:"100%"},400)});$(this).hide();$(".leftbutton").show();$.cookie("sidebar","collapsed",{expires:365});return false});$(".leftbutton").on("click",function(){$(".forums").animate({width:"76%"},400,function(){$(".sidebar").animate({height:"show",opacity:1},150)});$(this).hide();$(".rightbutton").show();$.cookie("sidebar","expanded",{expires:365});return false});if($.cookie("sidebar")=="collapsed"){$(".rightbutton").hide();$(".leftbutton").show();$(".forums").css("width","100%");$(".sidebar").hide()}var $spanel=$("#panel");var offset=$spanel.offset();var stickyTop=offset.top;var windowTop=$(window).scrollTop();function spanel(){windowTop=$(window).scrollTop();return $spanel.css({position:windowTop>stickyTop?"fixed":"absolute"})}spanel();$(window).scroll(spanel);if($(".forums").length<1)$(".toggle-container").hide()});