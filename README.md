# Run
`go run cmd/uuid-generator-server/main.go`

# Todos:

1. Use github issues for tasks
2. Implement API
    1. Return a uuid in a JSON structure
    2. Add some tests
3. Setup a Google cloud platform build 
pipeline
4. Use Makefile

# Notes so far

1. Create, install and generate code with [goswagger](https://goswagger.io)
    `swagger generate server -t api/generated -A uuid-gen --main-package ../../../cmd/uuid-gen`
2. `go mod init uuid-gen` - generated go.mod and go.sum

