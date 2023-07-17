FROM node:16.17.0

WORKDIR /Frontend/my-portfolio
COPY ./Frontend/my-portfolio/package.json ./Frontend/my-portfolio/package.json
RUN npm i
COPY ./Frontend/my-portfolio ./Frontend/my-portfolio

WORKDIR /Backend
COPY ./Backend/package.json ./Backend/package.json
RUN npm i
COPY ./Backend ./Backend

EXPOSE 3000 8080

WORKDIR /Frontend/my-portfolio
CMD ["npm", "run", "remote-start"]