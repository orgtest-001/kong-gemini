package main

import (
	"Kong-llm/router"
	"log"
	"net/http"
)

func main() {
	router := router.NewRouter()
	log.Println("Server is running on port 9090 🏃🏻‍♂️")
	log.Fatal(http.ListenAndServe(":9090", router))
}
