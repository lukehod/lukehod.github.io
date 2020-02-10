# How to Change Your Bash Prompt
 1. backup files
 ```
 cp ~/.bashrc ~/.bashrc
 ```
 2. open file for editing
 ```
 vim ~/.bashrc
 ```
 3. add **PS1** variable line
 ```
 export PS1=""
 ```
 OPTIONS:
  * ```\u``` - username
  * ```\h``` - hostname
  * ```\H``` - FQDN (Fully Qualified Domain Name)
  * ```\s``` - shell name
  * ```\v``` - shell version
  * ```\w``` - path to current directory
  * ```\d``` - date
  * ```\@``` - time in 12 hour format
  * ```\T``` - 12 hour time hh:mm:ss
  * ```\A``` - 24 hour time
  * ```\t``` - 24 hour hh:mm:ss
  * ```\$``` - If the current user is root, display #, $ otherwise
  * ```\!``` - history number of current command 


 4. make bash accept the changes
 ```
 source ~/.bashrc
 ```
