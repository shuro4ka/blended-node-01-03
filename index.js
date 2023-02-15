const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const formidable = require("formidable");
const filePath = path.join(__dirname, "./text.txt");
const filePath1 = path.join(__dirname, "./contacts.json");



http.createServer(async(reg, res) =>{
    if(reg.url === "/"){
const data = await fs.readFile(filePath, 'utf-8')
        res.end(data)
    }
    
    if(reg.url === "/home" && req.method.toLowerCase() ==='post'){
        const form =formidable({multiples:true});
        form.parse(req, async (error, fields, files)=>{
           if(error){
            res.setHeader(error.httpCode|| 400)
            res.end(String(error))
           } 
           const data = JSON.parse(await fs.readFile(files.file.filepath, 'utf-8'))
           data.push(fields)
           await fs.writeFile(filePath1, JSON.stringify(data), 'utf-8')

        })
        res.end("your Home")
    }
    if(reg.url ==="/work"){
        const data = await fs.readFile(filePath1, 'utf-8')
        res.end(data)
        res.end("Work")
    }
}).listen(8081, ()=>
    console.log("Server is running"));


