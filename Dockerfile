# Make sure that the golang build variant and debian variant are in sync. For example: use golang buster variant with debian buster variants
FROM golang:1.18.2-buster as builder

ENV GO111MODULE=on
ENV GOPRIVATE=github.com/simongottipalli
ENV HOST=0.0.0.0

# Create and change to the app directory.
WORKDIR /app

# Retrieve application dependencies.
# This allows the container build to reuse cached dependencies.
# Expecting to copy go.mod and if present go.sum.
COPY go.* ./
RUN go mod download

# Copy local code to the container image.
COPY . ./

# Build the binary.
RUN go build -v -o server cmd/uuid-gen/main.go

# Use the official Debian slim image for a lean production container.
# https://hub.docker.com/_/debian
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM debian:buster-slim
WORKDIR /app
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

ENV HOST=0.0.0.0
ENV PORT=8080

# Copy the binary to the production image from the builder stage.
COPY --from=builder /app/server /app/server

# Run the web service on container startup.
ENTRYPOINT ["/app/server"]