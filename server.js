const express = require('express');
const app = express();
const path = require('path');


console.log(__dirname)

const publicPath = path.join(__dirname,  'build');
console.log(publicPath)
app.use(express.static(publicPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

 process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

const port = process.env.PORT || 1000 ;

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });