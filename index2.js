const fs = require("fs")
const argv = process.argv.slice(2)
const operations = argv[0]
const file = argv[1]

switch(operations){
    case "read" :
        fs.readFile(`./${file}`,"utf-8",(err,data)=>{
            if(err){
                console.log("Error",err)
            }
            else{
                console.log(data)
            }
        })
        break;

        case "delete" :
            fs.unlink(file, (err)=>{
                if(err){
                    console.log("error",err)
                }else{
                    console.log("file deleted")
                }
            })
            break;

            case "create" :
                fs.writeFile(`./${file}`,"Hii Handsome",(err)=>{
                    console.log(err)
                })

                break;
            
            case "append" :
                fs.appendFile(`./${file}`,"Hello boy\n",(err)=>{
                    console.log(err)
                })

                break;
                case "rename" : 
                fs.rename("./test.txt",`./${file}`,(err)=>{
                    if(err){

                        console.log("error",err)
                    }else{
                        console.log("updation success full")
                    }
                })
                break;
        default : console.log("data not found")
}