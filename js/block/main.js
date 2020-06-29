jQuery(document).ready(function(){
  "use script";
  //burger btn
  var burger = $("#burgerBtn");
  burger.on("click", function(event){
    event.preventDefault();
    $(this).find("span").toggleClass("burger__open");
  });
});