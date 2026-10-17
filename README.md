# AI Code Review Web Application

An AI-powered web application that helps developers review source code, identify potential issues, and receive suggestions for improving code quality.

## 🚀 Features

- **AI-Powered Code Review:** Analyze source code and receive AI-generated feedback.
- **Code Editor:** Enter and edit code directly in the application.
- **Syntax Highlighting:** Improve code readability using Prism.js.
- **Formatted Review Results:** Display AI-generated feedback in Markdown format.
- **Backend API Integration:** Send code to the backend and receive review results.
- **Multiple Language Support:** Submit code written in different programming languages for review.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- Axios
- React Simple Code Editor
- Prism.js
- React Markdown
- rehype-highlight
- HTML and CSS

### Backend
- Node.js
- Express.js
- Google Generative AI API
- dotenv

## 📂 Project Structure

```text
CODE-REVIEW/
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js and npm
- Git
- A Google Generative AI API key

### 1. Clone the Repository

```bash
git clone https://github.com/jaiswalanchal9648-ux/AI-CODE-REVIEW-PROJECT.git
```

Navigate to the project directory:

```bash
cd AI-CODE-REVIEW-PROJECT
```

### 2. Set Up the Backend

Open a terminal and run:

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder and add your API key using the environment variable name expected by the backend code.

For example, if your backend reads `process.env.GEMINI_API_KEY`:

```env
GEMINI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

Start the backend using the command configured in `Backend/package.json`. If the project uses `server.js` directly, run:

```bash
node server.js
```

### 3. Set Up the Frontend

Open a second terminal from the project root and run:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## 🔄 How It Works

1. The user enters source code in the React-based code editor.
2. The user requests a code review.
3. Axios sends the code to the backend API.
4. The Express backend receives the request through the review route.
5. The backend service sends the code to the configured Generative AI model.
6. The AI generates code-review feedback.
7. The frontend displays the response in a readable, formatted layout.

## 🔗 API Endpoint

**Endpoint:** `POST /ai/get-review`

**Local URL:**

```text
http://localhost:3000/ai/get-review
```

**Request body:**

```json
{
  "code": "function sum(a, b) { return a + b; }"
}
```

The request body must contain a `code` field with the source code to review.

## 🔐 Environment Variables

The backend uses environment variables to configure API credentials.

- Keep your `.env` file private.
- Do not upload API keys or other secrets to GitHub.
- The `.gitignore` file excludes `Backend/.env` from Git tracking.
- Add a placeholder environment file or document required variable names without including real credentials.

## 🎯 Purpose

This project demonstrates the integration of a React frontend, an Express backend, and a Generative AI service to build an interactive developer tool. It also provides practical experience with REST APIs, code editing, asynchronous requests, and displaying AI-generated responses.

## 👩‍💻 Author

**Anchal Jaiswal**

- GitHub: [jaiswalanchal9648-ux](https://github.com/jaiswalanchal9648-ux)
- LinkedIn: [anchal-jaiswal130](https://linkedin.com/in/anchal-jaiswal130)
