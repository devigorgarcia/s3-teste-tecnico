FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY *.json ./
COPY vite.config.ts ./
COPY ./ ./
RUN yarn
CMD ["yarn", "dev"]

