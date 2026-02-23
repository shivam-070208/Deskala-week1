

import { schemas } from "./schemas";
import { paths } from "./paths";

const swaggerConfig = {
  openapi: "3.0.0",

  info: {
    title: "Task Management API",
    description:
      "A comprehensive API for managing tasks and user authentication. " +
      "Users can register, login, and manage their personal tasks with full CRUD operations.",
    version: "1.0.0",
    contact: {
      name: "API Support",
      url: "https://example.com/support",
      email: "support@example.com",
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },

  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
    {
      url: "https://api.example.com",
      description: "Production server",
    },
  ],

  components: {
    schemas,

    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description:
          "JWT token received from login endpoint. Set in Authorization header or cookie.",
      },
    },
  },

  paths,

  tags: [
    {
      name: "Authentication",
      description: "User registration and login endpoints",
    },
    {
      name: "Tasks",
      description: "Task management endpoints (Create, Read, Update, Delete)",
    },
  ],

  externalDocs: {
    description: "Find more information about this API",
    url: "https://example.com/api-docs",
  },
};

export default swaggerConfig;
