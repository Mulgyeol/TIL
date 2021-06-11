#!/usr/bin/env bash
set -e

git add .

git commit -m "deploy"

git push

npm run build

cd .vuepress/dist

git clone https://github.com/mulgyeol/TIL

cp -rf Mulgyeol.github.io/TIL/.git ./.git

rm -rf Mulgyeol.github.io/TIL

git config --global http.postBuffer 524288000

git add .

git commit -m "deploy"

git push origin master

cd -