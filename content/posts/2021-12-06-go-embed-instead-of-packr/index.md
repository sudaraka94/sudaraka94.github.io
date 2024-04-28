---
title: Go Embed instead of Packr
author: Sudaraka Jayathilaka
date: 2021-12-06
hero: ./images/hero.webp
excerpt: Many of the microservices I am working right now, are written in Golang. Most of these microservices have internal dashboards and the UI tend to be served from the respective microservices.
---
Many of the microservices I am working right now, are written in Golang. Most of these microservices have
internal dashboards and the UI tend to be served from the respective microservices. For serving a UI from a golang service
(or any other service), you need to serve the UI files from the service. But specially in Golang, this used to be not very 
straight forward. Althogh we can serve files from a certain folder using a static file server feature in Golang, the language was missing the native support to bundle ui files with the service executable. For getting this done, there are several open source golang libraries out there such as,

 [github.com/alecthomas/gobundle](https://github.com/alecthomas/gobundle)
 
 [github.com/GeertJohan/go.rice](https://github.com/GeertJohan/go.rice)
 
 [github.com/go-playground/statics](https://github.com/go-playground/statics)
 
 [github.com/gobuffalo/packr](https://github.com/gobuffalo/packr)
 
 [github.com/knadh/stuffbin](https://github.com/knadh/stuffbin)
 
 [github.com/mjibson/esc](https://github.com/mjibson/esc)
 
 [github.com/omeid/go-resources](https://github.com/omeid/go-resources)
 
 [github.com/phogolabs/parcello](https://github.com/phogolabs/parcello)
 
 [github.com/rakyll/statik](https://github.com/rakyll/statik)
 
 [github.com/shurcooL/vfsgen](https://github.com/shurcooL/vfsgen)
 
 [github.com/UnnoTed/fileb0x](https://github.com/UnnoTed/fileb0x)
 
 [github.com/wlbr/templify](https://github.com/wlbr/templify)

We we using the packer library from above. On the high level, these libraries serialized all the static content and 
stored the serialized contents inside `.go` files. So once we update any of the static contents, we had to run a specific command
for the serialization and generating the new `.go` files. 

But then on one bright sunny day, Golang team introduced their latest feature, [Embedded Files](https://golang.org/doc/go1.16#library-embed) in their latest version `go 1.16`. Since this native way of embedding files eliminates the need of generating files explicitly and it looks more convenient, we wanted to make the switch in our services.

I faced with few challenges while doing the switch,
1. Go embed directive doesn't support paths with `..` according to the documentation (accessing the parent file)
2. Go embed always considers the path from the root.
eg: if the file is `project-root/static/index.html` you will be able to access the file on `http://localhost:8080/static/index.html` 

As the solution to the first problem, I ended up defining the `//go:embed` directive in the `main.go` 

But as a solution to the other problem, I came up with the following implementation,

#### main.go
```go
package main

import (
	"embed"
	"log"
	"net/http"
)

//go:embed static/*
var staticContent embed.FS

func main() {
	http.Handle("/", http.FileServer(http.FS(StaticFS{staticContent})))
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

#### staticfs.go
```go
package main

import (
	"embed"
	"io/fs"
	"path"
)

type StaticFS struct {
	content embed.FS
}

func (c StaticFS) Open(name string) (fs.File, error) {
	return c.content.Open(path.Join("static", name))
}
```



You can see a working demo in below repo

[https://github.com/sudaraka94/go-embed-demo](https://github.com/sudaraka94/go-embed-demo)