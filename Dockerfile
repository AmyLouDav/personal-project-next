FROM node:alpine

RUN mkdir -p Documents/personal-project-next
WORKDIR /Documents/personal-project-next

COPY . /Documents/personal-project-next

RUN npm install

RUN npm run build
EXPOSE 8080
CMD npm run build