const request=require("request")






    const weather=(locationName,callback)=>{
        request({url:'http://api.weatherstack.com/current?access_key=017aaa59cae2f668bd73c09056b59def&query='+locationName,json:true}, function (error, response) {
     
    //console.log(body);
        //console.log(response.body)
        return callback(undefined,response.body)
        })
    }
    
        






module.exports=weather