const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

function createWindow() {
  console.log('创建主窗口    ');
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
      worldSafeExecuteJavaScript: true,
      nodeIntegration: true,
      contextIsolation: true,
      webviewTag: true
    }
  });

  isDev
    ? win.loadURL('http://localhost:9000')
    : win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  win.webContents.openDevTools();
  ipcMain.on('create-view', () => {});
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
