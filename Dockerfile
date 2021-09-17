FROM node:16

WORKDIR /usr/src/app

ENV PORT=3000

ENV DB_HOST=localhost
ENV DB_PORT=5432

COPY package*.json ./

COPY ./api ./api

RUN npm install

EXPOSE $PORT

CMD [ "npm", "start" ]