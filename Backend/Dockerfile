# Fetching the latest node image on alpine linux
FROM node:alpine AS development



# Create app directory
WORKDIR /Backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "node", "index.js" ]