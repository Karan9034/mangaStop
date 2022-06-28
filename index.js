const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})