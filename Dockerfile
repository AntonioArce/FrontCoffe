# pull base image
FROM node:14.13.1-buster-slim

# default to port 3000 for node 
ARG PORT=3000
ENV PORT $PORT

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-gloabl/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

