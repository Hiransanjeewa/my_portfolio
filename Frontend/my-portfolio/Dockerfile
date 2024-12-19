# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /my-portfolio

# Copying package.json and package-lock.json
COPY package.json package-lock.json /my-portfolio/

# Installing dependencies
RUN npm install
RUN npm install react-router-dom


# Copying all the files in our project
COPY . .

EXPOSE 3000
# Starting our application
CMD npm start