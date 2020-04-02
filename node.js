const https = require("https");

const options = { hostname: 'https://thing142.glitch.me',
  port: 3000,
  path: '/',
  method: 'GET'
     }

function Request() { https.request(options, res => {
  const statusCode = res.statusCode;
  
  if (statusCode == 200) { console.log("200 OK"); }
  else { console.log(`${statusCode} ERROR`); }
})}


Request();
//setInterval(Request, 60000);
