# FROM ubuntu:latest
FROM node:latest

# Install dependencies
WORKDIR /src/
COPY . .

RUN npm install

# Expose the app port
EXPOSE 3000

# Start the app
CMD npm start

