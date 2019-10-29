#!/bin/bash
currentDir=$PWD
rootDir=`npm root -g`
npmRoot=$rootDir
cd $rootDir
cd git-repos-manager
NODE_ENV=production node --require reflect-metadata dist/main.js
cd $PWD