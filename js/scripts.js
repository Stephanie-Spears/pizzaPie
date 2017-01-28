function Pizza(size, toppings, price){
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = price;
}
//prototypes store methods to be used by all objects of the same type
Pizza.prototype.pizzaDetails = function() { return this.pizzaSize + "<br>" + this.pizzaToppings + "<br>" + this.pizzaPrice;
};

Pizza.prototype.eachPizzaPrice = function(){
  alert(this.pizzaToppings);
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

// Pizza.prototype.totalPizzaPrice = function(){
//
// }



$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $("#readyToOrderSection").toggle();
    $("#showForm").show();
    $("#orderPizzaButton").click(function(event){
      event.preventDefault(); //do i need prevent default here
      var size= $("#pizzaDetailsForm input[type='radio']:checked").val();
      var toppings = [];
      var price = 0;
      $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
        toppings.push($(this).val());
        // price += 2;
      });
      // if (size === 'Small'){
      //   price += 5;
      // } else if (size === "Medium"){
      //   price += 10;
      // } else {
      //   price += 20;
      // }
      var newPizza = new Pizza(size, toppings, price);
      price = newPizza.eachPizzaPrice();
      alert(price);
      $(".eachPizzaDisplay").append("<li><span class='displayPizza'>" +  newPizza.pizzaDetails() + "</span></li>");


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
