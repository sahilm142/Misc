//// check off Specific Todos By clicking
//$("li").click(function(){
//    //if li is gray
//    if($(this).css("color") === "rgb(128, 128, 128)"){
//        $(this).css({
//        color: "black",
//        textDecoration: "none"
//    });  
//    }
//    
//    else {
//    $(this).css({
//        color: "gray",
//        textDecoration: "line-through"
//    });  
//    }  
//});

$("ul").on("click","li",function(){
   $(this).toggleClass("completed"); 
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();       //this - li
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //Grabbing new todo text from input
       var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash''></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
   $("input[type='text'").fadeToggle();
});