FROM node:alpine
# Create app directory
WORKDIR /usr/app
# Install app dependencies
COPY package.json ./
# COPY ./ ./
RUN npm i
# Copy app source code
COPY . ./


#Expose port and start application
EXPOSE 5000
CMD [ "npm", "start" ]