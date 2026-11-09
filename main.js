const { app, BrowserWindow } = require('electron');
const path = require('path');

app.setPath('userData', path.join(app.getPath('appData'), 'moltcg'));

function createWindow() {
	const window = new BrowserWindow({
		width: 1440,
		height: 920,
		minWidth: 1120,
		minHeight: 720,
		backgroundColor: '#f4f5f1',
		webPreferences: {
			contextIsolation: true,
			nodeIntegration: false,
		},
	});
	window.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
	createWindow();
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});