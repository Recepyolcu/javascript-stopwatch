
    var seconds = 00;
    var tens = 00;
    
    var startBtn = document.getElementById("start-btn");
    var stopBtn = document.getElementById("stop-btn");
    var resetBtn = document.getElementById("reset-btn");
    
    var secondsText = document.getElementById("seconds");
    var tensText = document.getElementById("tens");
    
    var Interval ;
    
    startBtn.addEventListener("click", function () {
        clearInterval(Interval);
        Interval = setInterval(timer, 10);
    });   
    
    stopBtn.addEventListener("click" ,function () {
        clearInterval(Interval);
    });
    
    resetBtn.onclick = function () {
        clearInterval(Interval);
        seconds = 00;
        tens = 00;
        secondsText.innerHTML = "0" + seconds.toString();
        tensText.innerHTML = "0" + tens.toString();
    }
    
    function timer(){
        tens++;
        if (tens <= 9) {
            tensText.innerHTML = "0" + tens;
        }
        else if (tens > 9) {
            tensText.innerHTML = tens;
        }
        
        if (tens > 99) {
            tens = 0;
            tensText.innerHTML = "0" + tens;
            seconds++;
            secondsText.innerHTML = "0" + seconds;
        }
    
        if (seconds > 9) {
            secondsText.innerHTML = seconds.toString();
        }
        
        if (seconds > 59) {
            clearInterval(Interval);
            seconds = 0;
            tens = 0;
            secondsText.innerHTML = "0" + seconds;
            tensText.innerHTML = "0" + tens;
            window.alert("timeout");
        }
    }
 
