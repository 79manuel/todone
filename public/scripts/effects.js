$(document).ready(function(){
  var flagEat = false;
  $( ".eat" ).click(function() {
    if(flagEat===false){
      $( ".eat" ).animate({zoom: '250%'}, "slow");
      $(".watch, .form-inline, .read-buy-section").hide();
      flagEat = true;
    }
    else if(flagEat===true){
      $( ".eat" ).animate({zoom: '100%'}, "slow");
      $(".watch, .form-inline, .read-buy-section").show("slow");
      flagEat = false;
    }
  });
  var flagWatch = false;
  $( ".watch" ).click(function() {
    if(flagWatch === false) {
    $( ".watch" ).animate({zoom: '250%'}, "slow");
    $(".eat, .form-inline, .read-buy-section").hide();
    flagWatch = true;
    }
    else if(flagWatch===true){
      $( ".watch" ).animate({zoom: '100%'}, "slow");
      $(".eat, .form-inline, .read-buy-section").show("slow");
      flagWatch = false;
    }
  });

  var flagRead = false;
  $( ".read" ).click(function() {
    if(flagRead === false) {
    $(".read" ).animate({zoom: '250%'}, "slow");
    $(".buy, .form-inline, .eat-watch-section").hide();
    flagRead = true;
    }
    else if (flagRead === true) {
      $( ".read" ).animate({zoom: '100%'}, "slow");
      $(".buy, .form-inline, .eat-watch-section").show("slow");
      flagRead = false;

    }
  });

  var flagBuy = false;
  $(".buy" ).click(function() {
    if (flagBuy === false) {
      $( ".buy" ).animate({zoom: '250%'}, "slow");
      $(".read, .form-inline, .eat-watch-section").hide();
      flagBuy = true;
    }
    else if (flagBuy === true){
      $(".buy" ).animate({zoom: '100%'}, "slow");
      $(".read, .form-inline, .eat-watch-section").show("slow");
      flagBuy = false;
    }
  });
});