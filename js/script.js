function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours() 
    var minute = date.getMinutes()  
    msg.innerHTML = `Now it's ${hour}:${minute}.`
    if (hour >= 0 && hour < 12) {
        img.src ='./images/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour <= 18){
        img.src ='./images/evening.png'
        document.body.style.background = '#7FFFD4'
    } else {
        img.src ='./images/night.png'
        document.body.style.background = '#708090'
    }

}
