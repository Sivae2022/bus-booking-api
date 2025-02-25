# Use the official Node.js 21.6.2 image
FROM node:21.6.2

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose the application port (adjust if needed)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
