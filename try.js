function cargar() {
    let images = ["imgs/vertical/arbol.png","imgs/horizontal/bayocheta.png","imgs/vertical/coche.png","imgs/cuadrado/copo.png","imgs/vertical/gato.png", "imgs/cuadrado/fuego.png","imgs/horizontal/eyes.png","imgs/vertical/blasfemo.png","imgs/horizontal/bici.png","imgs/cuadrado/mante.png", "imgs/horizontal/helldiver_sample art.png", "imgs/cuadrado/gamez.png"];
    for (i=0; i<12;i++) {
        document.getElementById("i"+i).src = images[i];
    }
    if ("loading" in HTMLImageElement.prototype) {
        console.log("El navegador soporta `lazy-loading`...");
    } else {
        console.log("`lazy-loading` no soportado...");
    }
    

}