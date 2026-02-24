# Week 4 Assignment - Task Manager API

Welcome to the **Week 4 Assignment**!  
This project is a **Task Manager API** built with Node.js, Express, and TypeScript, featuring JWT-based authentication, user management, and robust API documentation via **Swagger**.

---

## ✨ Features

- **User Authentication:**  
  Register and Login users securely with JWT tokens for access and refresh.

- **Task Management:**  
  - Create, Read, Update, and Delete personal tasks
  - Tasks can be marked as *pending* or *completed*

- **JWT Security:**  
  Secure authentication flows with access and refresh tokens, token validation, and cookie support.

- **API Documentation:**  
  Complete Swagger documentation included!  
  See [`SWAGGER_SETUP.md`](./SWAGGER_SETUP.md) for technical setup details.

---

## 📦 Folder Structure

```
src/
├── api/
│   ├── controllers/         # Express controllers (auth, tasks)
│   ├── services/            # Business logic for users and tasks
│   ├── models/              # Data models (User, Task)
│   └── validator/           # Input validation
├── config/                  # Env config, cookie config, swagger setup
│   └── swagger/
└── lib/
    └── utils.ts             # JWT utility functions
```

---

## 🚀 How to Run

1. **Install Dependencies**

   ```
   pnpm install
   ```

2. **Configure Environment Variables**

   Create a `.env` file in the root directory with the following (fill in your own secrets):

   ```
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ACCESS_TOKEN_EXPIRES_IN=30m
   REFRESH_TOKEN_EXPIRES_IN=7d
   ```

3. **Run the Application**

   For development with auto-reload:
   ```
   pnpm run dev
   ```

   For production build:
   ```
   pnpm run build
   pnpm run start
   ```

4. **Access API & Documentation**

   - API Base URL: `http://localhost:5000/api`
   - Swagger UI (API Docs):  
     Visit [`http://localhost:5000/api/docs`](http://localhost:5000/api/docs)

---

## 🔑 Example Endpoints

- `POST   /api/auth/register` – Register a user
- `POST   /api/auth/login` – Login to receive tokens
- `GET    /api/tasks` – List your tasks *(requires Auth)*
- `POST   /api/tasks` – Create task *(requires Auth)*
- `PUT    /api/tasks/:id` – Update task *(requires Auth)*
- `DELETE /api/tasks/:id` – Delete task *(requires Auth)*

---

## 📝 Notes

- Auth is **cookie-based** (tokens are set as HTTP Only cookies).
- All endpoints (except register/login) **require authentication**.
- See the code in `src/api/controllers/` for implementation details.
- For full API specs, refer to the Swagger UI or `src/config/swagger/`.

Happy coding!
