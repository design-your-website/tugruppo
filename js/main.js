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
