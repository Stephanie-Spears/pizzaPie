

$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $("#readyToOrderSection").toggle();

    $("#showForm").show();

    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      var size= $("#pizzaDetailsForm input[type='radio']:checked").val();
      alert(size);
      var toppings = $("#pizzaDetailsForm input[type='check-box']:checked").val();
      alert(toppings);
    });
  });
});
