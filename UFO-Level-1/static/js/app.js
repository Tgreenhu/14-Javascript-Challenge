// Save our data from data.js into a variable 
let tableData = data;

// Save the table head & body from HTML doc into a variable
let table = d3.select('table');
let tbody = d3.select('tbody')

// Function to build my tables
function tableBuilder(){
    // loop through data to input info into table
    data.forEach(item => {
        // create new row for each data item
        let row = tbody.append('tr');
        // Add each item in every dictionary object
        row.append('td').text(item.datetime);
        row.append('td').text(item.city);
        row.append('td').text(item.state);
        row.append('td').text(item.country);
        row.append('td').text(item.shape);
        row.append('td').text(item.durationMinutes);
        row.append('td').text(item.comments);})};

// Use table building function to show all data
tableBuilder(tableData);

// Save input form & button into variables
let form = d3.select('#datetime');
// Just added to try to copy 3.9 Class Activity
// let form = d3.select('.form-group');
let button = d3.select('#filter-btn');

// Define the event I want to occur
button.on('click', processText);

// Function to create new table for matching date's data
function processText(){
    // Remove previous data from the table
    tbody.html("")
    // save the user inputted value
    let inputValue = form.property('value');
    // test to make sure input value is being recorded
    console.log(inputValue)
    // filter data that only matches the date the user inputted
    let newData = tableData.filter(item => item.datetime === inputValue);
    // Select the rows and input each data point that matches the user's date
    tbody.selectAll('tr').data(newData).enter().append('tr').html(function(item) {
        return `<td>${item.datetime}</td>
        <td>${item.city}</td>
        <td>${item.state}</td>
        <td>${item.country}</td>
        <td>${item.shape}</td>
        <td>${item.durationMinutes}</td>
        <td>${item.comments}</td>`})};