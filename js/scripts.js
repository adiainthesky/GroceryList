 
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

    // const capitalGroceries = groceries.map(function(item) {
    //   return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase();
    // });
    
    
    
    $("li").text(capitalGroceries);
  });   
});

// const restLower = items.slice(1,items.length).toLowerCase();
// const capital = firstUpper + restLower;
    // const inputName = $("input#name").val();
    // const firstUpper = inputName.slice(0,1).toUpperCase();
    // const restLower = inputName.slice(1,inputName.length).toLowerCase();
    // const readyName = firstUpper + restLower;



 // works but make a long string of items
// $(document).ready(function() {
//   const groceries = [];
//   $("form#form-group").submit(function(event) {
//     event.preventDefault();
//     groceries.push($("input#item").val());
   
//     console.log(groceries);
    
//     groceries.forEach(function(item) {
     
//       $("li").text(groceries);
      
   
//     });
//   });  
// });
