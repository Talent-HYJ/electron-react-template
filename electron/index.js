if (process.env.NODE_ENV === 'development') {
  require('./main.js');
} else {
  require('bytenode');
  require('../build_electron/main.jsc');
}
