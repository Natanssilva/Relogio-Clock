
           var educado = document.getElementById('educado')
           var data = new Date()
           var horas = data.getHours()

           if(horas < 12){
               educado.innerHTML = 'Good Morning'
           } else if( horas <= 18){
               educado.innerHTML = 'Good Afternoon'
           } else{
               educado.innerHTML = 'Good Evening'
           }
       
       function DayWeek(){
           var clock = document.getElementById('clock') 
           var data = new Date()
           var DayWeek = data.getDay()

           switch(DayWeek){ 
            case 0:
                clock.innerHTML = 'Monday'
                 break
            case 1:
                clock.innerHTML = 'Sunday'
                 break
            case 2:
                clock.innerHTML = 'Tuesday'
                 break
            case 3:
                clock.innerHTML = 'Wednesday'
                 break
            case 4:
                clock.innerHTML = 'Thursday'
                 break
            case 5:
                clock.innerHTML = 'Friday'
                 break
            case 6:
                clock.innerHTML = 'Saturday'
                 break
           }
       
       }
       function clock(){
           var data = new Date()
           var horas = data.getHours()
           var minutos = data.getMinutes()
           var segundos = data.getSeconds()

           if(horas < 10){
               horas = '0'+horas
           } else if(minutos < 10){
               minutos = '0'+minutos
           } else if(segundos < 10){
               segundos = '0'+segundos
           }
           document.querySelector('#clock').innerHTML= horas+':'+minutos+':'+segundos
        }
        window.setInterval('clock()', 3000)