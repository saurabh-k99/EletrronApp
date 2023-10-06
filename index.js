const path = require('path')
const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const { exec } = require('child_process');

const createWindow = (width, height, file) => {
    console.log(`path.join(__dirname, 'preload.js')`, path.join(__dirname, 'preload.js'));
    const newWindow = new BrowserWindow({
        fullscreen: true,
        width,
        height,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Specify the path to preload.js
        },
    })

    // newWindow.loadFile(file)
    newWindow.loadURL('http://localhost:5000')
    // newWindow.webContents.openDevTools()
    return newWindow
}

app.whenReady().then(() => {
    const { screen } = require('electron')
    try {
        const mainWindow = createWindow(1200, 600, path.resolve(__dirname, 'build', 'index.html'))
        ipcMain.handle('execute-command', async (event, command) => {
            try {

                return new Promise((resolve, reject) => {
                    exec(command, (err, stdout, stderr) => {
                        if (err) {
                            resolve('');
                        }
                        resolve(stdout);
                        });
                });
            } catch (error) {
            console.log('error', error);
              return error.message;
            }
          });

        globalShortcut.register('ESC', () => {
            mainWindow.fullScreen = false
        })

        const screenCount = screen.getAllDisplays().length

        console.log('screenCount: ', screenCount)
        
    }
    catch(err) {
        console.log(err)
    }
})