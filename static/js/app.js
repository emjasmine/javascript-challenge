// from data.js
var tableData = data;

// YOUR CODE HERE

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");


tableData.forEach((item)=>{
    //add a row
    var row = tbody.append("tr");

    //append the date, city, state, country, shape, duration, comments
    row.append("td").text(item.datetime);  
    row.append("td").text(item.city);  
    row.append("td").text(item.state);  
    row.append("td").text(item.country);  
    row.append("td").text(item.shape);  
    row.append("td").text(item.durationMinutes);  
    row.append("td").text(item.comments); 
});

// Select the input element and get the raw HTML node
var inputValue = d3.select("#datetime");

// Function to handle input change
function handleChange(event) {
    // grab the value of the input field
    var inputText = d3.event.target.value;
    //clear the table
    tbody.text("");
    // Get the data for the inputValue      
    var filteredData = tableData.filter(item => item.datetime === inputText);
        //append filtered data to table
    filteredData.forEach((item)=>{
    //add a row
    var row = tbody.append("tr");
   
    //append the date, city, state, country, shape, duration, comments
    row.append("td").text(item.datetime);  
    row.append("td").text(item.city);  
    row.append("td").text(item.state);  
    row.append("td").text(item.country);  
    row.append("td").text(item.shape);  
    row.append("td").text(item.durationMinutes);  
    row.append("td").text(item.comments); 
    });
  };
inputValue.on("change", handleChange);


// //append filtered data to table
// filteredData.forEach((item)=>{
//     //add a row
//     var row = tbody.append("tr");
   
//     //append the date, city, state, country, shape, duration, comments
//     row.append("td").text(item.datetime);  
//     row.append("td").text(item.city);  
//     row.append("td").text(item.state);  
//     row.append("td").text(item.country);  
//     row.append("td").text(item.shape);  
//     row.append("td").text(item.durationMinutes);  
//     row.append("td").text(item.comments); 
//  });
