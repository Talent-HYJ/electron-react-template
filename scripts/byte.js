const path = require('path');

require('bytenode')
  .compileFile({
    filename: path.resolve(__dirname, '../build_electron/main.js'),
    output: path.resolve(__dirname, '../build_electron/main.jsc')
  })
  .finally(() => process.exit(0));
