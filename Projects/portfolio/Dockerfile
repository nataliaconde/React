FROM node:16-alpine

RUN mkdir /usr/app

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install -g serve

EXPOSE 3000

CMD serve -s dist
