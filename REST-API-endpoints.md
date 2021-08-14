Base URL: https://localhost:3000/api


<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Endpoint</th>
            <th>Expect</th>
            <th>Authentication Required</th>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>POST</td>
            <td>Registering</td>
            <td>/register</td>
            <td>
                "email",<br>
                "username",<br>
                "password",<br>
                "repeatPassword"<br>
            </td>
            <td>No</td>
        </tr>
            <tr>
            <td>POST</td>
            <td>Login</td>
            <td>/login</td>
            <td>
                "email",<br>
                "password",<br>
            </td>
            <td>No</td>
        </tr>
         </tr>
            <tr>
            <td>POST</td>
            <td>Log Out</td>
            <td>/logout</td>
            <td></td>
            <td>Logged User Req</td>
        </tr>
         </tr>
            <tr>
            <td>GET</td>
            <td>Get all users data</td>
            <td>/users/admin</td>
            <td></td>
            <td>Yes</td>
        </tr>
                 </tr>
            <tr>
            <td>GET</td>
            <td>Get all flights data</td>
            <td>/flights</td>
            <td></td>
            <td>No</td>
        </tr>
        </tr>
            <tr>
            <td>GET</td>
            <td>Get user's flights</td>
            <td>/flights/user/:userId</td>
            <td></td>
            <td>Yes</td>
        </tr>
        </tr>
            <tr>
            <td>GET</td>
            <td>Get user's past flights history</td>
            <td>/flights/user/:userId/past</td>
            <td></td>
            <td>Yes</td>
        </tr>
        </tr>
            <tr>
            <td>GET</td>
            <td>Get user's upcoming flights history</td>
            <td>/flights/user/:userId/upcoming</td>
            <td></td>
            <td>Yes</td>
        </tr>
        </tr>
            <tr>
            <td>GET</td>
            <td>Get flight by ID</td>
            <td>/flights/:flightId</td>
            <td></td>
            <td>Yes</td>
        </tr>
                 </tr>
            <tr>
            <td>GET</td>
            <td>Get all flights upcoming from the current date<br>
            by given origin and destination
            </td>
            <td>/flights/query/:orig/:dest</td>
            <td></td>
            <td>No</td>
        </tr>
                 </tr>
            <tr>
            <td>GET</td>
            <td>Get flight by Flight Number</td>
            <td>/flights/flightnum/:flightNumber</td>
            <td></td>
            <td>Yes</td>
        </tr>
        </tr>
            <tr>
            <td>GET</td>
            <td>Get all distinct flight origins</td>
            <td>/flights/cities/origins</td>
            <td></td>
            <td>No</td>
        </tr>
        </tr>
            <tr>
            <td>PUT</td>
            <td>Add flight to user's history of flights</td>
            <td>/flights/book</td>
            <td>
                "flightId"<br>
                "userId"
            </td>
            <td>No</td>
        </tr>
        </tr>
            <tr>
            <td>POST</td>
            <td>Create new flight in database</td>
            <td>/flights/create</td>
            <td>    
                "origin",<br>
                "destination",<br>
                "flightNumber",<br>
                "depart",<br>
                "arrive",<br>
                "nonstop" (optional)
            </td>
            <td>Yes</td>
        </tr>
        </tr>
            <tr>
            <td>PATCH</td>
            <td>Update existing flight in database</td>
            <td>/flights/:flightId/update</td>
            <td>{Flight Data}</td>
            <td>Yes</td>
        </tr>
                 </tr>
            <tr>
            <td>DELETE</td>
            <td>Delete existing flight in database</td>
            <td>/flights/:flightId/delete</td>
            <td></td>
            <td>Yes</td>
        </tr>
    </tbody>
    
</table>