FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm instal
COPY . .

CMD ["npm", "start"]