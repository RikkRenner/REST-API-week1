FROM node:14
COPY . . 
RUN NPM INSTALL
EXPOSE 80
CMD ["npm", "start"]