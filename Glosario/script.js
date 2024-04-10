const palabras = [
    {
        ingles : "Adapter",
        español: "Adaptador",
        definicion: "Adapter is a Structural Design Pattern that allows incompatible interfaces between classes to work together without modifying their source code."
    },
    {
        ingles : "Add",
        español: "Agregar",
        definicion :""
    },
    {
        ingles : "Adress",
        español: "Direccion",
        definicion :""
    },
    {
        ingles : "ADSL",
        español: "Linea asimetrica de abonado digital",
        definicion :"(Asimetric Digital Suscriber Line)"
    },
    {
        ingles : "Alphanumeric",
        español: "Alfanumericos",
        definicion :"(Asimetric Digital Suscriber Line)"
    },
    {
        ingles : "Algorithm",
        español: "Algoritmo",
        definicion :"(Asimetric Digital Suscriber Line)"
    },
    {
        ingles : "Storage",
        español: "Almacenamiento",
        definicion :"(Asimetric Digital Suscriber Line)"
    },



]
    function mostrarDefinicion(divDefinicion) {
        if (divDefinicion.style.display === "none") {
            divDefinicion.style.display = "block";
        } else {
            divDefinicion.style.display = "none";
        }
    }

    function crearDiv2(ingles,español,definicion){
        var divPrincipal = document.createElement("div")
        divPrincipal.classList.add("principal")
        var boton = document.createElement("button")
        var divDefinicion = document.createElement("div")
        divDefinicion.innerHTML="Traduccion : "+español+ "<br>" +definicion
        divDefinicion.classList.add("definition")
        divDefinicion.id = "def"
        boton.textContent = ingles
        boton.classList.add('word')
        divPrincipal.appendChild(boton)
        divPrincipal.appendChild(divDefinicion)
        document.body.appendChild(divPrincipal)
        boton.addEventListener("click", function(){
        mostrarDefinicion(divDefinicion)
        })
    }
    palabras.forEach(function(objeto){
        crearDiv2(objeto.ingles,objeto.español,objeto.definicion)
    })