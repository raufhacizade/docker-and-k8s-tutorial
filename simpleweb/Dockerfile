# Specify a base image
from node:14-alpine
# from node:alpine

WORKDIR /usr/app

# Install some dependencies
# copy ./ ./
copy ./package.json ./ 
# splitting the copy command into 2 parts will helps us to
# minimize the cache busting and rebulds.
# only the package.json file is related to npm install command
# so if there will not be updates above commands or in package.json file
# then docker will not re-run the 'npm install' command from scratch again during the build procedur
# instead of re-running, it'll use the cache
run npm install

# now docker will copy the rest of files
copy ./ ./

# Default command
CMD ["npm", "start"]