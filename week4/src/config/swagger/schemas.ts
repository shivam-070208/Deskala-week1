/**
 * Swagger Schema Definitions
 * Centralized reusable schemas for API documentation
 */

export const schemas = {
  // User Schemas
  User: {
    type: "object",
    required: ["_id", "name", "email", "createdAt", "updatedAt"],
    properties: {
      _id: {
        type: "string",
        description: "User ID (MongoDB ObjectId)",
        example: "507f1f77bcf86cd799439011",
      },
      name: {
        type: "string",
        description: "User's full name",
        example: "John Doe",
      },
      email: {
        type: "string",
        format: "email",
        description: "User's email address",
        example: "john@example.com",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "Account creation date",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
        description: "Last update date",
      },
    },
  },

  RegisterRequest: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
        description: "User's full name",
        example: "John Doe",
        minLength: 2,
      },
      email: {
        type: "string",
        format: "email",
        description: "User's email address",
        example: "john@example.com",
      },
      password: {
        type: "string",
        format: "password",
        description: "User's password",
        example: "SecurePass123!",
        minLength: 6,
      },
    },
  },

  LoginRequest: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        format: "email",
        description: "User's email address",
        example: "john@example.com",
      },
      password: {
        type: "string",
        format: "password",
        description: "User's password",
        example: "SecurePass123!",
      },
    },
  },

  AuthResponse: {
    type: "object",
    required: ["success", "message", "user"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      message: {
        type: "string",
        example: "User registered successfully",
      },
      user: {
        $ref: "#/components/schemas/User",
      },
    },
  },

  // Task Schemas
  Task: {
    type: "object",
    required: ["_id", "title", "status", "userId", "createdAt", "updatedAt"],
    properties: {
      _id: {
        type: "string",
        description: "Task ID (MongoDB ObjectId)",
        example: "507f1f77bcf86cd799439012",
      },
      title: {
        type: "string",
        description: "Task title",
        example: "Complete project documentation",
      },
      description: {
        type: "string",
        description: "Task description",
        example: "Write comprehensive API documentation for all endpoints",
      },
      status: {
        type: "string",
        enum: ["pending", "completed"],
        description: "Task status",
        example: "pending",
      },
      userId: {
        type: "string",
        description: "Owner user ID",
        example: "507f1f77bcf86cd799439011",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "Task creation date",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
        description: "Last update date",
      },
    },
  },

  CreateTaskRequest: {
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        description: "Task title",
        example: "Complete project documentation",
        minLength: 1,
      },
      description: {
        type: "string",
        description: "Task description (optional)",
        example: "Write comprehensive API documentation",
      },
      status: {
        type: "string",
        enum: ["pending", "completed"],
        description: "Task status (default: pending)",
        example: "pending",
      },
    },
  },

  UpdateTaskRequest: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "Task title",
        example: "Updated task title",
      },
      description: {
        type: "string",
        description: "Task description",
        example: "Updated description",
      },
      status: {
        type: "string",
        enum: ["pending", "completed"],
        description: "Task status",
        example: "completed",
      },
    },
  },

  TaskListResponse: {
    type: "object",
    required: ["success", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/Task",
        },
      },
    },
  },

  TaskResponse: {
    type: "object",
    required: ["success", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/Task",
      },
    },
  },

  // Error Schemas
  ErrorResponse: {
    type: "object",
    required: ["success", "message"],
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      message: {
        type: "string",
        example: "An error occurred",
      },
      error: {
        type: "string",
        description: "Error details in development",
      },
    },
  },

  ValidationError: {
    type: "object",
    required: ["success", "message"],
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      message: {
        type: "string",
        example: "Validation failed",
      },
      errors: {
        type: "object",
        description: "Field validation errors",
      },
    },
  },

  UnauthorizedError: {
    type: "object",
    required: ["success", "message"],
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      message: {
        type: "string",
        example: "Unauthorized - Please login",
      },
    },
  },

  NotFoundError: {
    type: "object",
    required: ["success", "message"],
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      message: {
        type: "string",
        example: "Resource not found",
      },
    },
  },
};
