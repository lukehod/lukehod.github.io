---
layout: post
title: How to setup Samba on Rasberry Pi
author: Luke Hodnett
published: true
---
This is a quick guide on how to setup Samba on Rasberry Pi
<!--more-->
Videos: https://www.youtube.com/watch?v=iQwWEsuRWUw , https://www.youtube.com/watch?v=0vEK4A8FOX0
https://www.juanmtech.com/samba-file-sharing-raspberry-pi/
https://www.youtube.com/channel/UCTifhHi3SSt_om6C3IAay6w/search?query=pi

yifamoveb

1) sudo apt-get update
2) sudo apt-get install samba samba-common-bin
3) sudo nano /etc/samba/smb.conf
4) ctrl+k to delete all and replace with:
```
[global]
netbios name = Pi
server string = The Pi File Center
workgroup = WORKGROUP
hosts allow =
socket options = TCP_NODELAY IPTOS_LOWDELAY SO_RCVBUF=65536 SO_SNDBUF=65536
remote announce =
remote browse sync =

[PiSSD]
path = /media/Media/Shared
comment = No comment
browsable = yes
read only = no
valid users =
writable = yes
guest ok = yes
public = yes
create mask = 0777
directory mask = 0777
force user = root
force create mode = 0777
force directory mode = 0777
hosts allow =

[PiHDD]
path = /media/SLOW/Shared
comment = No comment
browsable = yes
read only = no
valid users =
writable = yes
guest ok = yes
public = yes
create mask = 0777
directory mask = 0777
force user = root
force create mode = 0777
force directory mode = 0777
hosts allow =
```
5) sudo smbpasswd -a pi
6) sudo service smbd restart
7) SHOULD work under "Network", but I had to map network drive to \\10.0.0.114\PiSSD for it to go
