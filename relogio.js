function clock(){
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    var hours = document.getElementById('hour').innerHTML = h;
    var minutes = document.getElementById('minutes').innerHTML = m;
    var seconds = document.getElementById('seconds').innerHTML = s;

    if(h < 10){
        h = '0'+h
    } else if(m < 10){
        m = '0'+m
    } else if(s< 10){
        s = '0'+s
    }
}



var intervalo = setInterval(clock, 1000);