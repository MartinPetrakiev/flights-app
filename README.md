# Flights-App--SoftUni

Flights-App is a concept idea implemented in a Single Page Application build with MEAN Stack.
The application main purpose is to help users search avilable flights by origin and destination and check departure/arrive date and time.
The application has admin interface so registered users can record new flights in database or edit and delete existing ones.

# Stack

Database: MongoDB,

Server: Node.js + express

Front-End: Angular [docs](https://angular.io/docs).


# Set up and usage

To start server, from inside the [api dir](https://github.com/MartinPetrakiev/Flights-App--SoftUni/tree/master/server)
Rung following commands in terminal:

**`
npm install
`**

**`
npm start
`**

Server starts on http://localhost:3000/


To start client side view, form inside the [client dir](https://github.com/MartinPetrakiev/Flights-App--SoftUni/tree/master/client)
Rung following commands in terminal:

**`
npm install
`**

**`
npm start
`**

App starts on http://localhost:4200/

**Client**

*In code documentation.*
- There are 3 directories in client/src/app/:
1. `auth` contains all services for the authentication.
2. `components` contains all componets for the different views which specify different routes in the app. 
    Public routes are only `ladning`, `flights` and `user` which has two sub-routes `register` and `log-in`.
    Private route is `admin', which has two sub-routes `create`, `edit-panel`
3. `models` contains interfaces used inside application logic.
 
