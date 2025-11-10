const clock = document.getElementById('clock')

// setinterval function to update clock every second
setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);