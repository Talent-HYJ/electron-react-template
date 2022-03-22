const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  createView: () => {
    ipcRenderer.send('create-view');
  },
  exportPDF: (data) => {
    // data 传html字符串模板
    ipcRenderer.send('exportPDF', data);
  }
});
