function Pizza(){
  this.pizzaSize = "";
  this.pizzaToppings = [];
  this.pizzaPrice = 0;
  this.clearPizza = function(myPizza){
    this.pizzaSize = "";
    this.pizzaToppings = [];
    this.pizzaPrice = 0;
  };
  // this.changePizzaID = function(){
  //
  // };
  // this.getToppings = function(pizzaToppings){
  //   this.pizzaToppings = pizzaToppings;
  // };
  // this.getSize = function(pizzaSize){
  //   this.pizzaSize = pizzaSize;
  // };
}

// Pizza.prototype.getToppings = function(){
//   var toppings = [];
//   var formatToppings = "";
//   $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
//     toppings.push($(this).val());
//   });
//   for (var i = 0; i < toppings.length; i++)
//   {
//     formatToppings = "<li>" + toppings[i] + "</li>";
//     alert(formatToppings);
//   }
//   return formatToppings;
// };

Pizza.prototype.getPizzaPrice = function(){
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
  var toppingsString = "";
  var formattedOutput= "";

  for (var i = 0; i < this.pizzaToppings.length; i++)
  {
    toppingsString += "<li>" + this.pizzaToppings[i] + "</li>";
  }

  toppingsString.replace(",", "");
  toppingsString = "<ul>" + toppingsString + "</ul>";

  formattedOutput = "<button class='btn btn-default btn-lg dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>" + this.pizzaSize + " Pizza " + "<span class='caret'></span></button><ul class='dropdown-menu'><li class='dropdown-header><a href='#'>" + " Size " + "</a></li><li class='size'></li><li role='separator' class='divider'></li><li class='dropdown-header'><a href='#'>" + " Toppings "  + "</a></li><li class='toppings'></li><li role='separator' class='divider'></li><li class='dropdown-header'><a href='#'>" + " Price " + "</a></li><li class='price'></li></ul></div>";



        $(".size").html("<ul>" + this.pizzaSize + "</ul>"); $(".price").html("<ul>" + this.pizzaPrice + "</ul>"); $(".toppings").html(toppingsString);


return formattedOutput;

};


$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $(this).hide();
    $("#showForm").show();
    var total = 0;
    $("#orderPizzaButton").click(function(event){
      event.preventDefault();
      var myPizza = new Pizza();
      $("#customerOrder").show();
      myPizza.getPizzaPrice();

      $(".pizzaList").prepend(myPizza.formatOutput());

      // $(".pizzaList").click(function(event){
      //   $(".pizzaDetails").toggle();
      //
      // });

      // $(".size").html("<ul>" + myPizza.pizzaSize + "</ul>");
      //
      // $(".price").html("<ul>" + myPizza.pizzaPrice + "</ul>"); $(".toppings").html("<ul>" + myPizza.toppings + "</ul>");
      //



      // $( "ul" ).click().find( "li" ).toggle();
      // $(".pizzaList button").click(function(event){
      //   myPizza.clearPizza();
      //   $(event.target).remove();
      //   $("#showTotal").text("$" + total.toFixed(2));
      //   alert(Object.values(myPizza));
      // });


      // alert(Object.values(myPizza));

      total += myPizza.pizzaPrice;

      $("div.panel-body span").html(total.toFixed(2));
      $("#checkoutButton").click(function(event){
        event.preventDefault();
        $("#showForm").hide();
        $("#customerDetailsForm").show();
      });
    });
  });
});
