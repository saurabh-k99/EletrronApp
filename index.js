const path = require('path')
const { app, BrowserWindow, globalShortcut } = require('electron')

const createWindow = (width, height, file) => {
    const newWindow = new BrowserWindow({
        // fullscreen: true,
        width,
        height
    })

    // newWindow.loadFile(file)
    newWindow.loadURL('http://localhost:5000')
    newWindow.webContents.openDevTools()
    return newWindow
}

app.whenReady().then(() => {
    const { screen } = require('electron')
    try {
        const mainWindow = createWindow(1200, 600, path.resolve(__dirname, 'build', 'index.html'))

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