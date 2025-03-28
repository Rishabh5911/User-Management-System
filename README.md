User Management System (Reqres API)
A simple User Management System built using React (Vite) + Tailwind CSS, integrating with the Reqres API to handle authentication, user listing, and CRUD operations.

📌 Features

✅ User Authentication (Login with email & password)
✅ User List with Pagination
✅ Edit User Details
✅ Delete Users
✅ React Router for Navigation
✅ Axios for API Calls

Installation & Setup
1️. Clone the Repository
git clone https://github.com/Rishabh5911/User-Management-System.git
 
2. Install Dependencies
npm install

3. Run the Project
npm run dev

Authentication :
Use the following credentials to log in:
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

API Endpoints Used :
1. Login (POST) : POST https://reqres.in/api/login
2. Get Users (GET) : GET https://reqres.in/api/users?page=1
3. Update User (PUT) : PUT https://reqres.in/api/users/{id}
4. Delete User (DELETE) : DELETE https://reqres.in/api/users/{id}

Tech Stack :

Frontend: React (Vite) 
Styling: Tailwind CSS 
State Management: React Hooks
API Handling: Axios
Routing: React Router

