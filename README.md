Project Name: Task Management System.
Tech I am using :- Nodejs ,ExpressJs, Mongoose, PassportJs, bcrypt, Passport-local 

Steps:
step 1: clone this repository on your pc by typing these  " https://github.com/soheb21/ChainTech_Test git clone ./" on your vs code terminal
step 2: After cloneing now type "npm install" in vs code terminal

step 3: create .env file and provide all field names for these project i have provide 3 field
example:{
MONGO_URL="mongodb://127.0.0.1:27017/ChainTech_Test"
PORT=8000
SESSION_SECRET_KEY="@testing1234"
}
step 4: now type "npm start" in vs code terminal it will start the project on localhost 

Testing:
for Testing these project please use poastman or related software for testing API.
For eg: open Postman create a new request like post request and register the user
like: http://localhost:8000/api/v1/auth/register and provide email and password
then login
like: http://localhost:8000/api/v1/auth/login and provide email and password
After registration
now user can create ,read,update and delete the task
like: http://localhost:8000/api/v1/task {make sure you set the request according to your need like POST,GET,PATCH,DELETE before calling any API)
if user want to update or delete the task then make sure user provide task id.
like: http://localhost:8000/api/v1/task/65b247402942a2baa0d7dass   {make sure you set the request according to your need like PATCH,DELETE before your any API)

Security :
I have use Passport libaray for Authentication in our project and bcrypt for password encryption so, the user doesn't need to worry about his personal information

