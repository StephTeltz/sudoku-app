# Use the latest LTS image of Node
FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app depenendencies
# Use wildcard to copy both package.json and package-lock.json (if using npm@5+)
COPY package*.json ./

RUN npm install

# When building for production
#RUN npm ci --only=production

# Copy app source code
COPY . .

# Listen on port 80
EXPOSE 80

# Runtime command - defines the command to start the server
CMD npm start

