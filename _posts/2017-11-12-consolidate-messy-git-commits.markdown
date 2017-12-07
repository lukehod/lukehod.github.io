---
layout: post
title: "Consolidate Messy Git Commits"
date: 2017-11-12 12:00:00 -0500
categories:
---

_NOTE: I'm going to assume here that you are at least familiar with the basics of how git works, if not I'd recommend checking out the [Try Git](https://try.github.io) tutorial from the awesome folks at GitHub or the [Git documentation](https://git-scm.com/doc)._

We've all been there: you've just finished off a new feature for a project and you are ready to push your changes and submit a pull request, but your final few commits look like this:

    messy commits (make these yourself since the commit screenshot was wrong due to not including the commit before the ones we were going to change! Remember that SHA-1s are the first digits NOT the last!!!!!!)

So in hindsight those last few commits would be much better as one single commit, but we are stuck since we've already made the commit, _right_? 

Lucky for us this is not the case!

It turns out git has an easy way to compress these commits together if you haven't pushed to the remote, but first we need to quickly dive into the `git reset` command so you don't make any mistakes that can really cause some headaches for you and your collaborators.

### Git Reset
`git reset` is a useful command that can help in quite a few situations such as when your workflow is interrupted by an urgent fix, you need to undo a merge or pull, or when you simply have to correct a spelling error in a commit message (don't act like you've never been there). 

For the purposes of this post we want to use it to reset our branch to before the series of commit and then commit them all together as one.

Lets first take a look at a diagram of our commit history from the log shown above.

    orig_log.png
Here we can see each commit listed in order and our HEAD is at the last commit. In order to fix our problem, we want to reset to the commit **before** the first of the series of commits we want to fix and then **re-commit** all our changes in a single commit. To do this we need to first use `git reset` to move the HEAD back to "4bba1".

    after_reset.png

There are three main flags used with `git reset`:
* `git reset --hard [<commit>]`
This is the **most dangerous** option! This resets the index and working tree and any changes to tracked files in the working tree since the given commit are discarded. This means that all uncommited changes AND any commits after the given commit are destroyed, so obviously only use this option if you know thats what you want.
* `git reset --mixed [<commit>]`
This is the default option if no flag is given with the `git reset` command. While this option moves HEAD back to the given commit and resets the staging area like the `--hard` option, it leaves the working directory alone. This allows you to recommit changes from the working directory as you would like.
* `git reset --soft [<commit>]`
Even less drastic than `--mixed`, this moves HEAD back to the given commit but leaves the working directory _and_ the staging area untouched. This means that everything in the commits we just reset are still sitting in our staging area ready to be committed as we see fit. **This is the one we want to use here**, as it allows us to easily recommit everything back into one commit. 

### Consolidating commits
Now that we know the general idea of what we want to do (move HEAD back to before the group of commits and then recommit all at once) and what `git reset` can do it is time to put it all together!

Looking at `git log` we see that the commit **before** the group of commits we are looking to consolidate is "4bba1". Our first step is to then move HEAD back to this commit while keeping the working directory and staging area untouched using

    git reset --soft 4bba1

Now if we type `git status` we should see **ALL** the changes from the commits after 4bba1 ready to commit. To finish up we can simply

    git commit -m "commit message"

and we are all set. The commits that were originally messy and plentiful have been consolidated into a single logical commit that will be much cleaner for when we push to the remote and merge with the master branch!

### Final notes
Don't do this if already pushed to remote! Check other cool things `git reset` can do!

TAGS: git, programming

**_Sources:_**
_[Git Documentation](https://git-scm.com/docs/git-reset) for git reset_
_[Atlassian tutorial]() on undoing changes_
_Diagrams made with [draw.io](https://www.draw.io/)_
