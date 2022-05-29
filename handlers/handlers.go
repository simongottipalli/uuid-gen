package handlers

import (
	"github.com/go-openapi/runtime/middleware"
	"github.com/google/uuid"
	"github.com/simongottipalli/uuid-gen/api/generated/models"
	"github.com/simongottipalli/uuid-gen/api/generated/restapi/operations"
)

func RegisterHandlers(api *operations.UUIDGenAPI) {

	api.GetHandler = &GetHandler{}
	api.GetUUIDVersionHandler = &GetUuidHandler{}
}

type GetHandler struct {
}

type GetUuidHandler struct {
}

func (g *GetHandler) Handle(params operations.GetParams) middleware.Responder {
	return operations.NewGetOK()
}

func (g *GetUuidHandler) Handle(params operations.GetUUIDVersionParams) middleware.Responder {
	id := ""
	if params.Version == "v1" || params.Version == "" {
		id = uuid.NewString()
		return operations.NewGetUUIDVersionOK().WithPayload(&models.GetUUIDResponse{UUID: &id})
	}
	if params.Version == "v3" {
		uuidParam, err := uuid.Parse(params.UUID.String())
		if err != nil {
			error := "Could not parse UUID"
			return operations.NewGetUUIDVersionInternalServerError().WithPayload(&models.Error{Error: &error})
		}
		id = uuid.NewMD5(uuidParam, []byte(*params.Name)).String()
		return operations.NewGetUUIDVersionOK().WithPayload(&models.GetUUIDResponse{UUID: &id})
	}
	if params.Version != "" {
		id = "Unimplemented"
		return operations.NewGetUUIDVersionOK().WithPayload(&models.GetUUIDResponse{UUID: &id})
	}
	return operations.NewGetUUIDVersionInternalServerError()
}
