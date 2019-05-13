// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO Sightings data from data.js
console.log(tableData);

// Use d3 to create a data table with
// Date, City, State, Country, Shape, Duration and comment:
function renderTable(tableData) {
    //clean-up already loded data table before render new table
    tbody.html("");

    tableData.forEach((UFOdata) => {
        var row = tbody.append("tr");
        Object.entries(UFOdata).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

renderTable(tableData);


// ============== Setup Filter Functions ==============

// Get a reference to the Search button
var search = d3.select("#search");

//define a function for filtering data table
search.on("click", function() {

    // prevent page from refereshing 
    d3.event.preventDefault();

// Get references to each filter index element:
var dateInput = d3.select("#datetime").property("value").trim().toLowerCase();
var cityInput = d3.select("#city").property("value").trim().toLowerCase();
var stateInput = d3.select("#state").property("value").trim().toLowerCase();
var countryInput = d3.select("#country").property("value").trim().toLowerCase();
var shapeInput = d3.select("#shape").property("value").trim().toLowerCase();

// Set filteredData based on each index filter:
var filteredData = tableData.filter(result => {
    var filterbyDate = result.datetime === dateInput || ! dateInput;
    var filterbyCity = result.city === cityInput || ! cityInput;
    var filterbyState = result.state === stateInput || ! stateInput;
    var filterbyCountry = result.country === countryInput || ! countryInput;
    var filterbyShape = result.shape === shapeInput || ! shapeInput;
    return filterbyDate && filterbyCity && filterbyState && filterbyCountry && filterbyShape;
});

renderTable(filteredData);
});

// Define Reset function:
    // Get a reference to the Reset button
var reset = d3.select("#reset");
reset.on("click", function() {
    dateInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    countryInput.value = "";
    shapeInput.value = "";
})