package handlers

import "github.com/simongottipalli/uuid-gen/api/generated/models"

var (
	InvalidVersion        = &models.Error{Error: "Invalid UUID Version"}
	InvalidNameForV3      = &models.Error{Error: "Invalid Name parameter to generate V3 UUID"}
	InvalidSpaceUuidForV3 = &models.Error{Error: "Invalid Space UUID parameter to generate V3 UUID"}
	MissingNameForV3      = &models.Error{Error: "Missing Name parameter to generate V3 UUID"}
	MissingSpaceUuidForV3 = &models.Error{Error: "Missing Space UUID parameter to generate V3 UUID"}
)
