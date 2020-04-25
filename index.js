const electron = require("electron");
const { v4 : uuidv4 } = require('uuid');
uuidv4();
const {app, BrowserWindow, Menu, ipcMain} = electron;

let KonversiSuhuWindow;

app.on("ready", () => {
    KonversiSuhuWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }, 
        title : "Konversi Suhu"
    });

    KonversiSuhuWindow.loadURL(`file://${__dirname}/KonversiSuhu.html`);
    KonversiSuhuWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

    const menuTemplate = [{
                    label: "Quit",
                    accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl + Q",
                    click() {
                        app.quit();
                    }
         
        },
    
        {
            label: "View",
            submenu: [{ role: "reload" }, { role: "toggledevtools" }]
        }
    ]
