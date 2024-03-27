

const getUnixAndUTCDate =(stringDate, done)=>{
    
    let date  = new Date(stringDate);
 
   if(isNaN(date.valueOf())){
    const time = parseInt(stringDate)
    if(!isNaN(time)){
        date  = new Date(time);
        //date.setTime(stringDate);
    }else{
        done(null, {error:"Invalid Date"});
    }  
   
    
   }
  
   
    const days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan","Feb", "Mar","Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   // const date  = new Date(unix)
    const utc = days[date.getUTCDay()] + ", " +date.getUTCDate() +" " + months[date.getUTCMonth()] +" " +date.getUTCFullYear()
                + " "+ addZeroToTime(date.getUTCHours())+ ":"+addZeroToTime( date.getUTCMinutes()) + ":"+addZeroToTime( date.getUTCSeconds()) + " " + "GMT";
    done(null,  {unix: date.getTime(), utc: utc});
   
}
function addZeroToTime( t){
    if (t <10 ){
        t= "0" + t
    }
    return t;
}

exports.getUnixAndUTCDate = getUnixAndUTCDate;