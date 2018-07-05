
if (typeof jQuery == 'undefined') {  
    console.log("jQuery is not loaded");  
    //or
    alert("jQuery is loaded");  
} else {
    console.log("jQuery is not loaded");
     alert("jQuery is not loaded"); 
}

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});