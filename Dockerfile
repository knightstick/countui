# Use a specific Node.js version as the base
FROM node:23.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Command to run the built app
CMD ["node", "dist/index.js"]