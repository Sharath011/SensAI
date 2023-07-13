# SensAI
Authentication Flow with Admin and User Roles
This project implements an authentication flow with separate roles for admins and users. It includes features such as admin login, user login, user registration, admin dashboard, and user dashboard. The project utilizes a JWT-based approach for authentication and supports preserving login state on reload.

Requirements
Admin Login:

Implement an admin login page where admins can enter their credentials (username and password) to access the admin dashboard.
Include server-side validation to verify the admin's credentials against stored information in the database.
Once authenticated, redirect the admin to the admin dashboard.
User Login:

Create a user login page where users can enter their credentials (email and password) to access their user dashboard.
Implement authentication logic to validate the user's credentials against the stored information in the database.
Once authenticated, redirect the user to their user dashboard.
Use a JWT-based approach to implement this.
Login state should get preserved on reload.
User Registration:

Implement a registration page for users where they can enter their email address and a secure password.
Store the user's information securely in the database.
Admin Dashboard:

List of users registered.
Ability to delete any user.
(Bonus Level) Ability to create a new invite link to be shared for new registration (usable only once).
User Dashboard:

User basic details such as name, address, profile picture, phone, etc.
Ability to edit details.
(Bonus Level) User Registration with Unique Invite Link:

Users should be able to register only if they have a unique invite link provided by the admin.
If the user comes directly to the registration page and tries to register, show them an error message: "Invalid invite link. Please contact your admin (admin's email address)".
Validate the uniqueness of the invite link and ensure it can only be used once for registration.
(Bonus Level) Deployment:

Deploy the server and client using any free service.
Tech Stack
JavaScript-based framework and library: ReactJS and Express (preferred).
Database: PostgreSQL (preferred).
Setup and Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
Install dependencies:
bash
Copy code
# Install server dependencies
cd server
npm install

# Install client dependencies
cd client
npm install
Configure the database:

Set up a PostgreSQL database and update the configuration in the server .env file.
Run the application:

Start the server:
bash
Copy code
cd server
npm start
Start the client development server:
bash
Copy code
cd client
npm start
Access the application at http://localhost:3000.