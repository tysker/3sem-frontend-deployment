# Use the official Node image as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vite app
RUN npm run build

# Install 'pm2' and 'serve' globally (if not already installed)
RUN npm install -g serve
# RUN npm install -g pm2

# Expose the port that your app is running on
EXPOSE 3000

# CMD ["pm2-runtime", "serve", "dist", "3000", "--spa"]
CMD ["serve", "dist", "-l", "3000"]
