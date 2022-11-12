const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');
function createWindow() {
  console.log('创建主窗口');
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hiddenInset',
    frame: false,
    trafficLightPosition: { x: 10, y: 7 },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      worldSafeExecuteJavaScript: true,
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });
  win.on('close', () => {
    console.log('关闭');
    win.minimize();
  });
  isDev
    ? win.loadURL('http://localhost:9000')
    : win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  win.webContents.openDevTools();
  ipcMain.on('operateWindow', (e, type) => {
    switch (type) {
      case 'minimize':
        BrowserWindow.getFocusedWindow().minimize();
        break;
      case 'maximize':
        if (BrowserWindow.getFocusedWindow().isMaximized()) {
          BrowserWindow.getFocusedWindow().unmaximize();
        } else {
          BrowserWindow.getFocusedWindow().maximize();
        }
        break;
      case 'close':
        BrowserWindow.getFocusedWindow().close();
        break;
    }
  });
  ipcMain.on('exportPDF', (e, data, fileName = '未命名.pdf') => {
    // 导出pdf方法
    const pdfWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
        enableRemoteModule: true
      },
      show: false, // 如果不想显示窗口可以改为false
      width: 800,
      height: 600,
      fullscreenable: true,
      minimizable: false
    });
    pdfWindow.loadURL(`data:text/html;charset=utf-8,${encodeURI(data)}`);
    pdfWindow.webContents.on('did-finish-load', () => {
      pdfWindow.webContents.printToPDF({}).then((res) => {
        dialog
          .showSaveDialog(win || null, {
            defaultPath: './' + fileName
          })
          .then((file) => {
            fs.writeFileSync(path.join(file.filePath), res);
          });
      });
    });
  });
}

app.whenReady().then(() => {
  require('@electron/remote/main').initialize();
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on('web-contents-created', (e, webContents) => {
  require('@electron/remote/main').enable(webContents);
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
