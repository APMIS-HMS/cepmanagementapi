FROM node:carbon

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH


COPY package*.json ./


RUN npm install

COPY . /app

EXPOSE 3030

CMD ng serve --host 0.0.0.0
