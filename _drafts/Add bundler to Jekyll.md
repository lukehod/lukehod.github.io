---
layout: post
title: How to add Bundler to your existing Jekyll project
author: Luke Hodnett
published: true
---
[Bundler](https://bundler.io/) is a great tool to use with Jekyll projects in order to handle dependencies and be able to install and run Jekyll from within a project. If you already have a Jekyll project running and want to simply add Bundler functionality you can be up an running in just a few mins with this quick tutorial.

<!--more-->

Bundler will allow you to list all your plugins you want to use in your Jekyll project and install them in your local project folder instead of globally on your machine. This allows you to easily keep dependencies updated and consistent between different machines and environments. It is particularly helpful when you may want to run different versions of Jekyll with different projects all on the same machine.

To get started you first need to make sure you already have Ruby installed on your machine ([see here](https://www.ruby-lang.org/en/documentation/installation/) if not). For the tutorial we are going to be using the command line on a linux-based system or Git Bash on windows.

Prereq: have `Ruby` and `Bundler` installed

1) In project folder run `bundle init` which instantiates a new Gemfile in the project

2) Setup dependencies to be installed locally by running ` bundle install --path vendor/bundle `





REFS: https://jekyllrb.com/tutorials/using-jekyll-with-bundler/
