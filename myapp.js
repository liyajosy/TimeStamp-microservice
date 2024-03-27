

const getUnixAndUTCDate =(date_string, done)=>{
    
    let date  = new Date(date_string);
    
    
   if(!isNaN(date.valueOf())){
         return  done(null,  {unix: date.getTime(), utc: date.toUTCString()});
   } else{
    const time = parseInt(date_string)
    if(isNaN(time)){
        
        return done( {error:"Invalid Date"}, null);
    }else{        
        date  = new Date(time);
        console.log("2 toUTCString():"+date.toUTCString());
  
        return done(null,  {unix: date.getTime(), utc: date.toUTCString()});
    } 
   }
 
  
  
   
}
function addZeroToTime( t){
    if (t <10 ){
        t= "0" + t
    }
    return t;
}

exports.getUnixAndUTCDate = getUnixAndUTCDate;