const https = require("https");

const options = { hostname: 'https://thing142.glitch.me',
  port: 3000,
  path: '/',
  method: 'GET'
     }

function Request() {
  https.request("https://thing143.glitch.me:3000/", res => {
    const statusCode = res.statusCode;
  
    if (statusCode == 200) { console.log("200 OK"); }
    else { console.log(`${statusCode} ERROR`); }
});}

setInterval(Request, 30000);
