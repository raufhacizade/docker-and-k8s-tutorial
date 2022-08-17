# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
run apk add --update gcc
run apk add --update redis
run apk add --update gcc

# Tell the image what to do when it starts as a container
cmd ["redis-server"]