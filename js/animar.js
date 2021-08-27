let animado = document.querySelectorAll(".animado");

const typed= new Typed('.typed',{
    strings: ['<i class = "maquina">creatividad.</i>',
    '<i class = "maquina">cultura.</i>',
    '<i class = "maquina">aptitud.</i>'
],
loop:true,
typeSpeed:75,
startDelay:500,
backSpeed:75,
loopCount:false,
});

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0;i < animado.length;i++){

        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 900 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}
window.addEventListener('scroll',mostrarScroll);
