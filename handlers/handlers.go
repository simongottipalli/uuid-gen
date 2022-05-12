package handlers

import (
	"github.com/go-openapi/runtime/middleware"
	"github.com/simongottipalli/uuid-gen/api/generated/restapi/operations"
)

func RegisterHandlers(api *operations.UUIDGenAPI) {

	api.GetHandler = &GetHandler{}

}

type GetHandler struct {
}

func (g *GetHandler) Handle(params operations.GetParams) middleware.Responder {
	return operations.NewGetOK()
}
