# 🚀 Backend API - GarageFinder

## 🛠️ Getting Started

This document provides instructions to get the Backend API up and running.

### Prerequisites

- **Node.js** installed ([Node.js Installation Guide](https://nodejs.org/en/download/))
- **npm** (bundled with Node.js)

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <backend-repo-url>
   cd backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the API Locally

To run the backend server:

```bash
node server.js
```

The server should start running on **http://localhost:3000** (or the specified port).

### 📄 Environment Variables

Make sure to add a `.env` file with the necessary environment variables. For example:

```
PORT=3000
DATABASE_URL=<your-database-url>
```

### API Endpoints

This backend provides endpoints for managing the list of schools and images for the GarageFinder app.

- **`GET /schools`**: Retrieve a list of schools.
- **`POST /schools`**: Add a new school.
- **`GET /schools/:id`**: Get details about a specific school.

... (Add more endpoints as needed)

### 📋 Running Tests

To run the tests (if any are added):

```bash
npm test
```

### 🤝 Contributing

If you want to contribute to this backend, feel free to open a pull request. We welcome contributions and improvements!

### 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🔗 Related Repositories

- [Frontend GarageFinder Repository](../frontend) - The Flutter-based UI for GarageFinder.

### 📞 Support

For any support or questions, feel free to reach out via GitHub issues.
