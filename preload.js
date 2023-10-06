const { contextBridge, ipcRenderer } = require('electron');
console.log('contextBridge');
contextBridge.exposeInMainWorld('electron', {
  exec: (command, callback) => {
    ipcRenderer.invoke('execute-command', command).then((res)=> {
        return callback(res);
    });
  },
});
