#!/bin/sh

./node_modules/.bin/webpack
rm -rf uview-ui-release
cp -r ./uview-ui ./uview-ui-release
cp -r ./uview-ui-release-build/index.js ./uview-ui-release/libs/request
cp -r ./uview-ui-release-build/route.js ./uview-ui-release/libs/function