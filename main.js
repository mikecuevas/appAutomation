const { app } = require('electron')
const express = require('express')
//const { exec } = require('child_process')

const util = require('util')
const exec = util.promisify(require('child_process').exec)

const { spawn } = require('child_process');


const server = express()

server.get('/teste', function (req, res) {
  res.send('Este é um teste!')
})

server.listen(3000, function () {
  console.log('Servidor Express ouvindo na porta 3000')
})

app.on('ready', () => {
  console.log('Aplicativo Electron iniciado')
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})


server.get('/abrirEdge', function (req, res) {
    exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"', (error) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res.send(`Erro: ${error.message}`);
        return;
      }
      res.send('Microsoft Edge aberto!')
    });
  })

  server.get('/abrirNetflix', function (req, res) {
    exec('"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" https://www.netflix.com/br/', (error) => {
      if (error) {
        console.log(`error: ${error.message}`);
        res.send(`Erro: ${error.message}`);
        return;
      }
      res.send('Netfrix no Edge aberto!')
    });
  })


  const directoryPath = 'C:\\Users\\miket\\OneDrive\\Documentos\\icm-app';
  server.get('/abrirProjeto', function (req, res) {
    try {
    //spawn(`start code ${directoryPath}`)
    spawn('start code', [directoryPath])
      const startProcess = spawn('start', ['powershell', 'cd ' + directoryPath + '; npx yarn start'], { shell: true });
      startProcess.on('error', function(err) {
        console.log(err);
      });
  
      const runAndroidProcess = spawn('start', ['powershell', 'cd ' + directoryPath + '; npx yarn react-native run-android'], { shell: true });
      runAndroidProcess.on('error', function(err) {
        console.log(err);
      });
  
      res.send('Projeto aberto e comandos executados!');
    } catch (error) {
      console.error(`Erro: ${error.message}`);
      res.send(`Erro: ${error.message}`);
    }
  });
  