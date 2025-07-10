# HTTP5222 Assignment 1 - Business API

HTTP5222 Assignment 1 - Business API

Project Description:
This is a Node.js and Express web application that connects to a MongoDB Atlas database and provides:

Admin forms to add, list, and delete Products, Locations, and Services.

Public API endpoints that return JSON data for use in other applications.

MongoDB Collections:

Products: name, price, description, image

Locations: name, address, phone

Services: name, description

Admin Routes:

/admin/products – Add, list, and delete products

/admin/locations – Add, list, and delete locations

/admin/services – Add, list, and delete services

API Endpoints:

GET /api/products – Returns all products in JSON format

GET /api/locations – Returns all locations in JSON format

GET /api/services – Returns all services in JSON format

Deployed Link:
Deployment on Render was attempted but is not fully working.
Check the deployed site here:
https://business-api-t9cq.onrender.com

How to Run Locally:

Clone this repository:
git clone https://github.com/omair3/business-api.git
cd business-api

Install the dependencies:
npm install

copy the  .env file in the root of project folder

Start the server:
npm start or node app.js
Open your browser and visit these routes:
http://localhost:3000/ – Homepage
http://localhost:3000/api/products – View all products
http://localhost:3000/admin/products – Manage products

Note:
If the Render deployment does not work, please use the .env file provided on Blackboard to run the app locally.

