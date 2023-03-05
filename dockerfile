FROM node:18.13.0

WORKDIR /excel-formula-parser

COPY . .

RUN npm install

CMD ["node", "./main.js"]

EXPOSE 3030