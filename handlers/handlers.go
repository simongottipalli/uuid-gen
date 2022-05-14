package handlers

import (
	"github.com/go-openapi/runtime/middleware"
	"github.com/google/uuid"
	"github.com/simongottipalli/uuid-gen/api/generated/models"
	"github.com/simongottipalli/uuid-gen/api/generated/restapi/operations"
)

func RegisterHandlers(api *operations.UUIDGenAPI) {

	api.GetHandler = &GetHandler{}
	api.GetUUIDHandler = &GetUuidHandler{}
}

type GetHandler struct {
}

type GetUuidHandler struct {
}

func (g *GetHandler) Handle(params operations.GetParams) middleware.Responder {
	return operations.NewGetOK()
}

func (g *GetUuidHandler) Handle(params operations.GetUUIDParams) middleware.Responder {
	id := uuid.NewString()
	return operations.NewGetUUIDOK().WithPayload(&models.GetUUIDResponse{UUID: &id})
}
