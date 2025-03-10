# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Set the command to serve the built files
CMD ["serve", "-s", "build"]

# Expose port 5000 to be used by the server
EXPOSE 5000
