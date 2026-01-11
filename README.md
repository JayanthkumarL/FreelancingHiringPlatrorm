# Freelance Hiring Platform

A modern, full-stack platform designed to seamlessly connect freelancers with clients. This application provides a streamlined interface for hiring, job management, and professional networking.

## 🚀 Features

-   **User Authentication**: Secure login and registration for both Clients and Freelancers using JWT.
-   **Dynamic Dashboard**: Tailored experiences for different user roles (Client/Freelancer).
-   **Modern UI/UX**: Built with React 19 and styled with a premium, responsive design system.
-   **Job Management**: Easy posting and management of freelance projects.
-   **Real-time Updates**: Interactive components for a smooth user experience.

## 🛠️ Tech Stack

### Frontend
-   **Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Routing**: [React Router 7](https://reactrouter.com/)
-   **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) w/ [Mongoose](https://mongoosejs.com/)
-   **Authentication**: JSON Web Tokens (JWT) & Bcrypt

## ⚙️ Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites
-   [Node.js](https://nodejs.org/) (v16+ recommended)
-   [Git](https://git-scm.com/)
-   [MongoDB](https://www.mongodb.com/) (Local or AtlasURI)

### 1. Clone the Repository
```bash
git clone https://github.com/JayanthkumarL/FreelancingHiringPlatrorm.git
cd FreelancingHiringPlatrorm
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies.

```bash
cd bakend
npm install
```

Create a `.env` file in the `bakend` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
npm run dev
# Server will run on http://localhost:5000
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies.

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
# Application will run on http://localhost:5173
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
