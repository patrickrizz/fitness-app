FROM node:12.18.3

WORKDIR /node

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]