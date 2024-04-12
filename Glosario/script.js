const palabras = [
    {
        ingles : "Abstract",
        español: "Abstracto",
        definicion: "Ability to represent and handle complex concepts in a simplified manner.the ability to simplify the real world and turn it into a black box containing only the essential information"
    },
    {
        ingles : "Adapter",
        español: "Adaptador",
        definicion :"A structural design pattern that allows collaboration between objects with incompatible interfaces and provides an additional layer of abstraction to allow objects to work together"
    },
    {
        ingles : "Add",
        español: "Agregar",
        definicion :"It's a command to add items or data"
    },
    {
        ingles : "Address",
        español: "Direccion",
        definicion :"refers to a number in a given memory or peripheral storage location"
    },
    {
        ingles : "Address bar",
        español: "Barra de direcciones",
        definicion :"It is a text field, where you can enter URLs to access a website directly"
    },
    {
        ingles : "ADSL",
        español: "Línea de Abonado Digital Asimétrica",
        definicion :"A technology for digital data transmission and Internet access.This technology uses the traditional telephone line to transmit digital information in an analog manner through the symmetrical copper pair cable."
    },
    {
        ingles : "Algorithm",
        español: "Algoritmo",
        definicion :" You can think of a programming algorithm as a recipe that outlines the exact steps needed for the computer to solve a problem or reach a goal"
    },
    {
        ingles : "Alphanumeric",
        español: "Alfanumericos",
        definicion :"It refers to a type of data that contains both letters and numbers"
    },
    {
        ingles : "Alternative",
        español: "Alternativa",
        definicion :"A control instruction that allows you to select, in the control flow of a program, the next instruction or instructions to be executed, from among several possibilities"
    },
    {
        ingles : "Amperage",
        español: "Amperaje",
        definicion :"Amperage is a measurement that indicates the amount of electrical charge flowing through a circuit in a given time"
    },
    {
        ingles : "Analyst",
        español: "Analista",
        definicion :"It is a professional in charge of analyzing and designing solutions for specific computer problems1. Your job is to take a problem or need from a customer and transform it into functional software"
    },
    {
        ingles : "And",
        español: "Y",
        definicion :"It is an operator used in Boolean operations, which returns true if all conditions are met"
    },
    {
        ingles : "Android",
        español: "Android",
        definicion :"Android is an open-source operating system for smart devices such as mobiles or tablets"
    },
    {
        ingles : "Angular",
        español: "Angular",
        definicion :"Angular is an open-source framework developed by Google that is used to create web applications"
    },
    {
        ingles : "Api",
        español: "Interfaz de Programación de Aplicaciones",
        definicion :"An API (Application Programming Interface) is a set of definitions and protocols used to design and integrate application software"
    },    {
        ingles : "Apple",
        español: "Apple",
        definicion :"It is a multinational technology company that develops and sells electronic products and software"
    },
    {
        ingles : "Aplication",
        español: "Aplicacion",
        definicion :"It is a software program designed to perform a specific task or set of related tasks"
    },
    {
        ingles : "Argument",
        español: "Argumento",
        definicion : "It is a value that is passed to a function or procedure when it is invoked"
    },
    {
        ingles : "Arithmetic",
        español: "Aritmetico",
        definicion : "It refers to the use of arithmetic operators to perform calculations and manipulate numerical data"
    },
    {
        ingles : "Arithmetic operation",
        español: "Operacion aritmetica",
        definicion : "son las acciones que se realizan con estos operadores: addition, subtraction, multiplication, division, etc..."
    },
    {
        ingles : "Artificial intelligence ",
        español: "Inteligencia Articial",
        definicion : " It is a field of study within computer science that focuses on the creation of systems and algorithms that can mimic human intelligence"
    },
    {
        ingles : "ASCII",
        español: "Código Estándar Americano para el Intercambio de Información",
        definicion : " This code is used to convert, through a series of rules, a character that is part of a natural language (such as a letter of an alphabet) into a symbol that belongs to another representative system"
    },
    {
        ingles : "Aspect-oriented programming",
        español: "Programacion orientada a aspectos",
        definicion : "It is a programming paradigm that allows an adequate modularization of applications and enables a better separation of responsibilities"
    },
    {
        ingles : "Assignment operators",
        español: "Operadores de asignacion",
        definicion : "They are a type of operator used to store a value in a variable"
    },
    {
        ingles : "Assignment",
        español: "Asignacion",
        definicion : "Assignment allows you to give a specific value to a variable, whether numeric, text, or otherwise, for later use in the program"
    },
    {
        ingles : "Assistant",
        español: "Asistente",
        definicion : "It is a program that guides the user step by step and in an instructive way in the performance of a process"
    },
    {
        ingles : "Attachment",
        español: "Adjunto",
        definicion : "refers to a file or file that is linked to or attached to something, such as an email"
    },
    {
        ingles : "Attributes",
        español: "Atributos",
        definicion : "It is a characteristic or property that is assigned to an object, variable, or code element"
    },
    {
        ingles : "Audio",
        español: "Audio",
        definicion : "A technique for recording, transmitting, and reproducing sounds"
    },
    {
        ingles : "augmented reality",
        español: "Realidad aumentada",
        definicion : "It's a technology that combines real-world elements with computer-generated virtual elements in real-time"
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