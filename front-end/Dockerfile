FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:alpine as realeser

WORKDIR /app

COPY . .

RUN npm install -g serve

COPY --from=builder /app/build ./build

RUN npm install --omit=dev --no-audit

EXPOSE 8080

CMD serve -s build -l 8080