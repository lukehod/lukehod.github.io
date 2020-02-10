---
layout: post
title: Setup git on Raspberry Pi
author: Luke Hodnett
published: true
image: git.jpg
---
This is a quick guide on how to setup git on rpi
<!--more-->
# Setup git on rpi

1) ssh into pi
2) ```sudo apt-get update```
3) ```sudo apt-get install git```
4) check version with ```git --version``` to ensure correct installation
5) update username and email using ```git config --global user.name "Luke"``` and ```git config --global user.email "my@email.com"```
6) setup password caching so you don't need to reenter pword everytime you git push, ect ```git config --global credential.helper cache```
(optional: setup timeout for password using ```git config --global credential.helper 'cache --timeout=3600' ```)
