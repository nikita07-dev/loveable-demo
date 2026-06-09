FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NITRO_PRESET=node-server
ENV PORT=8080
ENV HOST=0.0.0.0

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
