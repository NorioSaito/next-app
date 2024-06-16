FROM node:latest

RUN mkdir /web
COPY ./src /web

WORKDIR /web/src

RUN npm install
RUN next build

CMD npm start