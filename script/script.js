/* le ordeno al script cargar una vez el html haya cargado */
window.onload = ()=>{
    /* creo las variables */
        let btnLeft = document.querySelector(".btn__left"),
        btnRight = document.querySelector(".btn__right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".slider__section");
    /* Creo un evento en el boton direccion izquierda del slider */
    
    btnLeft.addEventListener("click", ()=>{
    /* hago un contador con el fin de medir el translado de elementos y poder regresar al primer slide */
        counter--;
        if (counter < 0 ) {
            counter = sliderSection.length-1;
            operacion = widthImg * (sliderSection.length-1)
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none";
            return;
        } 
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
    
    
    })
    /* creo las variables para poder direccionar el slide hacia la derecha */
    let operacion = 0,
        counter = 0,
        widthImg = 100 / sliderSection.length;
    
    btnRight.addEventListener("click", slideRight);
    /* trabajo la funcion slideright como una nombrada para poder determinarla en el
    set interval mas adelante */
    function slideRight(){
    /* hago uso del if como en el boton izquierdo para poder medir el desplazamiento 
    de mis elementos y volver al primer slider una vez se haya llegado al ultimo */
        if (counter >= sliderSection.length-1) {
            counter = 0;
            operacion = 0;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none";
            return;
        } 
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
         
    }
      /* automatizo el slide de imagenes  */  
    setInterval(() => {
        slideRight()
    }, 5000);
    
    }
    
    
    
    
    
    
    
    
    
    