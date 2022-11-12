if (process.env.NODE_ENV === 'development') {
  require('./main.js');
} else {
  console.log('云效jsc');
  require('bytenode');
  require('../build_electron/main.jsc');
}
