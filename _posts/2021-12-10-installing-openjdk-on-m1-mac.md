---
layout: post
title: "Installing OpenJDK on M1 Mac"
image: /assets/images/posts/2021-12-10-installing-openjdk-on-m1-mac/hero.jpg
date: 2021-12-10 10:00:00 +0800
categories: [java, macos]
tags: [java, m1, macos, homebrew, openjdk]
author: Sudaraka Jayathilaka
excerpt: "I recently got hold of a M1 MacBook Pro and faced with the challenge of setting up java developer env. I wanted to build and run a spring boot project."
---

I recently got hold of a M1 MacBook Pro and faced with the challenge of setting up java developer env. I wanted to build and run a spring boot project. Natuarally, I used following commands to check and install the latest jdk using [Homebrew](https://brew.sh/)

#### Checking available Java versions via Homebrew

```shell
$ brew seach java
```

Output:

```shell
==> Formulae
app-engine-java                   java                              javacc                            jslint4java                       pdftk-java
google-java-format                java11                            javarepl                          libreadline-java
==> Casks
homebrew/cask-versions/java-beta                                                       homebrew/cask/eclipse-java
```

#### Checking the details about the Formulae named `java`

```shell
$ brew info java
```

Output:

```shell
openjdk: stable 16.0.1 (bottled) [keg-only]
Development kit for the Java programming language
https://openjdk.java.net/
Not installed
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/openjdk.rb
License: GPL-2.0-only with Classpath-exception-2.0
==> Dependencies
Build: autoconf ✘
==> Requirements
Build: Xcode ✘
==> Caveats
For the system Java wrappers to find this JDK, symlink it with
  sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
This is a beta version of openjdk for Apple Silicon
(openjdk 17 preview).

openjdk is keg-only, which means it was not symlinked into /opt/homebrew,
because macOS provides similar software and installing this software in
parallel can cause all kinds of trouble.

==> Analytics
install: 152,874 (30 days), 463,335 (90 days), 1,705,669 (365 days)
install-on-request: 41,576 (30 days), 129,753 (90 days), 531,943 (365 days)
build-error: 0 (30 days)
```

So I saw details and went ahead with installation using:

```shell
brew install java
```

But then I faced this issue when compiling my spring boot project:

```shell
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.8.1:compile (default-compile) on project reachup-api: Fatal error compiling: java.lang.IllegalAccessError: class lombok.javac.apt.LombokProcessor (in unnamed module @0x486dd616) cannot access class com.sun.tools.javac.processing.JavacProcessingEnvironment (in module jdk.compiler) because module jdk.compiler does not export com.sun.tools.javac.processing to unnamed module @0x486dd616 -> [Help 1]
```

So I realised, there is something wrong with the installation and went into reading some content on the web. Okay then I got to know [Lombok is not supported in Java 17](https://github.com/projectlombok/lombok.patcher/issues/8), and [Brew installed java 17 on my machine](https://stackoverflow.com/questions/67782746/openjdk-16-shows-as-17-on-macos-apple-silicon-when-installed-with-homebrew). 

So now I digged up a bit and found the solution. azul.com provides openjdk versions built for ARM 64-bit architecture. You can download the dmg from [HERE 👋](https://www.azul.com/downloads/?package=jdk).

Problem solved 🤓
