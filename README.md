#MERN Task Management App

#A full-stack task management application built with MongoDB, Express, React, and Node.js.

#Features include user authentication, role-based access, CRUD operations for tasks, API success/error handling, and responsive UI.




#Technologies Used

    Frontend: Next.js,CSS, HTML, 
    
    Backend: Node.js, Express.js
    
    Database: MongoDB
    
    Authentication: JWT-based login & role-based authorization
    
    Styling:  Material-UI 
    
    Realtime: Flash notifications for API responses



#Features

     1. Authentication & Authorization
      
      2. Register and login users
      
     3. Role-based access: user vs admin
      
     4. JWT token authentication stored in localStorage
      
     5. Protected routes (client-side & server-side)

#Task Management (CRUD)

      Create: Add tasks with title & description
      
      Read: Fetch all tasks for logged-in user
      
      Update: Edit existing tasks
      
      Delete: Remove tasks
      
      Tasks associated with the authenticated user

#API Handling

     1. Axios/fetch API calls to backend
      
     2. Handles success & error responses
      
     3. Inline or toast notifications for feedback




#Best Practices Implemented
      
      1. JWT authentication with middleware
      
      2.  Role-based access control
      
      3. Client-side and server-side protected routes
      
      4. API success/error handling




#How to run

Task-management 
        **  use your own credentials --> 1. ATLAS_URL --> your url,  2. JWT_SECRET --> your secret
        1. cb backend
            * npm install
            * node server.js
        2. cd frontend 
             * npm install
             * npm run dev     
    





