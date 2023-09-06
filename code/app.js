function Displaytime(){
    var DateTime = new Date();
    var Hoursetime = DateTime.getHours();
    var minutestime = DateTime.getMinutes();
    var Secondtime = DateTime.getSeconds();
    var session  = document.getElementById('toggle');
    if(toggle>=18){
        toggle.innerHTML="PM"

    }
    else{
        toggle.innerHTML ="AM"
    }
    document.getElementById('hours').innerHTML =Hoursetime;
    document.getElementById('minutes').innerHTML=minutestime;
    document.getElementById('second').innerHTML = Secondtime;

}
setInterval(Displaytime,10);