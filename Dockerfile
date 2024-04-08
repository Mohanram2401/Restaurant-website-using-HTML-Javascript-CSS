FROM node:14-alphine

WORKDIR /app

COPY package*.json ./

COPY package-lock*.json ./

Run npm install --production

COPY . .
