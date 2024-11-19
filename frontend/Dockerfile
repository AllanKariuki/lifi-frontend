# Use the official Node.js image as the base image
FROM node:lts-slim AS builder

# Set the working directory
WORKDIR /

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build \
    && ls -lh dist

# Use a lightweight web server to serve the built files
FROM nginx:alpine

# Copy the build output to the web server's directory
COPY --from=builder dist /usr/share/nginx/html
COPY --from=builder public /usr/share/nginx/html

#COPY cert.crt /etc/ssl/certs/self.crt
#COPY cert.key /etc/ssl/certs/self.key

#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
EXPOSE 443

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
