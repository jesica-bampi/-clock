function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var minutes = data.getMinutes()  
    //var hora = 8
    msg.innerHTML = `Agora são ${hora}:${minutes} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = './images/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = './images/tarde.png'
        document.body.style.background = '#7FFFD4'
    } else {
        //Boa noite!
        img.src = './images/noite.png'
        document.body.style.background = '#708090'
    }

}
