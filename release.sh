#!/bin/sh

rm -rf ./uview-ui-release-build/index.js
./node_modules/.bin/webpack
rm -rf uview-ui-release
cp -r ./uview-ui ./uview-ui-release
mkdir ./uview-ui-release/dist
cp -r ./uview-ui-release-build/index.js ./uview-ui-release/dist