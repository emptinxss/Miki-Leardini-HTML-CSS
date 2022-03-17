
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

// menu navbar
$(document).ready(function(){
    $(".menu-mobile").click(function(){
        $(".navbar .menu").toggleClass("active");
        $('.menu-mobile i').toggleClass("active");
    });
    
});