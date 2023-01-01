FROM node:16.16 as builder

WORKDIR /app

RUN apt-get update

COPY . .

RUN npm install

RUN npm run build


FROM node:alpine as realeser

WORKDIR /app

COPY . .

COPY --from=builder /app/build ./build

RUN npm install --omit=dev --no-audit

EXPOSE 3333

CMD node build/src/server.js