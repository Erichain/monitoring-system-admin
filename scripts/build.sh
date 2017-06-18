#!/usr/bin/env bash

echo "Clearing previous builds and vendor file..."
rm -rf dist-*
echo "Building with DllPlugin and HappyPack..."
webpack --progress -p --config webpack.config.dll.js
webpack --progress -p --config webpack.config.prod.js
