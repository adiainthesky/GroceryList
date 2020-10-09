 
$(document).ready(function() {
  const groceries = [];
  $("form#form-group").submit(function(event) {
    event.preventDefault();
    groceries.push($("input#item").val());
    groceries.sort();

      
    let capitalGroceries = []
    groceries.forEach(function(item) {
      capitalGroceries.push(item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase());
    });

    
    let string = "";
    capitalGroceries.forEach(function(item){
      string += '<li>' + item + '</li>';
    });

    string = '<ul>' + string + '</ul>';
    console.log(string);
    document.querySelector("#list").innerHTML = string;
  });   
});