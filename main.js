const { app, BrowserWindow, protocol } = require('electron');
const { URL } = require('url');


app.whenReady().then(() => {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.setTitle('Nyvex-Core | App');

  mainWindow.loadURL('https://nyvex-core.com'); // Load your desired URL in the main window
});
