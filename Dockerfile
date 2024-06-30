FROM node:latest

RUN mkdir /web
COPY ./src /web

WORKDIR /web/src

RUN npm install
RUN npm run build

CMD npm run start