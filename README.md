# Code Generator

### Introduction
> Project outline generators are very time consuming. I have found myself generating express and react templates, just to spend more time deleting 3/4 of the code and files as they do not fit my style. I decided to do something about this.

> This project is one that I made to (hopefully) save myself some time. It is a CLI in NodeJS that is able to generate project outlines based off of templates that I have made for myself.

> I made this project in about 30 minutes in hopes that it will save me much more time than that. 

### Files
> Main Folder

**index.js** - This is the main file for the npm module. It holds all code for the CLI

**config.json** - This is the main config for the module. It is configured to my needs, as I developed this module to be private. It holds all available templates, all CLI commanads, and the files to ignore when generating templates

> Templates Folder

**express** - This is my personal express template I have made. I use it for most projects and it is what incentivized me to create this module. It is copied through the index file.
