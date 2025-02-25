🚌 Bus Booking API
A simple Node.js and Express-based REST API for managing bus bookings with MongoDB.

🚀 Features
📝 User registration & authentication
🚌 Add, view, update, and delete bus details
🎟️ Book and cancel tickets
📊 View booking history
🛠️ Dockerized for easy deployment
🏗 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT
Deployment: Docker, AWS EC2
⚙️ Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/Sivae2022/bus-booking-api.git
cd bus-booking-api
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Run the Server
bash
Copy
Edit
npm start
The server will start at http://localhost:5000

🐳 Run with Docker
bash
Copy
Edit
docker-compose up --build -d
📡 API Endpoints
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	User login
GET	/buses	Get available buses
POST	/bookings	Book a seat
DELETE	/bookings/:id	Cancel booking
📌 Deployment on AWS EC2
Launch an EC2 instance (Ubuntu)
Install Docker & Node.js
Clone the repository & set up environment variables
Run the API using docker-compose up -d
Open port 5000 in EC2 security groups
🤝 Contributing
Fork the repository
Create a new branch
Commit and push changes
Open a pull request
📜 License
This project is open-source under the MIT License.
