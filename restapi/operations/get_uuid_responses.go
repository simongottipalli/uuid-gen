// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"uuid-gen/models"
)

// GetUUIDOKCode is the HTTP code returned for type GetUUIDOK
const GetUUIDOKCode int = 200

/*GetUUIDOK A single UUID

swagger:response getUuidOK
*/
type GetUUIDOK struct {

	/*
	  In: Body
	*/
	Payload *models.GetUUIDResponse `json:"body,omitempty"`
}

// NewGetUUIDOK creates GetUUIDOK with default headers values
func NewGetUUIDOK() *GetUUIDOK {

	return &GetUUIDOK{}
}

// WithPayload adds the payload to the get Uuid o k response
func (o *GetUUIDOK) WithPayload(payload *models.GetUUIDResponse) *GetUUIDOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get Uuid o k response
func (o *GetUUIDOK) SetPayload(payload *models.GetUUIDResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetUUIDOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
