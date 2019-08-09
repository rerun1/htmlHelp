

$(document).ready(function(){

  var elements = ["p", "h1", "button", "img"];

  elements.forEach(function(element){
    $(element).click(function(){
      $("div.identifyElement").empty();
      $("div.identifyElement").show();
      if (element === "p") {
        $("div.identifyElement").text("That's a paragraph");
      } else if (element === "h1") {
        $("div.identifyElement").text("That's a headline");
      } else if (element === "img") {
        $("div.identifyElement").text("That's an image");
      } else {
        $("div.identifyElement").text("That's a " + element);
      }
    });
  });
  $("button").click(function(){
    $("div#walrus-showing").toggle();
    $("div#walrus-hidden").toggle();
  });

});
