// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDb = require("./config/db");

// const userRoutes = require('./Routes/userRoutes');
// const busRoutes = require('./Routes/busRoutes');
// const routes = require('./Routes/routes');
// const bookRoutes = require('./Routes/bookingRoutes');

// const app = express();

// // Connect to MongoDB
// connectDb();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(express.static("public"));

// // Routes
// app.use('/user', userRoutes);
// app.use('/bus', busRoutes);
// app.use('/routes', routes);
// app.use('/book', bookRoutes);

// // Default route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the Bus Booking API!" });
// });

// // Start server with correct port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");

const userRoutes = require('./Routes/userRoutes');
const busRoutes = require('./Routes/busRoutes');
const routes = require('./Routes/routes');
const bookRoutes = require('./Routes/bookingRoutes');

const app = express();

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Routes
app.use('/user', userRoutes);
app.use('/bus', busRoutes);
app.use('/routes', routes);
app.use('/book', bookRoutes);

// Default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Bus Booking API!" });
});

// Start server with correct port
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
