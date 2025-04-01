# StayHub - Hotel Management System

StayHub is a **role-based hotel management system** that enables customers to seamlessly book rooms while allowing admins to efficiently manage room listings. Built using the **MERN stack**, this project ensures a smooth and secure experience with **JWT authentication, Axios API integration, Node.js cron jobs, and middleware-based access control.**

## 🚀 Deployment

StayHub is deployed on an AWS EC2 instance with an **Elastic IP:**

🔗 **Live API Base URL**: [`http://13.202.204.246/`](http://13.202.204.246/)

## 📌 Features

### **Backend Features**
- **Role-Based Authentication:** Secure login with JWT tokens for customers and admin.
- **Room Management:** Admin can add new rooms, and customers can view/book rooms.
- **Booking System:** Customers can book rooms, and admins can confirm bookings.
- **User Management:** Customers can register, log in, and manage their details.
- **Feedback System:** Customers can submit feedback for completed bookings.
- **Contact Support:** Users can submit inquiries via the contact form.
- **Secure API Integration:** Axios is used for handling API requests efficiently.
- **Cron Jobs (Node-cron):** Automated tasks like database cleanup and booking expiration checks.
- **Middleware for Access Control:** Protects routes based on user roles.

### **Frontend Features**
- **React-based UI:** Built with React.js and Bootstrap for a responsive and user-friendly experience.
- **Seamless API Calls:** Uses **Axios instance** for efficient API communication.
- **Real-time Notifications:** Implemented using `react-toastify` for success and error alerts.
- **Smooth Navigation:** Implemented with `react-router-dom` for easy page transitions.
- **Hero Section with Image Carousel:** Engaging banner with multiple slides showcasing hotel ambiance.  
- **Room Listings with Interactive Cards:** Displays available rooms with images, prices, and booking options.  
- **Navigation Bar with Authentication Handling:** Conditional rendering for login, logout, and dashboard links.  
- **Search & Filter Functionality:** Allows customers to filter rooms based on availability, price, and ratings.  
- **Customer Feedback & Contact Section:** Users can submit reviews and reach out via the contact form.  

## 🏗 Project Structure

```bash
Hotel-Management-System/
│-- client/                  # Frontend (React)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Different pages (Login, Booking, etc.)
│   │   ├── services/        # Axios API service files
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point
│-- server/                  # Backend (Node.js, Express, MongoDB)
│   ├── controllers/         # Handles business logic
│   ├── models/              # Mongoose models
│   ├── routes/              # API endpoints
│   ├── middlewares/         # Authentication & authorization
│   ├── cronJobs             # Manages reserved rooms, checkout rooms.
│   ├── server.js            # Main server file
│-- README.md                # Documentation
```

## 🛠 Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/balajis183/Hotel-management-system.git
cd Hotel-management-system
```

### 2️⃣ Backend Setup
```bash
cd server
npm install
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd client
npm install
npm start
```

## 🔄 How Does StayHub Work?

1. **User Registration & Authentication:**
   - Customers can sign up and log in using JWT-based authentication.
   - Admins have separate access for room management.
   
2. **Room Booking Flow (Customer):**
   - Customers browse available rooms.  
   - Select a room and proceed with the booking giving checkin and checkout.  
   - The booking status is initially set to **"Pending"**.  
   - Once the user checks the detials and confirms the booking, the status updates to **"Confirmed"**.  
   - Customers can check their booking details and status anytime.  

3. **Admin Role & Room Management:**
   - Admins can add new rooms to the system.

4. **Feedback & Support:**
   - Customers can submit feedback post-booking.
   - Contact form available for inquiries.

5. **Automated Cron Jobs:**
   - Schedules periodic Cron Jobs to release reserved rooms and booking expiration checks.

## 🌐 API Endpoints

### **User Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/users/register-user` | Register a new user |
| POST | `/users/login-user` | Login user and receive JWT |
| GET  | `/users/get-all-users` | Fetch all registered users |

### **Room Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST  | `/rooms/create-room` | Admin adds a new room |
| GET  | `/rooms/get-all-rooms` | Fetch all available rooms |
| GET  | `/rooms/getSingleRoom/:id` | Get a specific room by ID |

### **Booking Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST  | `/bookings/create-booking` | Customer creates a booking |
| GET  | `/bookings/get-bookings` | Fetch all bookings |
| GET  | `/bookings/get-booking-by-id/:bookingId` | Get a specific booking by ID |
| PUT  | `/bookings/confirm-booking/:bookingId` | Admin confirms a booking |

### **Feedback Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST  | `/feedback/add-feedback` | Customer submits feedback |
| GET  | `/feedback/get-all-feedback` | Fetch all feedback |
| GET  | `/feedback/getfeedback/:bookingId` | Fetch feedback by booking ID |

### **Contact Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST  | `/contact/savecontact` | Save user contact messages |

## 📦 Dependencies

### Backend (Server)
- Express.js (Backend framework)
- MongoDB & Mongoose (Database & ODM)
- JSON Web Token (JWT for authentication)
- Node-cron (Automated jobs)
- Cors, dotenv (Environment variables & security)

### Frontend (Client)
- React.js (User interface)
- React Bootstrap (UI Components)
- Axios (API Integration with Axios instance)
- React Router DOM (Navigation)
- React Toastify (Notifications)
- Bootstrap Icons (UI Enhancements)


## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, open an issue to discuss your ideas first.

## Contact

If you have any questions or feedback, feel free to reach out:

- **GitHub**: [balajis183](https://github.com/balajis183)
- **Email**: sbalaji2000s@gmail.com

---


For more projects visit my github profile.
```bash
https://github.com/balajis183
```
Thank you for exploring **StayHub**! 😊

