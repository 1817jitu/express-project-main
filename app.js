const express = require('express')
const app = express()
// console.log(app)
const port = 3000
//web Routing
const web = require('./Routes/web.js')
//====================router load==========================
app.use('/',web)
//======================setupJS============================
app.set('view engine','ejs')

//==================link public folder================
app.use(express.static('public'))

// ==================serverCreate==========================
app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
});