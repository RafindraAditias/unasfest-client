FROM node:latest

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "run", "dev", "--debug" ]