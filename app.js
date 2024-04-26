const express = require("express")  //引入 express 模組
const {engine} = require("express-handlebars")  //引入 express handlebars 模組
const { randomPassword, conditions } = require("./public/javascripts/generate_password.js")


const app = express()   //將 express 除存在變數 app
const port = 3000       //設定port


app.use(express.static("public"))   //設定靜態檔案

// use body-parser to get key-value pairs
app.use(express.urlencoded({ extended: true }))


//設定在 Express 中使用的樣版引擎
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


//路由引導 "/" => "/password"
app.get( "/", (req, res ) => {
    res.redirect("/password")

})


//設定路由 "/"
app.get( "/password", ( req, res ) => {
    const passwordLength = req.query.length
    // console.log(passwordLength)
    res.render("index")
})


app.post('/pass', ( req, res ) => {
    const options = req.body
    const passwords = randomPassword(options)
    
    res.render("index", { passwords, options })
})



//啟動伺服器
app.listen( port, () => {
    console.log( `express server is running on http://localhost:${port}` )
} )


// console.log(randomPassword(conditions))
