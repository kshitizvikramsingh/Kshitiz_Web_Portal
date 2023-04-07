
const request=require("request")


const ipData=(value,callback)=>{
        request({url:`https://ipinfo.io/${value}/geo`,json:true},(error,response)=>{
               
        if(error){
                //console.log(error)
                return callback(error, undefined)
        }
        else{
                //console.log(response.body)
                return callback(undefined,response.body)
        }
        })  
}

module.exports=ipData
 
        





