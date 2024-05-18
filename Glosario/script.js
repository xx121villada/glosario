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
        ingles : "Augmented Reality",
        español: "Realidad aumentada",
        definicion : "It's a technology that combines real-world elements with computer-generated virtual elements in real-time"
    },
    {
        ingles : "Authentication",
        español: "Autentificacion",
        definicion : "The process of verifying the identity of a user or system."
    },
    {
        ingles : "Autocomplete",
        español: "Autocompletar",
        definicion : "A feature that predicts and completes words or phrases in a search or input field."
    },
    {
        ingles : "Automation",
        español: "Automatizacion",
        definicion : "The use of technology to perform tasks without human intervention."
    },
    {
        ingles : "Azure",
        español: "Azure",
        definicion : "Microsoft's cloud computing platform and services."
    },
    {
        ingles : "Backbone",
        español: "Backbone",
        definicion : "The main infrastructure or support system of a network or application."
    },
    {
        ingles : "Back-end",
        español: "Back-end",
        definicion : "The server-side of a software application or system."
    },
    {
        ingles : "Binary",
        español: "Binario",
        definicion : " A numbering system with only two digits, typically 0 and 1, used in computing."
    },
    {
        ingles : "BIOS",
        español: "Sistema Basico De Entrada y Salida",
        definicion : " Basic Input/Output System; firmware used to initialize hardware during the boot process."
    },
    {
        ingles : "Bits",
        español: "Bites",
        definicion : "The smallest unit of data in computing, representing a 0 or 1 in the binary numbering system."
    },
    {
        ingles : "Blockchain",
        español: "Cadena de bloques",
        definicion : "A decentralized, distributed ledger technology used for secure and transparent transactions."
    },
    {
        ingles : "Bond",
        español: "Vinculo",
        definicion : "A connection or link between two or more elements."
    },
    {
        ingles : "Boolean",
        español: "Booleano",
        definicion : "A data type with two possible values, typically true or false."
    },
    {
        ingles : "Branch",
        español: "Rama",
        definicion : "A distinct line of development within a version control system or software project."
    },
    {
        ingles : "Breackpoint",
        español: "Punto de interrupcion",
        definicion : "A designated point in a program's code where execution temporarily stops for debugging."
    },
    {
        ingles : "Broadband",
        español: "Banda ancha",
        definicion : " High-speed internet access with a wide bandwidth."
    },
    {
        ingles : "Browser",
        español: "Explorador",
        definicion : " A software application used to access and view information on the internet."
    },
    {
        ingles : "Bug",
        español: "Error",
        definicion : "An error, flaw, or defect in a software program or system."
    },
    {
        ingles : "C++",
        español: "C++",
        definicion : "is a powerful and versatile programming language used to create computer programs, applications, software, and more."
    },
    {
        ingles : "Caché",
        español: "Cache",
        definicion : " A temporary storage area that stores frequently accessed data for quick retrieval."
    },
    {
        ingles : "Case",
        español: "Caso",
        definicion : "A specific scenario or condition within a program or system."
    },
    {
        ingles : "Chain of responsibility",
        español: "Cadena de Responsabilidad",
        definicion : "A design pattern where multiple objects in a chain handle a request, passing it along until it's processed."
    },
    {
        ingles : "Chip",
        español: "Chip",
        definicion : "An integrated circuit or semiconductor device used in electronic devices."
    },
    {
        ingles : "Case",
        español: "Caso",
        definicion : "It's a technology that combines real-world elements with computer-generated virtual elements in real-time"
    },
    {
        ingles : "Chipset",
        español: "Conjunto De Chips",
        definicion : "A set of chips on a motherboard that controls the communication between the CPU and other components."
    },
    {
        ingles : "Class",
        español: "Clase",
        definicion : " A blueprint for creating objects in object-oriented programming, defining properties and methods."
    },
    {
        ingles : "Click",
        español: "Clic",
        definicion : "The act of pressing a button on a mouse or tapping on a touchscreen"
    },
    {
        ingles : "Client",
        español: "Cliente",
        definicion : "A device or application that requests services or resources from a server."
    },
    {
        ingles : "Clone",
        español: "Clonar",
        definicion : "To make an identical copy of something, such as a file, repository, or object."
    },
    {
        ingles : "Cloud",
        español: "Nube",
        definicion : "A network of remote servers hosted on the internet for storing, managing, and processing data. "
    },
    {
        ingles : "Cloud service",
        español: "Servicio en la nube",
        definicion : "A service provided over the internet using cloud computing infrastructure."
    },
    {
        ingles : "Cmd",
        español: "Simbolo Del Sistema",
        definicion : "Command Prompt; a command-line interpreter for executing commands in Windows operating systems."
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