FROM node:latest
# Create app directory
WORKDIR /usr/app

# Copy app source code
COPY ./ /usr/app

# Install app dependencies
RUN npm i -g serve

#Expose port and start application
EXPOSE 3000
# CMD [ "npm", "run", "dev" ]
CMD serve -s dist
