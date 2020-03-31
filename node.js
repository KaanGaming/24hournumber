const http = require("http");



setInterval(http.get("http://thing142.glitch.me/", (res) => {
  const { statusCode } = res;
  
  if (statusCode == 200) { console.log("200 OK"); }
  else { console.log(`${statusCode} ERROR`); }
}), 60000);
