FROM node:20.13.1

WORKDIR /usr/src/app

COPY . .

# COPY .env .

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "start"]
