package handlers

import (
	"uuid-gen/restapi/operations"

	"github.com/go-openapi/runtime/middleware"
)

func NewReadinessCheckHandler() *ReadinessHandlers {
	var handlers ReadinessHandlers
	handlers.GetReadiness = GetReadinessCheckHandler{}
	return &handlers
}

type ReadinessHandlers struct {
	GetReadiness GetReadinessCheckHandler
}

type GetReadinessCheckHandler struct{}

func (r GetReadinessCheckHandler) Handle(params operations.GetReadinessCheckParams) middleware.Responder {
	_ = params.HTTPRequest.Context()

	return operations.NewGetReadinessCheckOK()
}
