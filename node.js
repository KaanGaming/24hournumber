const https = require("https");

const options = { hostname: 'https://thing142.glitch.me',

  path: '/',
  method: 'GET'
     }

setInterval(https.request(options, res => {
  const { statusCode } = res;
  
  if (statusCode == 200) { console.log("200 OK"); }
  else { console.log(`${statusCode} ERROR`); })
}), 60000);
