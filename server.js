const http = require("http");

const PORT = 8000;

const requestListener = (req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<h1>Welcome to vanilla node server</h1>");
    res.end();
  } else if (url === "/home") {
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (url === "/about") {
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
};
const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
