module.exports = {
  productName: 'Electron React',
  appId: 'your.id',
  asar: true,
  mac: {
    category: 'your.app.category.type',
    icon: 'build/favicon.icns'
  },
  win: {
    icon: 'build/favicon.png'
  },
  nsis: {
    oneClick: false,
    language: '2052',
    deleteAppDataOnUninstall: true,
    allowToChangeInstallationDirectory: true
  },
  dmg: {
    icon: 'build/favicon.icns',
    iconSize: 128,
    contents: [
      {
        x: 380,
        y: 180,
        type: 'link',
        path: '/Applications'
      },
      {
        x: 130,
        y: 180,
        type: 'file'
      }
    ],
    window: {
      width: 540,
      height: 380
    }
  },
  files: [
    'build/**/*',
    'electron/**',
    'build_electron/main.jsc',
    'build_electron/preload.js',
    '!electron/main.js',
    '!electron/preload.js',
    '!**/node_modules/**',
    'node_modules/electron-is-dev/**',
    'node_modules/bytenode/**',
    // eslint-disable-next-line prettier/prettier, no-useless-escape
    'node_modules/@electron/**'
  ],
  directories: {
    buildResources: './public',
    output: './package'
  },
  extends: null
};
