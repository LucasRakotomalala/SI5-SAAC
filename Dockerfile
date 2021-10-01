FROM node:16.3

WORKDIR /usr/src/app

ENV PORT=3000

ENV DATABASE_URL=postgresql://si5_sacc:dev_password@localhost:5432/td_1

COPY package*.json ./

COPY ./api ./api

RUN npm install

# EXPOSE $PORT

RUN useradd -m user

USER user

CMD [ "npm", "start" ]