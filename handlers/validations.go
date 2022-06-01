package handlers

import (
	"github.com/google/uuid"
	"github.com/simongottipalli/uuid-gen/api/generated/models"
)

func validateForV3(spaceUuid *string, name *string) (*uuid.UUID, *models.Error) {
	if spaceUuid == nil {
		return nil, MissingSpaceUuidForV3
	}
	if name == nil {
		return nil, MissingNameForV3
	}
	parsedUuid, err := uuid.Parse(*spaceUuid)
	if err != nil {
		return nil, InvalidSpaceUuidForV3
	}
	if *name == "" {
		return nil, InvalidNameForV3
	}
	return &parsedUuid, nil
}
