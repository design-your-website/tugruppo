var p = {

  imgGaleria: document.querySelectorAll("#galeria ul li img"),
  rutaImagen: null,
  cuerpoDom: document.querySelector("body"),
  lightbox: null,
  modal: null,
  animacionGaleria: "fade"
}

var m = {
  inicioGaleria: function() {
    for (var i = 0; i < p.imgGaleria.length; i++) {
      p.imgGaleria[i].addEventListener("click", m.capturaImagen)
    }
  },

  capturaImagen: function(img) {
    p.rutaImagen = img.target;
    m.lightbox(p.rutaImagen)
  },

  lightbox: function(img) {
    p.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
    p.lightbox = document.querySelector("#lightbox");

    p.lightbox.style.width = "100%";
    p.lightbox.style.height = "100%";
    p.lightbox.style.position = "fixed";
    p.lightbox.style.zIndex = "10";
    p.lightbox.style.background = "rgba(0,0,0,.8)";
    p.lightbox.style.top = 0;
    p.lightbox.style.lefts = 0;

    p.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
    p.modal = document.querySelector("#modal");

    p.modal.innerHTML = img.outerHTML + "<div>x</div>";

    p.modal.style.display = "block";
		p.modal.style.position = "relative";
    p.modal.childNodes[0].style.width = "100%";
    p.modal.childNodes[0].style.border = "15px solid white";

    if (window.matchMedia("(max-width:1000px)").matches) {
      p.modal.style.width = "90%";
    } else {
      p.modal.style.width = "60%";
    }
    //Se desliza la imagen de forma horizontal
    if (p.animacionGaleria == "slideLeft") {

      p.modal.style.top = "50%";
      p.modal.style.left = 0;
      p.modal.style.opacity = 0;

      setTimeout(function() {

        p.modal.style.transition = ".5s left ease";
        p.modal.style.left = "50%";
        p.modal.style.opacity = 1;
        p.modal.style.marginLeft = -p.modal.childNodes[0].width / 2 + "px";
        p.modal.style.marginTop = -p.modal.childNodes[0].height / 2 + "px";

      }, 50)
    }
//Se desliza la imagen de forma vertical
    if (p.animacionGaleria == "slideTop") {

      p.modal.style.top = "-100%";
      p.modal.style.left = "20%";
      p.modal.style.opacity = 0;

      setTimeout(function() {

        p.modal.style.transition = ".5s top ease";
        p.modal.style.top = "5%";
        p.modal.style.opacity = 1;
        p.modal.marginLeft = -p.modal.childNodes[0].width / 2 + "px";
        p.modal.marginTop = -p.modal.childNodes[0].height / 2 + "px";

      }, 50)
    }


    p.modal.childNodes[1].style.position = "absolute";
    p.modal.childNodes[1].style.right = "5px";
    p.modal.childNodes[1].style.top = "5px";
    p.modal.childNodes[1].style.color = "silver";
    p.modal.childNodes[1].style.cursor = "pointer";
    p.modal.childNodes[1].style.fontSize = "30px";
    p.modal.childNodes[1].style.width = "40px";
    p.modal.childNodes[1].style.height = "40px";
    p.modal.childNodes[1].style.textAlign = "center";
    p.modal.childNodes[1].style.background = "white";
    p.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px"

    p.modal.childNodes[1].addEventListener("click", m.salirGaleria)

  },
  salirGaleria: function() {
    p.lightbox.parentNode.removeChild(p.lightbox);
  }

}
m.inicioGaleria();
