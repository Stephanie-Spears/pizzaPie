function Pizza(size, toppings, price){

  this.pizzaSize = size;
  this.pizzaToppings = [toppings];
  this.pizzaPrice = [price];

}
//prototypes store methods to be used by all objects of the same type
Pizza.prototype.pizzaDetails = function() { return this.pizzaSize + "<br>" + this.pizzaToppings + "<br>" + this.pizzaPrice;
};

Pizza.prototype.totalPizzaPrice = function(){
  return this.pizzaPrice;
};

$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $("#readyToOrderSection").toggle();
    $("#showForm").show();
    $("#orderPizzaButton").click(function(event){
      event.preventDefault(); //do i need prevent default here
      var size= $("#pizzaDetailsForm input[type='radio']:checked").val();
      var toppings = [];
      var price = [];
      $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
        toppings.push($(this).val());
        price.push(2);
      });
      if (size === 'Small'){
        price.push(5);
      } else if (size === "Medium"){
        price.push(10);
      } else {
        price.push(20);
      }
      var newPizza = new Pizza(size, toppings, price);

      var sum = newPizza.totalPizzaPrice();
      alert(sum);

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
