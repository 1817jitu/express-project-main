const express = require("express");
const { connection } = require("mongoose");
const app = express();
const port = 3000;
const connectDB = require("./db/connectDB");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const session = require('express-session')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')

// =====================bodyparse=========================
app.use(bodyParser.urlencoded({extended: false}));

// ===================== session message =================
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 6000 },
  resave: false,
  saveUninitialized: false,
}))

// ======================flash massage ==================
app.use(flash())

// =======================cookieParser==================
app.use(cookieParser())

// ======================file upload ====================
app.use(fileUpload({useTempFiles: true}));

// ==================web Routing========================
const web = require("./Routes/web.js");

// ===================router load==========================
app.use("/", web);

// =====================setupJS============================
app.set("view engine", "ejs");

// =====================link public folder=================
app.use(express.static("public"));

// ====================db connection=====================
connectDB();

// ==================serverCreate==========================
app.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});
