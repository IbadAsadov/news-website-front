 $(document).ready(function(){
    $('.topButton').click(function(){
        $('html').animate({'scrollTop': 0})
    })
    



    let boxHeight = $('.left-menu').css('height').slice(0,-2);
    let headerHeight = $('.left-menu-header').css('height').slice(0,-2);
    let footerHeight = $('.left-menu-footer').css('height').slice(0,-2);
    console.log(boxHeight,headerHeight,footerHeight);
    boxHeight = Number(boxHeight);
    footerHeight = Number(footerHeight);
    headerHeight = Number(headerHeight);
    let mainheight = boxHeight - (headerHeight + footerHeight);
    $('.left-menu-main').css('height',mainheight);
    

    $(window).resize(function(){
        boxHeight = $('.left-menu').css('height').slice(0,-2);
        headerHeight = $('.left-menu-header').css('height').slice(0,-2);
        footerHeight = $('.left-menu-footer').css('height').slice(0,-2);
        boxHeight = Number(boxHeight);
        footerHeight = Number(footerHeight);
        headerHeight = Number(headerHeight);
        mainheight = boxHeight - (headerHeight + footerHeight);
        $('.left-menu-main').css('height',mainheight);

    })

    $('.menu-bars-icon').click(function(e){
        
        $('.left-menu').animate({
            left:'0px',
            
        })
        $('.left-menu').css({position:'fixed'})
        e.preventDefault();
        
    })

    

    $('.menu-close').click(function(e){
        $('.left-menu').animate({
            left:'-100%',
            
        })
        e.preventDefault();
    });

    $('.menu-seacrh-icon').click(function(e){
        $('.search-box').fadeIn();
        
        e.preventDefault();
    });
    $('.search-box-close i').click(function(e){
        $('.search-box').fadeOut();
        $('.search-text').val(null)

        
        e.preventDefault();
    })
    


    
    let prevCoor = 0;
    
    $(window).scroll(function(){
        
        if(prevCoor < $(window).scrollTop()){
            $('.header-2').css({
                'top':'-70px'
            })
            
        }
        
        else if(prevCoor > $(window).scrollTop()){
            $('.header-2').css({
                'top':'-1px'
            })
        }
        
        
        prevCoor = $(window).scrollTop();

        
        if ($(this).scrollTop() > 1000) {
            $(".top-button").fadeIn(500);
        }
        else{
            $(".top-button").fadeOut(500);
        }
    
        

    })
        
    
    


    $( ".search-text" ).focus(function() {
        $('.search-form').css({
            'border-bottom-color':'#97CAF1'
        })
        
    });
    $( ".search-text" ).focusout(function() {
        $('.search-form').css({
            'border-bottom-color':'white'
        })
        
    });
    let searchText = "";
    $('.search-text').keyup(function(e){
        searchText = $(this).val();
        console.log(searchText);
        
        if(searchText.length === 0){
            $('.box-clear').css({
                'display':'none'
            })
        }
        else{
            $('.box-clear').css({
                'display':'inline'
            })

        }
        if(searchText != 0 && e.keyCode == 13){
            $('my-search-form').submit();
        }
        
    })

    $('.box-clear').click(function(e){
        
        $('.search-text').val(null);
        e.preventDefault();
        
    })

    $("#scroller").simplyScroll({
        speed: 1
    });


});