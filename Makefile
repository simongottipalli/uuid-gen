.PHONY: swagger
swagger:
	swagger generate server -t api/generated -A uuid-gen --main-package ../../../cmd/uuid-gen

.PHONY: build
build:
	docker build --tag uuid-gen .

.PHONY: run
run:
	docker run --rm --publish 8080:8080 uuid-gen

.PHONY: build-frontend
build-frontend:
	docker build --tag uuid-gen ./frontend