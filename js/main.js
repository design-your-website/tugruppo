/*=============================================
EL OBJETO CON LAS PROPIEDADES DEL SCROLL
=============================================*/

var ps = {

    posicionScroll: 0,
    cabezote: document.querySelector("header")

}


/*=============================================
EL OBJETO CON LOS MÉTODOS DEL SCROLL
=============================================*/

var ms = {

    inicioScroll: function() {

        document.addEventListener("scroll", ms.efectoParallax)

    },

    efectoParallax: function() {

        ps.posicionScroll = window.pageYOffset;

        console.log(ps.posicionScroll);

        if (ps.posicionScroll > 104) {

            ps.cabezote.style.position = "fixed";
            ps.cabezote.style.zIndex = 10;


        } else {

            ps.cabezote.style.position = "relative";
            ps.cabezote.style.zIndex = 0;

        }


    }
}


ms.inicioScroll();

/*
El objeto con las propiedades del formulario
*/

var p = {

    entradas: document.querySelectorAll("input.validar"),
    valor: null,
    expresionRegular: null,
    validarTel: false,
    validarEmail: false



}


/*
El objeto con los metodos del formulario
*/

var m = {

    inicioFormulario: function() {

        for (var i = 0; i < p.entradas.length; i++) {

            p.entradas[i].addEventListener("focus", m.enFoco)
            p.entradas[i].addEventListener("blur", m.FueraFoco)
            p.entradas[i].addEventListener("change", m.cambioEntrada)
        }

    },

    enFoco: function(input) {

        p.valor = input.target.value;

        if (p.valor == "") {

            document.querySelector("#" + input.target.id).style.background = "rgba(255,255,0,.5)";

            document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 0;

        }
        document.querySelector("[for=" + input.target.id + "]").appendChild(document.createElement("DIV")).setAttribute("class", "error")

    },
    FueraFoco: function(input) {

        document.querySelector("#" + input.target.id).style.background = "white";

        document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;
    },

    cambioEntrada: function(input) {

        p.valor = input.target.value;

        if (p.valor != "") {



            switch (input.target.id) {



                case "tel":


                    if (p.valor.length < 10 || p.valor.length > 10) {
                        document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">Ingrese su telefono de forma correcta: : ' + input.target.placeholder + '</span>';

                        p.validarTel = false;
                    } else {
                        document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));

                        p.validarTel = true;
                    }



                    break;

                case "email":

                    p.expresionRegular = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

                    if (!p.expresionRegular.test(p.valor)) {

                        document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red">Ingrese su correo de forma correcta: ' + input.target.placeholder + '</span>';

                        p.validarEmail = false;

                    } else {


                        document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));

                        p.validarEmail = true;
                    }



                    break;
            }


        } else {

            document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"))
        }

    },
    validarFormulario: function() {



        if (!!p.validarEmail || !p.validarTel) {


            document.querySelector("#labelEnviar").innerHTML = '<span style="color:red">Tiene errores en los campos ingresados o no los ha completado, revise por favor </span>';


            return false;


        } else {


            return true;
        }


    }
}

m.inicioFormulario();