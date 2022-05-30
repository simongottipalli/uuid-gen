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
		id = generateUuidV1()
		return operations.NewGetUUIDVersionOK().WithPayload(&models.GetUUIDResponse{UUID: &id})
	}
	if params.Version == "v3" {
		spaceUuid, err := validateForV3(params.UUID, params.Name)
		if err != nil {
			return operations.NewGetUUIDVersionInternalServerError().WithPayload(err)
		}
		id = generateUuidV3(spaceUuid, params.Name)
		return operations.NewGetUUIDVersionOK().WithPayload(&models.GetUUIDResponse{UUID: &id})
	}
	if params.Version != "" {
		id = "Unimplemented"
		return operations.NewGetUUIDVersionInternalServerError().WithPayload(InvalidVersion)
	}
	return operations.NewGetUUIDVersionInternalServerError()
}

func generateUuidV1() string {
	return uuid.NewString()
}

func generateUuidV3(spacedUuid *uuid.UUID, name *string) string {
	id := uuid.NewMD5(*spacedUuid, []byte(*name)).String()
	return id
}
