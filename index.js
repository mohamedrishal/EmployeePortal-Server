const jsonServer = require('json-server')

// create server 
const empServer = jsonServer.create()

// middleware set 
const middleware = jsonServer.defaults()

// route create 
const router = jsonServer.router("db.json")

// port create 
const PORT = 3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee Potal Server Started Port : ${PORT}`);
})