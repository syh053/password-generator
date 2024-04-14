const express = require("express")  //引入 express 模組
const {engine} = require("express-handlebars")  //引入 express handlebars 模組


const app = express()   //將 express 除存在變數 app
const port = 3000       //設定port


app.use(express.static("public"))   //設定靜態檔案


//設定在 Express 中使用的樣版引擎
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


//路由引導 "/" => "/password"
app.get( "/", (req, res ) => {
    res.redirect("/password")

})


//設定路由 "/"
app.get( "/password", (req, res ) => {
    res.render("index")

})


//設定動態路由
app.get("/password/:id", ( req, res ) => {
    const id = req.params.id
    res.send(`The id is ${id}`)
})


//啟動伺服器
app.listen( port, () => {
    console.log( `express server is running on http://localhost:${port}` )
} )