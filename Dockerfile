FROM node:14

WORKDIR /usr/src/app

ENV PORT=3000

COPY package*.json ./

RUN npm install

COPY ./api .

EXPOSE $PORT

CMD [ "npm", "start" ]