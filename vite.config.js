/** @type {import('vite').UserConfig} */

const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      minify: true,
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'jds-color-system',
      formats: ['es', 'umd'],
      fileName: (format) => `jds-color-system.${format}.js`
    }
  }
});