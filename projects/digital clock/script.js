const clock = document.getElementById('clock');

setInterval(function(e) {
    let date = new Date();
    //to display time we use to LocaleTimeString()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);