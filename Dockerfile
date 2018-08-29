FROM node:8.9.4
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 7003
CMD [ "node","app.js" ]
