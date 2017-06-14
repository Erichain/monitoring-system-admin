#!/usr/bin/env bash

if [[ $1 = "dll" ]]
then
  echo "Building with DllPlugin and HappyPack..."
  webpack --progress -p --config webpack.config.dll.js
  webpack --progress -p --config webpack.config.prod.js
else
  echo "Building release..."
  webpack --progress -p --config webpack.config.prod.js
fi
