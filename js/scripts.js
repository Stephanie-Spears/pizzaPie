function Pizza(){
  this.pizzaSize = "";
  this.pizzaToppings = [];
  this.pizzaPrice = 0;

}

function PizzaList(){
  this.pizzaList = [];
  this.pizzaListTotal = 0;

}

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

PizzaList.prototype.calculateTotalPrice = function(){
  var totalPrice = 0;
  for (var i=0; i< this.pizzaList.length; i++){

    totalPrice += this.pizzaList[i].pizzaPrice;
  }
  this.pizzaListTotal = totalPrice;
  return this.PizzaListTotal;
};

Pizza.prototype.formatOutput = function() {
  return "<button class='list-group-item'>" +  this.pizzaSize + " " + this.pizzaToppings + " pizza " + "($" + this.pizzaPrice.toFixed(2) + ")<span class='glyphicon glyphicon-heart-empty' aria-hidden='true'></span></button>";
};


$(document).ready(function(){
  var myPizzaList = new PizzaList();
  $("#readyToOrderButton").click(function(){
    $(this).remove();
    $("#showForm").show();

    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      var myPizza = new Pizza();
      $("#customerOrder").show();
      $("#checkoutButton").show();

      myPizza.getPizzaToppings();
      myPizza.getPizzaPrice();
      $(".pizzaList").prepend(myPizza.formatOutput());

      myPizzaList.pizzaList.push(myPizza);
      // alert(Object.values(myPizzaList));
      myPizzaList.calculateTotalPrice();
      $("#showTotal").text("$" + myPizzaList.pizzaListTotal.toFixed(2));
      $("#checkoutButton").click(function(event){
        event.preventDefault();
        $("#showForm").hide();
        $("#customerDetailsForm").show();
      });
    });
  });
});
