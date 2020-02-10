---
layout: post
title: Create  command line executible script using C++
author: Luke Hodnett
published: true
---
This is a quick guide on how to create  command line executible script using cpp
<!--more-->
# Create  command line executible script using cpp
Scripts are stored in /usr/local/bin if it is to be used system wide (use /usr/local/sbin if it needs to be run with root permission)

1) compile script from .cpp source file using ```sudo g++ -o scriptname source.cpp```
2) test that file works correctly ```./scriptname```
3) move to the correct location ```sudo mv scriptname /usr/local/bin```
4) test at the command line by typing ```scriptname``` by itself

note: using ```sudo``` when compiling and moving the file is necessary!

Tips for formatting output:
- Color output by using ```cout << "\033[1;31mbold red text\033[0m\n"```
    - the ```\033[1m``` changes the color of the output (see https://misc.flogisoft.com/bash/tip_colors_and_formatting) and ```\033[0m``` returns to default
