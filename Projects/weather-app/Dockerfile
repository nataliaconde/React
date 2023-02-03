# FROM node:alpine
# WORKDIR /usr/app
# COPY package.json ./
# COPY ./ ./
# RUN npm i
# EXPOSE 3000
# CMD [ "npm", "start" ]

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production
# CMD ["node", "./src/index.js"]
CMD [ "npm", "start" ]