# Codveda Level 1 – Task 2

## Simple REST API with Node.js and Express

A beginner-friendly REST API developed as part of the **Codveda Technology Full-Stack Development Internship – Level 1**.

This project demonstrates the fundamentals of backend development using **Node.js** and **Express.js**, including CRUD operations, RESTful API routes, JSON request handling, HTTP status codes, and basic error handling.

---

## 📌 Project Overview

The API provides endpoints for managing users.

Each user contains:

* `id`
* `name`
* `email`

The API supports the following operations:

* Create a new user
* Retrieve all users
* Retrieve a specific user by ID
* Update an existing user
* Delete a user
* Handle requests for users that do not exist

---

## 🛠️ Technologies Used

| Technology | Purpose                                 |
| ---------- | --------------------------------------- |
| Node.js    | JavaScript runtime                      |
| Express.js | Web framework for building the REST API |
| JavaScript | Backend programming language            |
| Postman    | API testing                             |
| Git        | Version control                         |
| GitHub     | Source code repository                  |

---

## 📂 Project Structure

```text
codveda-rest-api/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone 
```

Navigate into the project directory:

```bash
cd codveda-rest-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node server.js
```

The server will start at:

```text
http://localhost:3000
```

You should see:

```text
Server is running on http://localhost:3000
```

---

## 🔗 API Endpoints

### 1. Get Welcome Message

**GET**

```text
GET /
```

Response:

```text
hello
```

---

### 2. Get All Users

**GET**

```text
GET /api/users
```

Example response:

```json
[
  {
    "id": 1,
    "name": "Dania",
    "email": "dania@example.com"
  },
  {
    "id": 2,
    "name": "Sara",
    "email": "sara@example.com"
  }
]
```

---

### 3. Get User by ID

**GET**

```text
GET /api/users/:id
```

Example:

```text
GET /api/users/1
```

Response:

```json
{
  "id": 1,
  "name": "Dania",
  "email": "dania@example.com"
}
```

If the user does not exist:

```text
GET /api/users/999
```

Response:

```json
{
  "error": "User not found"
}
```

HTTP Status:

```text
404 Not Found
```

---

### 4. Create a New User

**POST**

```text
POST /api/users
```

Request body:

```json
{
  "name": "Ahmad",
  "email": "ahmad@example.com"
}
```

Example response:

```json
{
  "id": 3,
  "name": "Ahmad",
  "email": "ahmad@example.com"
}
```

HTTP Status:

```text
201 Created
```

---

### 5. Update a User

**PUT**

```text
PUT /api/users/:id
```

Example:

```text
PUT /api/users/3
```

Request body:

```json
{
  "name": "Ahmad Ali",
  "email": "ahmadali@example.com"
}
```

Example response:

```json
{
  "id": 3,
  "name": "Ahmad Ali",
  "email": "ahmadali@example.com"
}
```

HTTP Status:

```text
200 OK
```

---

### 6. Delete a User

**DELETE**

```text
DELETE /api/users/:id
```

Example:

```text
DELETE /api/users/3
```

Response:

```json
{
  "message": "User deleted successfully"
}
```

HTTP Status:

```text
200 OK
```

---

## 🧪 Testing with Postman

The API endpoints were tested using **Postman**.

The following operations were tested successfully:

| Method | Endpoint         | Result               |
| ------ | ---------------- | -------------------- |
| GET    | `/api/users`     | ✅ Get all users      |
| GET    | `/api/users/:id` | ✅ Get user by ID     |
| POST   | `/api/users`     | ✅ Create user        |
| PUT    | `/api/users/:id` | ✅ Update user        |
| DELETE | `/api/users/:id` | ✅ Delete user        |
| GET    | `/api/users/999` | ✅ 404 error handling |

---

## ❗ Error Handling

The API handles requests for users that do not exist.

For example:

```text
GET /api/users/999
```

Returns:

```json
{
  "error": "User not found"
}
```

with:

```text
404 Not Found
```

This demonstrates basic API error handling and appropriate HTTP response codes.

---

## 🎯 Codveda Task Objectives

This project fulfills the main objectives of **Level 1 – Task 2: Build a Simple REST API**.

* [x] Set up an Express server
* [x] Create API routes for CRUD operations
* [x] Implement Create operation
* [x] Implement Read operation
* [x] Implement Update operation
* [x] Implement Delete operation
* [x] Test API endpoints using Postman
* [x] Handle missing users
* [x] Return appropriate HTTP status codes
* [x] Return JSON responses

---

## 📚 What I Learned

Through this task, I practiced:

* Building a REST API with Express.js
* Creating Express routes
* Handling HTTP requests and responses
* Working with JSON request bodies
* Using route parameters
* Implementing CRUD operations
* Using HTTP status codes
* Basic API error handling
* Testing APIs with Postman
* Running a Node.js backend locally

---

## 🚀 Future Improvements

The current version stores users temporarily in an in-memory JavaScript array.

Future improvements will include:

* PostgreSQL database integration
* Data validation
* Persistent data storage
* Authentication and authorization
* JWT-based authentication
* Role-based access control
* React frontend integration
* Deployment

These improvements will be implemented in later stages of the Full-Stack Development internship.

---

## 👩‍💻 Internship

**Program:** Full-Stack Development Internship
**Organization:** Codveda Technology
**Level:** Level 1 – Basic
**Task:** Task 2 – Build a Simple REST API

---

## 🔖 Tags

`Node.js` `Express.js` `REST API` `JavaScript` `Postman` `CRUD` `Backend Development` `Codveda` `Full Stack Development`
