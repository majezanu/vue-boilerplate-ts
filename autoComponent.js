/* eslint-disable */
const chokidar = require('chokidar');
const fs = require('fs');

const templates = {
  mock: (name) => `
const base${name}Mock = {};
export default base${name}Mock;
  `,
  component: (name) => `
<template>
 <div :id="id">${name} Component</div>
</template>
<script lang="ts">
 import { Component, Vue, Prop } from 'vue-property-decorator';

 @Component
 export default class ${name} extends Vue {
  @Prop({ required: false, type: String, default: '${name}-id' }) readonly id!: string
 }
 </script>
<style>
 .${name} {
 }
</style>
  `,
  index: (name) => `import ${name} from './${name}.vue';
export default ${name}`,
};

const fileExists = (path) => (file) => fs.existsSync(`${path}/${file}`);

const writeToPath = (path) => (file, content) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log('Created file: ', filePath);
    return true;
  });
};

function createFiles(path, name) {
  const files = {
    mock: `${name}.mock.ts`,
    component: `${name}.vue`,
    index: 'index.ts',
  };

  if (name !== 'components') {
    const writeFile = writeToPath(path);
    const toFileMissingBool = (file) => !fileExists(path)(file);
    const checkAllMissing = (acc, cur) => acc && cur;

    const noneExist = Object.values(files)
      .map(toFileMissingBool)
      .reduce(checkAllMissing);

    if (noneExist) {
      console.log(`Detected new component: ${name}, ${path}`);
      Object.entries(files).forEach(([type, fileName]) => {
        writeFile(fileName, templates[type](name));
      });
    }
  }
}

const watcher = chokidar
  .watch('src/components/**', { ignored: /node_modules/ })
  .on('addDir', (path, event) => {
    const name = path
      .replace(/.*\/components\/atoms\//, '')
      .replace(/.*\/components\/molecules\//, '')
      .replace(/.*\/components\/organisms\//, '')
      .replace(/.*\/components\/layouts\//, '');
    if (!name.includes('/')) createFiles(path, name);
  });

const watcher2 = chokidar
  .watch('src/views/**', { ignored: /node_modules/ })
  .on('addDir', (path, event) => {
    const name = path.replace(/.*\/views\//, '');
    if (!name.includes('/')) createFiles(path, name);
  });
