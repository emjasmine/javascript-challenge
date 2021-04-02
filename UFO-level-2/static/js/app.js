// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

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

// select the reset button
var resetButton = d3.select("#reset");

//select the filter button
var filterButton = d3.select("#filter");

// Select the input elements
var dateText = d3.select("#date");
var cityText = d3.select("#city");
var stateText = d3.select("#state");
var countryText = d3.select("#country");
var shapeText = d3.select("#shape");

//this function is used when the filter table button is clicked
funtion filterTable() {
    //initialize the filtered Data set
    var filteredData = tableData;

    //grab input values filter
    var dateInput = dateText.property("value").toLowerCase();
    var cityInput = cityText.property("value").toLowerCase();
    var stateInput = stateText.property("value").toLowerCase();
    var countryInput = countryText.property("value").toLowerCase();
    var shapeInput = shapeText.property("value").toLowerCase();

    //Checks if a date was entered and it is null
    if (dateInput === undefined || dateInput === ""){
        filteredData =filteredData;
    }

    //Perform this if dateInput is not null
    else {
        //if the dateInput is in the dataset, filter data by that date
        filteredData = filteredData.filter(item => item.datetime === dateInput)

        //if the dateInput is not in the dataset

    }

    //Checks if a city was entered, and it is null
    if (cityInput === undefined || cityInput === ""){
        filteredData =filteredData;
    }

    //Perform this if cityInput is not null
    else {
        //if the cityInput is in the dataset, filter data by that city
        filteredData = filteredData.filter(item => item.city === cityInput)

        //if the cityInput is not in the dataset
    }

    //Checks if a state was entered, and it is null
    if (stateInput === undefined || stateInput === ""){
        filteredData =filteredData;
    }

    //Perform this if stateInput is not null
    else {
        //if the stateInput is in the dataset, filter data by that state
        filteredData = filteredData.filter(item => item.state === stateInput)

        //if the cityInput is not in the dataset
    }

    //Checks if a country was entered, and it is null
    if (countryInput === undefined || countryInput === ""){
        filteredData =filteredData;
    }

    //Perform this if countryInput is not null
    else {
        //if the countryInput is in the dataset, filter data by that country
        filteredData = filteredData.filter(item => item.country === countryInput)

        //if the countryInput is not in the dataset
    }

    //Checks if a shape was entered, and it is null
    if (shapeInput === undefined || shapeInput === ""){
        filteredData =filteredData;
    }

    //Perform this if shapeInput is not null
    else {
        //if the shapeInput is in the dataset, filter data by that shape
        filteredData = filteredData.filter(item => item.shape === cityInput)

        //if the shapeInput is not in the dataset
    }
    //The data has been filtered based on the user inputs
    //Now clear the table and fill the table using the filtered data
    tbody.text("");

    filteredData.forEach((item)=>{
        //insert new row to table
        var row = tbody.append("tr");

        //append the date, city, state, country, shape, duration, comments from filtered data
        row.append("td").text(item.datetime);  
        row.append("td").text(item.city);  
        row.append("td").text(item.state);  
        row.append("td").text(item.country);  
        row.append("td").text(item.shape);  
        row.append("td").text(item.durationMinutes);  
        row.append("td").text(item.comments); 

    });
};

//This function is used when the reset button is clicked

function resetTable(event){
    //identifies the input
    var resetInput = event.target;

    //clears the table
    tbody.text("");

    //loops through original table data and repopulates the table
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
};

// Activate filter table button
filterButton.on("click", filterTable);

 // Activate reset table button
resetButton.on("click", resetTable);

    

  





