const crypto = require("crypto")


const argvs = process.argv

const argv  = argvs.slice(2)
const operations = argv[0]
const num1 = parseInt(argv[1])
const num2 = parseInt(argv[2])
let length = parseInt(argv[3])

switch(operations){
    case "add" : console.log(num1+num2)
    break
    case "sub" : console.log(num1-num2)
    break;
    case "mult" : console.log(num1*num2)
    break;
    case "divide" : console.log(num1/num2)
    break;
    case "sin" : console.log(Math.sin(num1))
    break;
    case "cos" : console.log(Math.cos(num1))
    break;
    case "tan" : console.log(Math.tan(num1))
    break;
    case "random" :
         if(isNaN(num1)){
            Console.log("Provide length for random number generation.")
         }else{
            console.log(crypto.randomBytes(num1).toString("hex"))
         }
         break;
   default : console.log("Default case")
}



