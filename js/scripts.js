function Pizza(size, toppings, price){

  this.pizzaSize = size;
  this.pizzaToppings = [toppings];
  this.pizzaPrice = [price];

  alert(this.pizzaPrice);


  // alert("size: " + this.pizzaSize);
  // alert("toppings: " + this.pizzaToppings);
  // alert("price: " + this.pizzaPrice);
}
//prototypes store methods to be used by all objects of the same type
Pizza.prototype.addPizzaTotal = function(){
  for (var i = 0; i < pizzaPrice.length; i++)
  {
    this.pizzaPrice += this.pizzaPrice[i];
  }
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

      alert(newPizza.addPizzaTotal());

      // alert(newPrice);


      // $("ul#orderDisplay").show();

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
