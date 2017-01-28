function Pizza(size, toppings, price){
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = price;
}
//prototypes store methods to be used by all objects of the same type
Pizza.prototype.pizzaDetails = function() { return this.pizzaSize + "<br>" + this.pizzaToppings + "<br>" + this.pizzaPrice;
};

Pizza.prototype.eachPizzaPrice = function(){

  for (var i = 0; i < this.pizzaToppings.length; i++)
  {
    this.pizzaPrice +=2;
  }
  if (this.pizzaSize === 'Small'){
    this.pizzaPrice += 5;
  } else if (this.pizzaSize === "Medium"){
    this.pizzaPrice += 10;
  } else {
    this.pizzaPrice += 20;
  }
  return this.pizzaPrice;
};


$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    var totalPrice = 0;
    $("#readyToOrderSection").toggle();
    $("#showForm").show();
    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      var size= $("#pizzaDetailsForm input[type='radio']:checked").val();
      var toppings = [];
      var price = 0;

      $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
        toppings.push($(this).val());
      });

      var newPizza = new Pizza(size, toppings, price);
      price = newPizza.eachPizzaPrice();
      totalPrice += price;

      $(".eachPizzaDisplay").append("<li><span class='displayPizza'>" +  newPizza.pizzaDetails() + "</span></li>");
      $(".eachPizzaDisplay").append("<h2><span class='displayTotal'>Total: " +  totalPrice + "</span></h2>");
      $(".eachPizzaDisplay").replace("<h2><span class='displayTotal'>" +  totalPrice + "</span></h2>");

      $("#checkoutButton").show();
      $("#checkoutButton").click(function(event){
        event.preventDefault();
        $("#pizzaDetailsForm").hide();
        $("#customerDetailsForm").show();
      });
    });
  });
});

// alert(newPizza.pizzaSize);
// alert(newPizza.pizzaToppings);
// alert(newPizza.pizzaPrice);
