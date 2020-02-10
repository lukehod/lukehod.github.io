If you are looking to customize your [Git Bash][1] experience so you are able to use an editor for files different than the current default, a dew simple steps should give you the functionality you are looking for.

For this guide, I will be looking to change the default to [Vim][2] from my current default for my system which is [Atom][3]. While I tend to write most of my code in Atom, I like to have the default set to Vim simply to make writing commits much easier for when I am using Git at the command line.

If I need to make a commit, especially a multi-line commit that would make `git commit -m "MESSAGE"` a bit of a pain, simply typing `git commit` will open Vim directly in Bash. This means that there is no waiting for Atom to load if it isn't open yet and I don't need to switch to any different windows.

The general method to set the default editor is to use the [`git config`][4] command:
```
git config --global core.editor "vim"
```
`git config --global` edits the `~/.gitconfig` which is specific to each user. This will keep the value applied to all git projects unless a project's local gitconfig file overwrites it. The rest of the command will set the value of `core.editor` to `Vim`.

If you prefer to set a different editor as default the method is similar, though you may have to specify the actually program location instead of just naming it.

> Atom: `git config --global core.editor "atom --wait"`
>
> Sublime: `git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"`
>
> Notepad++: `git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"`

**_NOTE:_** _the command `--wait` means that the system will wait for the editor to finish editing the file before continuing_

[1]: https://gitforwindows.org/
[2]: https://www.vim.org/
[3]: https://atom.io/
[4]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#Basic-Client-Configuration
