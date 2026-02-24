
export const paths = {
  // ==================== AUTH PATHS ====================
  "/api/auth/register": {
    post: {
      tags: ["Authentication"],
      summary: "Register a new user",
      description: "Create a new user account with email, password, and name",
      operationId: "registerUser",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RegisterRequest",
            },
            examples: {
              example1: {
                summary: "Register new user",
                value: {
                  name: "John Doe",
                  email: "john@example.com",
                  password: "SecurePass123!",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "User registered successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponse",
              },
            },
          },
        },
        "400": {
          description: "Invalid input or validation error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationError",
              },
            },
          },
        },
        "409": {
          description: "Email already registered",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
  },

  "/api/auth/login": {
    post: {
      tags: ["Authentication"],
      summary: "User login",
      description:
        "Authenticate user with email and password. Returns JWT token in cookie.",
      operationId: "loginUser",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginRequest",
            },
            examples: {
              example1: {
                summary: "Login user",
                value: {
                  email: "john@example.com",
                  password: "SecurePass123!",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Login successful",
          headers: {
            "Set-Cookie": {
              schema: {
                type: "string",
                example: "token=abcd1234; Path=/; HttpOnly; Secure",
              },
              description: "JWT token set as HTTP-only cookie",
            },
          },
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponse",
              },
            },
          },
        },
        "401": {
          description: "Invalid email or password",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedError",
              },
            },
          },
        },
        "400": {
          description: "Validation error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationError",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
  },

  // ==================== TASKS PATHS ====================
  "/api/tasks": {
    get: {
      tags: ["Tasks"],
      summary: "Get all tasks",
      description:
        "Retrieve all tasks for the authenticated user. Requires authentication.",
      operationId: "getTasks",
      security: [
        {
          BearerAuth: [],
        },
      ],
      responses: {
        "200": {
          description: "Tasks retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskListResponse",
              },
            },
          },
        },
        "401": {
          description: "Unauthorized - Authentication required",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedError",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
    post: {
      tags: ["Tasks"],
      summary: "Create a new task",
      description:
        "Create a new task for the authenticated user. Requires authentication.",
      operationId: "createTask",
      security: [
        {
          BearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CreateTaskRequest",
            },
            examples: {
              example1: {
                summary: "Create a simple task",
                value: {
                  title: "Buy groceries",
                  description: "Milk, eggs, bread",
                  status: "pending",
                },
              },
              example2: {
                summary: "Create a task with only title",
                value: {
                  title: "Call the dentist",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Task created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskResponse",
              },
            },
          },
        },
        "400": {
          description: "Validation error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationError",
              },
            },
          },
        },
        "401": {
          description: "Unauthorized - Authentication required",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedError",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
  },

  "/api/tasks/{id}": {
    get: {
      tags: ["Tasks"],
      summary: "Get a task by ID",
      description:
        "Retrieve a specific task by its ID. Requires authentication.",
      operationId: "getTaskById",
      security: [
        {
          BearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            example: "507f1f77bcf86cd799439012",
          },
          description: "Task ID (MongoDB ObjectId)",
        },
      ],
      responses: {
        "200": {
          description: "Task retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskResponse",
              },
            },
          },
        },
        "400": {
          description: "Invalid task ID format",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationError",
              },
            },
          },
        },
        "401": {
          description: "Unauthorized - Authentication required",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedError",
              },
            },
          },
        },
        "404": {
          description: "Task not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFoundError",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
    put: {
      tags: ["Tasks"],
      summary: "Update a task",
      description: "Update a specific task. Requires authentication.",
      operationId: "updateTask",
      security: [
        {
          BearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            example: "507f1f77bcf86cd799439012",
          },
          description: "Task ID (MongoDB ObjectId)",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdateTaskRequest",
            },
            examples: {
              example1: {
                summary: "Update task title and status",
                value: {
                  title: "Updated task title",
                  status: "completed",
                },
              },
              example2: {
                summary: "Update only status",
                value: {
                  status: "completed",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Task updated successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskResponse",
              },
            },
          },
        },
        "400": {
          description: "Invalid input or task ID format",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationError",
              },
            },
          },
        },
        "401": {
          description: "Unauthorized - Authentication required",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedError",
              },
            },
          },
        },
        "404": {
          description: "Task not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFoundError",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ["Tasks"],
      summary: "Delete a task",
      description: "Delete a specific task. Requires authentication.",
      operationId: "deleteTask",
      security: [
        {
          BearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            example: "507f1f77bcf86cd799439012",
          },
          description: "Task ID (MongoDB ObjectId)",
        },
      ],
      responses: {
        "200": {
          description: "Task deleted successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: true,
                  },
                  message: {
                    type: "string",
                    example: "Task deleted successfully",
                  },
                },
              },
            },
          },
        },
        "400": {
          description: "Invalid task ID format",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationError",
              },
            },
          },
        },
        "401": {
          description: "Unauthorized - Authentication required",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedError",
              },
            },
          },
        },
        "404": {
          description: "Task not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFoundError",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
  },
};
