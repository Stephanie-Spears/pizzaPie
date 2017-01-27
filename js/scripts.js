function Pizza(size, toppings, price){

  this.pizzaSize = size;
  this.pizzaToppings = [toppings];
  this.pizzaPrice = [price];
  alert("size: " + this.pizzaSize);
  alert("toppings: " + this.pizzaToppings);
  alert("price: " + this.pizzaPrice);
}



$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $("#readyToOrderSection").toggle();
    $("#showForm").show();
    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      var size= $("#pizzaDetailsForm input[type='radio']:checked").val();

      var toppings = [];

      $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
        toppings.push($(this).val());
      });
      var price = [];

      for (var i = 0; i < toppings.length; i++)
      {
        price.push(2);
        if (size === 'Small')
        {
          price.push(5);
        }
        else if (size === "Medium"){
          price.push(10);
        }
        else if (size === "Large") {
          price.push(20);
        }
      }

      var newPizza = new Pizza(size, toppings, price);

    });
  });
});
