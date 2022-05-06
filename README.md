# MySQL Code editor

This project is to create a Front-end SQL playground where we can execute SQL queries and view all the tables and do different SQL queries on them.

## Used framework and plugins

In this project I used React as the front-end framework along with the DATA Grid from Material UI to render all the tables to accompany pagination, Sorting the different rows and many more.

## Website performance.

I originally used the in-built tables and react-pagination to render the tables which were unable to handle the rendering of larger data and took a lot of time. \
So inorder to improve this, I used the Data Grid from Material-UI which boosted the performance.

## Page load time

Tested this site on vaarious online tools seding multiple requests from various servers.\
The website took 615ms and 600kb memory to load the entire pages when 19 requests were made from the Asia region.\
Website used [https://tools.pingdom.com/](https://tools.pingdom.com/)

## Deployed Application link

Deployed this application on Netlify. Here is the link [https://master--rad-arithmetic-b183b1.netlify.app/](https://master--rad-arithmetic-b183b1.netlify.app/)

## Features

The features in this website are:

1. We can write SQL queries on various different tables provided.
2. We can view all the different tables where the data is paginated to be easy on the eyes.
3. The data can be sorted in ascending or descending order from the datagrid.
4. The table entries can be deleted based on the Id.
5. A new data row can be added into various tables.
6. Custom field validations are provided such as, not allowing letters in the PhoneNo field and form submission being failed upon not meeting these requirements.
