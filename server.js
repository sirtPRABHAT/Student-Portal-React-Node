const express = require('express');
const app = express();
const path = require('path');


console.log(__dirname)

const publicPath = path.join(__dirname,  'public');
console.log(publicPath)
app.use(express.static(publicPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });


const port = 1000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });