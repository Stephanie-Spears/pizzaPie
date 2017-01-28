function Pizza(size, toppings, price){
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = price;

}
//prototypes store methods to be used by all objects of the same type

Pizza.prototype.getPizzaToppings = function (){
  var toppings = [];
  $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
    toppings.push($(this).val());
  });
  this.pizzaToppings = toppings;
  return this.pizzaToppings;
};

Pizza.prototype.getPizzaPrice = function(){
  this.pizzaSize = $("#pizzaDetailsForm input[type='radio']:checked").val();
  for (var i = 0; i < this.pizzaToppings.length; i++)
  {
    this.pizzaPrice +=2;
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
  this.pizzaPrice = "($" + this.pizzaPrice + ".00)";
  return "<li class='list-group-item' id='pizzaList'>" + this.pizzaSize + " " + this.pizzaToppings + " pizza " + this.pizzaPrice + "</li>";
};


$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $("#readyToOrderSection").toggle();
    $("#showForm").show();
    var total = 0;
    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      $("#checkoutButton").show();
      var size;
      var toppings;
      var price = 0;

      var newPizza = new Pizza(size, toppings, price);
      toppings = newPizza.getPizzaToppings();
      price = newPizza.getPizzaPrice();
      total += price;

      $(".getPizzaDisplay").prepend("<button class='list-group-item'>" + newPizza.formatOutput() + "</button>");

      $("getPizzaDisplay").append("<button>($" + total + ".00)</button>");



      $("#checkoutButton").click(function(event){
        event.preventDefault();
        $("#pizzaDetailsForm").hide();
        $("#customerDetailsForm").show();
      });

    });
  });
});
