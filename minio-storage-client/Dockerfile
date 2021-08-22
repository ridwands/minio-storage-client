FROM node:13-alpine

WORKDIR /app

COPY . . 
RUN npm i
RUN npm i -g pm2
CMD ["pm2-runtime","server.js"]
