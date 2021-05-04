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

![Screen Shot 2021-05-03 at 10 11 31 PM](https://user-images.githubusercontent.com/23372412/116953933-87307280-ac5c-11eb-846a-28d50702fd73.png)
![Screen Shot 2021-05-03 at 10 12 16 PM](https://user-images.githubusercontent.com/23372412/116953967-a0392380-ac5c-11eb-8d66-128cc4582de6.png)
