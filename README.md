# Flights-App--SoftUni

Flights-App is a concept idea implemented in a Single Page Application build with MEAN Stack.
The application main purpose is to help users search avilable flights by origin and destination and check departure/arrive date and time.
The application has:
    - Admin interface with permission to access by one user, who can record new flights in database, edit and delete existing ones.
    - User interface where registered users of the app can track their flight history of past and upcomming flights.

# Stack

Database: MongoDB - [install](https://docs.mongodb.com/manual/installation/), [docs](https://docs.mongodb.com/manual/tutorial/getting-started/),

Server: Node.js + express

Front-End: Angular - [docs](https://angular.io/docs).


# Set up and usage

## Database:

To set up database MongoDB Tools should be installed on the machine. In console run the following command:

**`
mongorestore --db=transportation <path to db files>
`**

Dump files can be found [here](https://github.com/MartinPetrakiev/Flights-App--SoftUni/tree/master/db/transportation)


## Server:

To start server, from inside the [api dir](https://github.com/MartinPetrakiev/Flights-App--SoftUni/tree/master/server).
Run following commands in terminal:

**`
npm install
`**

**`
npm start
`**

Server starts on http://localhost:3000/


## Client:

To start client side view, form inside the [client dir](https://github.com/MartinPetrakiev/Flights-App--SoftUni/tree/master/client).
Run following commands in terminal:

**`
npm install
`**

**`
npm start
`**

App starts on http://localhost:4200/


## API endpoints
[here](https://example.com/)


##
*In code documentation for client.*
- There are 2 directories in client/src/app/:
1. `shared` contains all services and models used between app's components.
2. `components` contains all componets for the different views which specify different routes in the app. 


    - All routes -- `ladning`, `flights`, `admin` (three sub-routes `create`, `edit`, `edit-panel`) and `user` (three sub-routes `register`, `log-in`, `profile`).
    
    ```
    <domain/port>/
                 /flights
                 /admin  --- private
                 /admin/create  --- private
                 /admin/edit-panel  --- private
                 /admin/edit   --- private
                 /user
                 /user/log-in
                 /user/register
                 /user/profile  --- private
    ```
    
    - Public routes are only `ladning`, `flights`.
    - Private routes are `admin`and route `user/profile`.
    - Permission to access `admin` limited only to one admin user (for now manually created in db, for test purpose -- login credentials email: "gosho@mail.com" and password: "asdasd").
   
 
