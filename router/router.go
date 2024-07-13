package router

import (
	"Kong-llm/handlers"
	"github.com/gorilla/mux"
)

func NewRouter() *mux.Router {
	r := mux.NewRouter()
	r.HandleFunc("/health", handlers.GetHealth).Methods("GET")
	return r
}
