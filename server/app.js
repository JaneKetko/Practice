const express = require('express');
const app = express();

app.use(express.static('..\\public'));

app.listen(3000, () => {
    console.log('Server is running. Wait please...');
});
app.use((req, res) => {
    res.sendFile('Error.html', {root: '..\\public' });
});