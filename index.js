#!/usr/bin/env node

const package = require('./package.json');
const config = require('./config.json');
const path = require('path');
const fse = require('fs-extra');
const chalk = require('chalk');
const fs = require('fs');

const [, , ...args] = process.argv;
const blueBold = chalk.hex('7D57FD').bold;
const greyBold = chalk.hex('EEEEEE').bold;
const grey = chalk.hex('EEEEEE');
const prefix = Object.keys(package.bin)[0];

if (args[0] === 'help') {
    console.log(`\n${blueBold('Code Generator - Help')}
${grey(`» Prefix - ${prefix}`)}
${grey(`» Created By - JS`)}\n
${greyBold(`Commands`)}
${grey(config.commands.map(cmd => `» ${prefix} ${cmd.name} - ${cmd.usage}`).join('\n'))}\n`)

} else if (args[0] === "list") {
    console.log(`\n${blueBold('All Templates')}
${grey(`» ${config.templates.join('\n» ')}`)}
${greyBold(`Use ${prefix} <template name> to generate a template`)}\n`)

} else if (config.templates.includes(args[0])) {
    console.log(blueBold(`\nGenerating Template Files - ${args[0]}`));
    const template_path = path.join(__dirname, 'templates', args[0]);
    generateFile(template_path);

} else {
    console.log(`\n${blueBold(`Invalid Command ${args[0] ? `- ${prefix} ${args[0]}` : ''}`)}
${grey(`» Use ${prefix} help to view all commands`)}\n`)
}

function generateFile(template, folder) {
    const files = fs.readdirSync(template);

    files.forEach(file => {
        const stats = fs.statSync(`${template}/${file}`);
        if (config.ignore.includes(file)) return;

        if (stats.isFile()) {
            const contents = fs.readFileSync(`${template}/${file}`, 'utf8');
            fs.writeFileSync(`${process.cwd()}/${folder !== undefined ? `${folder}/${file}` : file}`, contents, 'utf8');
            console.log(grey(`» File: ${file} created`));
        } else if (stats.isDirectory) {
            fs.mkdirSync(path.join(process.cwd(), file));
            generateFile(path.join(template, file), file);
            console.log(grey(`» Folder: ${file} created`));
        }
    })
}