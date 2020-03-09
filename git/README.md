# Git default configuration

> Author [Václav Purchart](https://gist.github.com/VasekPurchart/1109501)
>

## Highlights
- git aliases
- pull `rebase = true` as a default
- colors
- global `.gitignore`

## Setup
If you already have the `.gitconfig`, you can only extend the current config with this one:
```
[include] path = /path/to/ooo/.gitconfig
```
   
Or:
1. create `.gitconfig` and `.gitignore_global` files in your user's root directory (`cd ~` or `cd /Users/<username>`)
2. copy a given content inside ([.gitconfig](./.gitconfig) & [.gitignore_global](./.gitignore_global))
3. restart your terminal 
