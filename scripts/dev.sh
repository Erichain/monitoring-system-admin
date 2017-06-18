#!/usr/bin/env bash

export LOCAL_IP=$(ifconfig | grep 'inet' | awk '{print $2}' | grep '192.168.*')

echo "Generating development files..."
webpack-dev-server --host ${LOCAL_IP} --port 3333 --inline --hot --progress
