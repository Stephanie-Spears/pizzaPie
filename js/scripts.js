function Pizza(size, toppings, price, id){
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = price;
  this.pizzaID = id;
}

function PizzaList(newPizza, total){
  this.pizzaList = newPizza;
  this.pizzaListTotal = total;
  alert("function PizzaList: " + this.pizzaList);
}

// function resetPizza(){
// //function to reset pizza each time the button is clicked
// }
// function removePizza(){
// //function to replace the jquery remove() in the front-end?
// }
// function getTotal(){
// //to replace total calculations in main
// return total;
// }
// function createToppingsList(){
// //to dynamically add the checkboxes ... is it better practice to do it this way? or in the html...
// }

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

  this.pizzaPrice = this.pizzaPrice.toFixed(2);
  this.pizzaPrice = "($" + this.pizzaPrice + ")";
  return "<button class='list-group-item'>" + this.pizzaSize + " " + this.pizzaToppings + " pizza " + this.pizzaPrice + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>";
};

PizzaList.prototype.formatOutput = function(){
//add formatting for each pizza output on receipt
  this.pizzaListTotal = this.pizzaListTotal.toFixed(2);
  return this.pizzaList + this.pizzaListTotal;
};



$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $("#readyToOrderSection").toggle();
    $("#showForm").show();

    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      var id = 0;
      var total = 0;
      var size;
      var toppings;
      var price = 0;
      $("#checkoutButton").show();

      var newPizza = new Pizza(size, toppings, price, id);
      var newPizzaList = new PizzaList(newPizza, total);

      toppings = newPizza.getPizzaToppings();
      price = newPizza.getPizzaPrice();
      total += price;
      id = id + 1;

      alert("pizza: " + Object.values(newPizza)); //newPizza is storing an array of objects...newPizza gets all the previous pizzas stored in it--because i'm not clearing it each time i click add new-- i could set up a new var and set it equal to newPizza, and not clear THAT one, and i'll have my array
      alert("newPizzaList: " + Object.values(newPizzaList));



      $(".pizzaList").prepend(newPizza.formatOutput());
      $(".pizzaList button").click(function(){
        // alert(Object.values(newPizza));
        alert(Object.values(newPizza.pizzaPrice));


        $(this).remove();
      });

      $("#showTotalPanel").text("$" + total.toFixed(2));



      $("#checkoutButton").click(function(event){
        event.preventDefault();
        $("#pizzaDetailsForm").hide();
        $("#customerDetailsForm").show();
      });

    });
  });
});
