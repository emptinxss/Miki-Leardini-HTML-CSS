
// carousel words
var words = ["WEB DEVELOPER", "iOS DEVELOPER", "INVESTOR", "STUDENT", "MINIMALIST","TECH ADDICTED"]
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1000);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter = 0;
    }
}

// animation 
$(document).ready(function(){

//scroll up btn show/hide
    $(window).scroll(function(){
        if (this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // scroll up btn slide up
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0});
        //remove scroll behavior
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    //menu icon mobile

    $(".menu-mobile").click(function(){
        $(".navbar .max-width .menu").toggleClass("active");
        $(".menu-mobile i").toggleClass("active");
        
        
    });
    
});