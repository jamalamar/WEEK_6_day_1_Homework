# EXPRESS, NODE, and MIDDLEWARE

## Main Assignment
-   Fork and clone this repo.
-   This repo has nothing but a readme file please create a server with express and npm install these packages along with what you need for an express server `morgan` and `compression`.

-   In the root of your application create two folders `customers` and `products`. In each folder create two files `models.js` and `router.js` with their corresponding logic.
	1. Create an array of products and an array of customers, each item in these array should be an object with at least four properties that define it, and each array should have four items.  Place these arrays in their corresponding `model.js` file 
    2.  Create routes for each corresponding model for Create, Get, Update, and Delete using a `router.js` file.
    3.  Create each corresponding view in a views folder using either `pug` of `ejs` for each route if its needed (delete routes will not need a seperate view).
-   Apply all the nesecary middleware to the project with the following use cases:
    1. Morgan specify a log file for morgan to store the logged information.
    2. Compress each request
-   Make sure to stick to the MVC folder structure we have defined and after each step is completed please commit with a discriptive commit message

### Extras

1. Research Cross Orogin Resource Sharing on Google. Use the npm cors package as middleware and send a request from a differant port. First produce a CORS error and then make sure your app can comunicate, keeping in mind that you do not want anybody to connect to your server but only the address where you specify.
