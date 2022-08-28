FROM node:16-alpine as builder

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build <--- all the stuff for production
FROM nginx
# only elastic beanstalk will use this expose port
EXPOSE 80 
COPY --from=builder /app/build /usr/share/nginx/html