#syntax=docker/dockerfile:1

FROM golang:1.18.1-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . ./

RUN go build -o uuid-gen ./cmd/uuid-generator-server/main.go

CMD [ "/uuid-gen" ]