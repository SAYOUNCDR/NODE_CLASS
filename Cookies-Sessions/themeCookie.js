const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

// set the theme cookie
app.get('/setTheme', (req, res) => { 
    res.cookie('theme', 'dark', { maxAge: 3600000 }); // Cookie expires in 1 hour
    res.send('Theme cookie has been set to dark mode');
});


app.get('/getTheme', (req, res) => {
    const theme = req.cookies.theme || 'light';
    res.send(`Current theme is: ${theme}`);
});

app.get('/clearTheme', (req, res) => {
    res.clearCookie('theme');
    res.send('Theme cookie has been cleared');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});