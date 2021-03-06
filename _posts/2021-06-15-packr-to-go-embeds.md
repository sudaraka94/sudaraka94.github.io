---
title: "Go Embed instead of Packr"
tags: ["go","packr","goEmbed"]
style: fill
color: secondary
description: Okay, I wanted to setup java dev env on a M1 Mac
---
Many of the microservices I am working right now, are written in Golang. Most of these microservices have
internal dashboards and the UI tend to be served from the respective microservices. For serving a UI from a golang service
(or any other service), you need to serve the UI files from the service. But specially in Golang, this used to be not very 
straight forward. Althogh we can serve files from a certain folder using a static file server feature in Golang, the language was missing the native support to bundle ui files with the service executable. For getting this done, there are several open source golang libraries out there such as,

  - [github.com/alecthomas/gobundle](github.com/alecthomas/gobundle)
  - [github.com/GeertJohan/go.rice](github.com/GeertJohan/go.rice)
  - [github.com/go-playground/statics](github.com/go-playground/statics)
  - [github.com/gobuffalo/packr](github.com/gobuffalo/packr)
  - [github.com/knadh/stuffbin](github.com/knadh/stuffbin)
  - [github.com/mjibson/esc](github.com/mjibson/esc)
  - [github.com/omeid/go-resources](github.com/omeid/go-resources)
  - [github.com/phogolabs/parcello](github.com/phogolabs/parcello)
  - [github.com/pyros2097/go-embed](github.com/pyros2097/go)
  - [github.com/rakyll/statik](github.com/rakyll/statik)
  - [github.com/shurcooL/vfsgen](github.com/shurcooL/vfsgen)
  - [github.com/UnnoTed/fileb0x](github.com/UnnoTed/fileb0x)
  - [github.com/wlbr/templify](github.com/wlbr/templify)
  - [perkeep.org/pkg/fileembed](perkeep.org/pkg/fileembed)

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

{%- gist 17dfa9deb4187e86ea49206ceda6e535 %}

You can see a working demo in below repo

[https://github.com/sudaraka94/go-embed-demo](https://github.com/sudaraka94/go-embed-demo)