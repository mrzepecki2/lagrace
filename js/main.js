$(document).ready(function(){
    mobile_menu();
    slider();
    color_box();
    fixed_menu();
    
	$(window).resize(function(){
	
	});	
    window.onscroll = function() {
		fixed_menu();
	};
});

$(window).load(function() {
	 zabiegi_resize();
});

function mobile_menu()
{
    $(".menu-top-mobile-ico").click(function(){
		$("#menu-top-mobile").stop().slideToggle("slow");
	})
    $(".has-child").click(function(){
		$(this).find(".menu-top-2").stop().slideToggle("slow");
	})
}

function slider()
{
    if($('.slider').length>0)
    {
        var mode_s = $(".slider").data("mode");
        mode_s = mode_s.toLowerCase();
        if (mode_s=="fade" || mode_s == "vertical" || mode_s == "horizontal")
        {
            
        }
        else
        {
            mode_s = "fade";
        }
        $('.bxslider').bxSlider({
            mode: mode_s,
            pager: false
        });
    }
}

function color_box()
{
    jQuery('.colorbox-1').colorbox({rel:'gal', maxWidth:'90%', maxHeight:'90%'});
}

function fixed_menu()
{
     menu_wys = parseInt($("main").css("margin-top"));

    if ($(window).scrollTop() > menu_wys)
    {	
        $("#top").addClass("fixed_menu");
    }
    else
    {
        $("#top").removeClass("fixed_menu");
    }
}

function zabiegi_resize()
{
    if($(".zabieg-single").length>0)
    {
        nameH = 0;
        shortH = 0;       
        $(".zabieg-name").each(function(){   
			if($(this).height() > nameH)
            {   
                nameH = $(this).height();
            }
		});
        $(".zabieg-name").each(function(){   
			$(this).css('min-height',nameH);
		});
         $(".zabieg-short").each(function(){   
			if($(this).height() > shortH)
            {   
                shortH = $(this).height();
            }
		});
        $(".zabieg-short").each(function(){   
			$(this).css('min-height',shortH);
		});
    }
}