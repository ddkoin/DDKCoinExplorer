FROM        node:8.14.1-alpine

RUN         apk add --no-cache python curl bash automake autoconf libtool git alpine-sdk

WORKDIR     /usr/src/app

COPY        package*.json ./

RUN         npm install

COPY        . .

EXPOSE      7003
