const { ipcRenderer } = require('electron');
require('bytenode');
window.api = {
  createView: () => {
    ipcRenderer.send('create-view');
  },
  exportPDF: (data, fileName) => {
    // data 传html字符串模板
    ipcRenderer.send('exportPDF', data, fileName);
  }
};
