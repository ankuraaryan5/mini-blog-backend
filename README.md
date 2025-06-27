## 📘 Mini Blog Backend

This is the **backend Setup** for the Mini Blog project. It allows admin users to perform full **CRUD operations** on blog posts via a RESTful API. The backend is built using **Express.js** and uses **JWT authentication**.

---

## 🔧 Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JSON Web Token (JWT)
* dotenv
* cors

---

## 📁 Project Structure

```
/backend
├── controllers/
├── models/
├── routes/
├── middleware/
├── .env
├── server.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mini-blog-backend.git
cd mini-blog-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root with the following:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/miniblog
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Server

```bash
node index.js
```

The backend will run at:
👉 `http://localhost:4000/admin`

---

## 📮 API Endpoints

| Method   | Route             | Description           | Auth Required |
| -------- | ----------------- | --------------------- | ------------- |
| `POST`   | `/login`          | Admin login           | ✅             |
| `GET`    | `/posts`          | Get all admin posts   | ✅             |
| `POST`   | `/posts`          | Create a new post     | ✅             |
| `GET`    | `/posts/:id`      | Get single post by ID | ✅             |
| `PUT`    | `/posts/:id`      | Update a post         | ✅             |
| `DELETE` | `/posts/:id`      | Delete a post         | ✅             |

> 🛡️ Use `Authorization: Bearer <token>` header for protected routes.

---

## 🧪 Testing the API

You can use tools like **Postman**, or frontend integration (e.g. Next.js) to test endpoints.
---