function Pizza(){
  this.pizzaSize = "";
  this.pizzaToppings = [];
  this.pizzaPrice = 0;
}

Pizza.prototype.getPizzaPrice = function(total){
  var toppings = [];
  $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
    toppings.push($(this).val());
  });
  this.pizzaToppings = toppings;
  this.pizzaSize = $("#pizzaDetailsForm input[type='radio']:checked").val();
  for (var i = 0; i < this.pizzaToppings.length; i++)
  {
    this.pizzaPrice +=2.50;
  }
  if (this.pizzaSize === 'Small'){
    this.pizzaPrice += 5;
  } else if (this.pizzaSize === 'Medium'){
    this.pizzaPrice += 10;
  } else if (this.pizzaSize === 'Large') {
    this.pizzaPrice += 20;
  }

  return this.pizzaPrice;
};

Pizza.prototype.formatOutput = function() {
  return "<button type='click' class='list-group-item'>" +  this.pizzaSize + " " + this.pizzaToppings + " pizza " + "($" + this.pizzaPrice.toFixed(2) + ")<span class='glyphicon glyphicon-heart-empty' aria-hidden='true'></span></button>";
};


$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $(this).remove();
    $("#showForm").show();
    var total = 0;
    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      var myPizza = null;
      myPizza = new Pizza();
      $("#customerOrder").show();
      $("#checkoutButton").show();
      $("#removePizzaButton").show();
      // myPizza.getPizzaToppings();
      myPizza.getPizzaPrice(total);
      $(".pizzaList").prepend(myPizza.formatOutput());
      total += myPizza.pizzaPrice;

      $("#showTotal").text("$" + total.toFixed(2));
      $("#checkoutButton").click(function(event){
        event.preventDefault();
        $("#showForm").hide();
        $("#customerDetailsForm").show();
      });
    });
  });
});
