const { ipcRenderer, BrowserWindow } = require('electron');
const { getCurrentWindow } = require('@electron/remote');
window.api = {
  createView: () => {
    ipcRenderer.send('create-view');
  },
  exportPDF: (data, fileName) => {
    // data 传html字符串模板
    ipcRenderer.send('exportPDF', data, fileName);
  },
  operateWindow: (type) => {
    ipcRenderer.send('operateWindow', type);
  },
  isMaximze: () => {
    return getCurrentWindow().isMaximized();
  }
};
