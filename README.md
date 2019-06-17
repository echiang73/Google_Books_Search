# React.js Google Books Search API

This React-based Google Books Search app allows you search for books by keywords (authors, title, etc) and return the results from the Google Books API. The list of book results provides pertainent information and will allow you click on a link to view the Google Books website for that specific book, click on View button to view a sample preview of that book, as well as click on the can Save button to save the book to review or purchase later (in the saved books page).

## Technical overview
This application utilizes a combination of technologies, called a stack, to build and deploy the application.  Specifically, the app is built with the increasing popular and powerful MERN stack, that’s designed to make the development process smoother. The MERN stack is a JavaScript stack that includes four open-source components: MongoDB, Express.js, React.js, and Node.js that provide an end-to-end "full-stack" framework. React.js is a front-end application that 1) utilizes reusable components that has its own logic and controls making it easy to develop, maintain, troubleshoot; 2) the app uses JavaScript XML (JSX) to easily write and add HTML in React; 3)instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM; 4) therefore, it determines the most effective way to make these changes and then applies only those changes to the real DOM. This guarantees a minimum update time to the real DOM, providing higher performance and a cleaner user experience all around. Express.js and Node.js are used to build a back-end server that will connect to a MongoDB, a NoSQL (non-relational) document-oriented database to store the information.

The app is deployed live on Heroku using mLabDB, but you can clone or download the code from GitHub to run the server codes on your localhost. In the terminal command, just make sure you change the directory to the root folder and first run `npm install` to load the required node modules from the package.json, then sure your MongoDB is running by typing in `mongod`, and finally type `npm start` to run React on localhost:3000.

## Built with or topics covered
* HTML5
* CSS3
* JavaScript
* MERN stack: 
    * MongoDB
    * Express.js
    * ReactJS
        * Create React App
        * JavaScript XML (JSX)
        * ReactDOM
    * Node.js
* Node Package Manager (npm)
* Heroku deployment
* mLab MongoDB - cloud database service that hosts MongoDB databases on Heroku

## npm packages: 
* [express] (https://www.npmjs.com/package/express) - fast, unopinionated, minimalist web framework for node.
* [mongoose] (https://www.npmjs.com/package/mongoose) - a MongoDB object modeling tool designed to work in an asynchronous environment.
* [axios] (https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js.
* [react] (https://www.npmjs.com/package/react) - a JavaScript library for creating user interfaces.
* [react-router-dom] (https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router.
* [react-scripts] (https://www.npmjs.com/package/react-scripts) - package includes scripts and configuration used by Create React App.


## Author
* Eddie Chiang
* Click on the deployed app!
https://react-books-search.herokuapp.com/

* Click on the GitHub link to view code!
https://github.com/echiang73/Google_Books_Search


## Here is the preview of the web application:

![](client/src/assets/images/webpreview.gif "gif")
