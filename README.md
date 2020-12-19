# 14-Javascript-Challenge

In this assignment, we were tasked with taking a base html page and adding in a dynamic table that will show all of the data provided to us, as well as create filtered tables based on the user's input.

First, using the D3 library in JavaScript I created a function that will:
    - Loop through the dataset.
    - Create a a new table row for each column.
    - Append the data that correlates with each row in the dataset.

To filter our data, I created an event that will trigger a new function when the user both types in a date and clicks Enter.  This function:
    - Clear the previous table.
    - Grab the property from the user's input.
    - Tests to find a matching date.
    - Once it has found this match, construct a new table from the data that matches the input date.