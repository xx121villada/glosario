// Obtener el campo de entrada por su ID
const inputBusqueda = document.getElementById('busqueda');



const palabras = [
    {
        ingles: "Abstract",
        español: "Abstracto",
        definicion: "Ability to represent and handle complex concepts in a simplified manner.the ability to simplify the real world and turn it into a black box containing only the essential information"
    },
    {
        ingles: "Adapter",
        español: "Adaptador",
        definicion: "A structural design pattern that allows collaboration between objects with incompatible interfaces and provides an additional layer of abstraction to allow objects to work together"
    },
    {
        ingles: "Add",
        español: "Agregar",
        definicion: "It's a command to add items or data"
    },
    {
        ingles: "Address",
        español: "Direccion",
        definicion: "refers to a number in a given memory or peripheral storage location"
    },
    {
        ingles: "Address bar",
        español: "Barra de direcciones",
        definicion: "It is a text field, where you can enter URLs to access a website directly"
    },
    {
        ingles: "ADSL",
        español: "Línea de Abonado Digital Asimétrica",
        definicion: "A technology for digital data transmission and Internet access.This technology uses the traditional telephone line to transmit digital information in an analog manner through the symmetrical copper pair cable."
    },
    {
        ingles: "Algorithm",
        español: "Algoritmo",
        definicion: " You can think of a programming algorithm as a recipe that outlines the exact steps needed for the computer to solve a problem or reach a goal"
    },
    {
        ingles: "Alphanumeric",
        español: "Alfanumericos",
        definicion: "It refers to a type of data that contains both letters and numbers"
    },
    {
        ingles: "Alternative",
        español: "Alternativa",
        definicion: "A control instruction that allows you to select, in the control flow of a program, the next instruction or instructions to be executed, from among several possibilities"
    },
    {
        ingles: "Amperage",
        español: "Amperaje",
        definicion: "Amperage is a measurement that indicates the amount of electrical charge flowing through a circuit in a given time"
    },
    {
        ingles: "Analyst",
        español: "Analista",
        definicion: "It is a professional in charge of analyzing and designing solutions for specific computer problems1. Your job is to take a problem or need from a customer and transform it into functional software"
    },
    {
        ingles: "And",
        español: "Y",
        definicion: "It is an operator used in Boolean operations, which returns true if all conditions are met"
    },
    {
        ingles: "Android",
        español: "Android",
        definicion: "Android is an open-source operating system for smart devices such as mobiles or tablets"
    },
    {
        ingles: "Angular",
        español: "Angular",
        definicion: "Angular is an open-source framework developed by Google that is used to create web applications"
    },
    {
        ingles: "Api",
        español: "Interfaz de Programación de Aplicaciones",
        definicion: "An API (Application Programming Interface) is a set of definitions and protocols used to design and integrate application software"
    }, {
        ingles: "Apple",
        español: "Apple",
        definicion: "It is a multinational technology company that develops and sells electronic products and software"
    },
    {
        ingles: "Aplication",
        español: "Aplicacion",
        definicion: "It is a software program designed to perform a specific task or set of related tasks"
    },
    {
        ingles: "Argument",
        español: "Argumento",
        definicion: "It is a value that is passed to a function or procedure when it is invoked"
    },
    {
        ingles: "Arithmetic",
        español: "Aritmetico",
        definicion: "It refers to the use of arithmetic operators to perform calculations and manipulate numerical data"
    },
    {
        ingles: "Arithmetic operation",
        español: "Operacion aritmetica",
        definicion: "son las acciones que se realizan con estos operadores: addition, subtraction, multiplication, division, etc..."
    },
    {
        ingles: "Artificial intelligence ",
        español: "Inteligencia Articial",
        definicion: " It is a field of study within computer science that focuses on the creation of systems and algorithms that can mimic human intelligence"
    },
    {
        ingles: "ASCII",
        español: "Código Estándar Americano para el Intercambio de Información",
        definicion: " This code is used to convert, through a series of rules, a character that is part of a natural language (such as a letter of an alphabet) into a symbol that belongs to another representative system"
    },
    {
        ingles: "Aspect-oriented programming",
        español: "Programacion orientada a aspectos",
        definicion: "It is a programming paradigm that allows an adequate modularization of applications and enables a better separation of responsibilities"
    },
    {
        ingles: "Assignment operators",
        español: "Operadores de asignacion",
        definicion: "They are a type of operator used to store a value in a variable"
    },
    {
        ingles: "Assignment",
        español: "Asignacion",
        definicion: "Assignment allows you to give a specific value to a variable, whether numeric, text, or otherwise, for later use in the program"
    },
    {
        ingles: "Assistant",
        español: "Asistente",
        definicion: "It is a program that guides the user step by step and in an instructive way in the performance of a process"
    },
    {
        ingles: "Attachment",
        español: "Adjunto",
        definicion: "refers to a file or file that is linked to or attached to something, such as an email"
    },
    {
        ingles: "Attributes",
        español: "Atributos",
        definicion: "It is a characteristic or property that is assigned to an object, variable, or code element"
    },
    {
        ingles: "Audio",
        español: "Audio",
        definicion: "A technique for recording, transmitting, and reproducing sounds"
    },
    {
        ingles: "Augmented Reality",
        español: "Realidad aumentada",
        definicion: "It's a technology that combines real-world elements with computer-generated virtual elements in real-time"
    },
    {
        ingles: "Authentication",
        español: "Autentificacion",
        definicion: "The process of verifying the identity of a user or system."
    },
    {
        ingles: "Autocomplete",
        español: "Autocompletar",
        definicion: "A feature that predicts and completes words or phrases in a search or input field."
    },
    {
        ingles: "Automation",
        español: "Automatizacion",
        definicion: "The use of technology to perform tasks without human intervention."
    },
    {
        ingles: "Azure",
        español: "Azure",
        definicion: "Microsoft's cloud computing platform and services."
    },
    {
        ingles: "Backbone",
        español: "Backbone",
        definicion: "The main infrastructure or support system of a network or application."
    },
    {
        ingles: "Back-end",
        español: "Back-end",
        definicion: "The server-side of a software application or system."
    },
    {
        ingles: "Binary",
        español: "Binario",
        definicion: " A numbering system with only two digits, typically 0 and 1, used in computing."
    },
    {
        ingles: "BIOS",
        español: "Sistema Basico De Entrada y Salida",
        definicion: " Basic Input/Output System; firmware used to initialize hardware during the boot process."
    },
    {
        ingles: "Bits",
        español: "Bites",
        definicion: "The smallest unit of data in computing, representing a 0 or 1 in the binary numbering system."
    },
    {
        ingles: "Blockchain",
        español: "Cadena de bloques",
        definicion: "A decentralized, distributed ledger technology used for secure and transparent transactions."
    },
    {
        ingles: "Bond",
        español: "Vinculo",
        definicion: "A connection or link between two or more elements."
    },
    {
        ingles: "Boolean",
        español: "Booleano",
        definicion: "A data type with two possible values, typically true or false."
    },
    {
        ingles: "Branch",
        español: "Rama",
        definicion: "A distinct line of development within a version control system or software project."
    },
    {
        ingles: "Breackpoint",
        español: "Punto de interrupcion",
        definicion: "A designated point in a program's code where execution temporarily stops for debugging."
    },
    {
        ingles: "Broadband",
        español: "Banda ancha",
        definicion: " High-speed internet access with a wide bandwidth."
    },
    {
        ingles: "Browser",
        español: "Explorador",
        definicion: " A software application used to access and view information on the internet."
    },
    {
        ingles: "Bug",
        español: "Error",
        definicion: "An error, flaw, or defect in a software program or system."
    },
    {
        ingles: "Builder",
        español: "Constructor",
        definicion: "Method in object-oriented programming languages ​​that is called automatically when an instance of a class is created. Typically initializes the state of the object or performs other configuration tasks."
    },
    {
        ingles: "C++",
        español: "C++",
        definicion: "is a powerful and versatile programming language used to create computer programs, applications, software, and more."
    },
    {
        ingles: "Caché",
        español: "Cache",
        definicion: " A temporary storage area that stores frequently accessed data for quick retrieval."
    },
    {
        ingles: "Case",
        español: "Caso",
        definicion: "A specific scenario or condition within a program or system."
    },
    {
        ingles: "Chain of responsibility",
        español: "Cadena de Responsabilidad",
        definicion: "A design pattern where multiple objects in a chain handle a request, passing it along until it's processed."
    },
    {
        ingles: "Chip",
        español: "Chip",
        definicion: "An integrated circuit or semiconductor device used in electronic devices."
    },
    {
        ingles: "Case",
        español: "Caso",
        definicion: "It's a technology that combines real-world elements with computer-generated virtual elements in real-time"
    },
    {
        ingles: "Chipset",
        español: "Conjunto De Chips",
        definicion: "A set of chips on a motherboard that controls the communication between the CPU and other components."
    },
    {
        ingles: "Class",
        español: "Clase",
        definicion: " A blueprint for creating objects in object-oriented programming, defining properties and methods."
    },
    {
        ingles: "Click",
        español: "Clic",
        definicion: "The act of pressing a button on a mouse or tapping on a touchscreen"
    },
    {
        ingles: "Client",
        español: "Cliente",
        definicion: "A device or application that requests services or resources from a server."
    },
    {
        ingles: "Clone",
        español: "Clonar",
        definicion: "To make an identical copy of something, such as a file, repository, or object."
    },
    {
        ingles: "Cloud",
        español: "Nube",
        definicion: "A network of remote servers hosted on the internet for storing, managing, and processing data. "
    },
    {
        ingles: "Cloud service",
        español: "Servicio en la nube",
        definicion: "A service provided over the internet using cloud computing infrastructure."
    },
    {
        ingles: "Cmd",
        español: "Simbolo Del Sistema",
        definicion: "Command Prompt; a command-line interpreter for executing commands in Windows operating systems."
    },
    {
        ingles: "CMOS",
        español: "Semiconductor complementario de oxido metalico",
        definicion: "Complementary Metal-Oxide-Semiconductor, a technology used in the creation of integrated circuits, particularly for the semiconductor chips used in most modern computer processors."
    },
    {
        ingles: "Code",
        español: "Codigo",
        definicion: " A set of instructions written in a programming language that a computer can understand and execute to perform a specific task."
    },
    {
        ingles: "Command",
        español: "Comando",
        definicion: "A directive given to a computer program or operating system to perform a specific task or function."
    },
    {
        ingles: "Comments",
        español: "Comentarios",
        definicion: "Annotations within source code that are ignored by the compiler or interpreter but provide information for humans reading the code to understand its purpose, logic, or usage."
    },
    {
        ingles: "Commit",
        español: "Confirmar",
        definicion: "In version control systems, such as Git, to save changes to a repository along with a descriptive message explaining the changes made."
    },
    {
        ingles: "Comparison Operation",
        español: "Operación de comparación ",
        definicion: " A binary operation that determines the relationship between two values, such as equality, inequality, or order."
    },
    {
        ingles: "Comparison",
        español: "Comparación",
        definicion: "The act of evaluating the similarity or difference between two or more items or values."
    },
    {
        ingles: "Compilation",
        español: "Compilación",
        definicion: "The process of translating source code written in a high-level programming language into machine code or bytecode that can be executed by a computer."
    },
    {
        ingles: "Compiler",
        español: "Compilador",
        definicion: "A program that translates source code written in a high-level programming language into machine code or bytecode."
    },
    {
        ingles: "Computer Audit",
        español: "Auditoria Informatica",
        definicion: "The process of examining and evaluating a computer system's operations, controls, and security measures to ensure compliance with established standards and policies."
    },
    {
        ingles: "Conditionals",
        español: "Condicionales",
        definicion: "Statements in programming that execute different actions depending on whether a certain condition evaluates to true or false."
    },
    {
        ingles: "Constants",
        español: "Constantes",
        definicion: "Variables whose values do not change during the execution of a program. "
    },
    {
        ingles: "Continue",
        español: "Continuar",
        definicion: "A keyword in programming languages used to skip the current iteration of a loop and continue with the next iteration."
    },
    {
        ingles: "Control Panel",
        español: "Panel De Control",
        definicion: "A graphical user interface component in an operating system that allows users to configure system settings and preferences."
    },
    {
        ingles: "Cookies",
        español: "Galletas",
        definicion: "Small pieces of data stored on a user's computer by a website, typically used to track and store information about the user's browsing activities."
    },
    {
        ingles: "Cooling",
        español: "Refrigeracion",
        definicion: "The process of reducing the temperature of computer hardware components to prevent overheating and maintain optimal performance."
    },
    {
        ingles: "CPU Socket",
        español: "Zocalo de CPU",
        definicion: "The mechanical component on a computer's motherboard that houses the CPU (central processing unit) and provides electrical connections between the CPU and the motherboard."
    },
    {
        ingles: "Cracker",
        español: "Galleta",
        definicion: "A person who attempts to gain unauthorized access to computer systems or networks for malicious purposes."
    },
    {
        ingles: "CRUD",
        español: "Crear, leer, actualizar y borrar",
        definicion: " Acronym for Create, Read, Update, Delete, referring to the basic operations performed on data in a database or application."
    },
    {
        ingles: "CSS",
        español: "Hojas De Estilo en Cascada",
        definicion: "Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in a markup language like HTML."
    },
    {
        ingles: "Cursor",
        español: "Cursor",
        definicion: " A movable indicator on a computer screen that marks the current position for input or output operations."
    },
    {
        ingles: "Cybersecurity",
        español: "Ciber Seguridad",
        definicion: "The practice of protecting computer systems, networks, and data from digital attacks, unauthorized access, and other cyber threats."
    },
    {
        ingles: "Cycles",
        español: "Ciclos",
        definicion: "A unit of time in computer processing, typically referring to the number of clock cycles required to execute an instruction or perform a task."
    },
    {
        ingles: "DAC",
        español: "Conversor de señal digital analogica",
        definicion: "Digital-to-Analog Converter, a device that converts digital signals into analog signals."
    },
    {
        ingles: "Dart",
        español: "Dart",
        definicion: "A programming language developed by Google, used for building web, server, desktop, and mobile applications."
    },
    {
        ingles: "Data",
        español: "Datos",
        definicion: "Information that is processed, stored, or transmitted by a computer."
    },
    {
        ingles: "Data Structure",
        español: "Estructura de datos",
        definicion: "A specialized format for organizing and storing data in a computer system to facilitate efficient access and manipulation."
    },
    {
        ingles: "Database",
        español: "Base de datos",
        definicion: " A structured collection of data organized and stored in a computer system, typically for easy access, retrieval, and management."
    },
    {
        ingles: "Debugging",
        español: "Depuracion",
        definicion: "The process of identifying and fixing errors, bugs, or defects in software code."
    },
    {
        ingles: "Declarative",
        español: "Declarativo",
        definicion: "A programming paradigm that expresses the logic of a computation without specifying its control flow."
    },
    {
        ingles: "Decrement",
        español: "Decremento",
        definicion: "A unary operation that decreases the value of a variable by one."
    },
    {
        ingles: "Default",
        español: "Predeterminado",
        definicion: " A pre-established setting, value, or option used when no alternative is specified."
    },
    {
        ingles: "Dependency Injection",
        español: "Inyeccion de dependencias",
        definicion: "A design pattern in which the dependencies of a component are supplied from the outside rather than created internally."
    },
    {
        ingles: "Deployment",
        español: "Despliegue",
        definicion: "The process of making a software application or system available for use in a production environment."
    },
    {
        ingles: "Desing Patterns",
        español: "Despliegue",
        definicion: " Reusable solutions to common software design problems that help promote code reuse, flexibility, and maintainability."
    },
    {
        ingles: "Desktop",
        español: "Escritorio",
        definicion: "The primary graphical user interface of an operating system, typically displaying icons, windows, and other graphical elements."
    },
    {
        ingles: "Devc",
        español: "Devc",
        definicion: "An integrated development environment (IDE) for the C programming language."
    },
    {
        ingles: "Developer",
        español: "Desarrollador",
        definicion: "A person who designs, creates, and maintains software applications or systems."
    },
    {
        ingles: "Development environment",
        español: "Ambiente de desarrollo",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Dialog box",
        español: "Cuadro de dialogo",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Dictionary",
        español: "Diccionario",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Digitize",
        español: "Digitalizar",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "DIMM slot",
        español: "Ranura DIMM",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Distributed programming",
        español: "Programacion distribuida",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Documentation",
        español: "Documentacion",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "DOM",
        español: "DOM",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Domain",
        español: "Dominio",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Double",
        español: "Double",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Download",
        español: "Descargar",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Domain",
        español: "Dominio",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Domain",
        español: "Dominio",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Drive",
        español: "Drive",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Dynamic",
        español: "Dinamico",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Encapsulation",
        español: "Encapsulamiento",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Encoding",
        español: "Codificacion",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Encryption",
        español: "Encriptacion",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Enter",
        español: "Enter",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Entity",
        español: "Entidad",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Enumeration",
        español: "Enumeracion",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Enviroment variables",
        español: "Variables de entorno",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Ethernet connector",
        español: "Conector ethernet",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Even-driven programming",
        español: "Programacion orientada a obejtos",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Exeption",
        español: "Exepcion",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Execution",
        español: "Ejecucion",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Fan",
        español: "Ventilador",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Field",
        español: "Campo",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "File",
        español: "Archivo",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Firewall",
        español: "Firewall",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },

    {
        ingles: "Float",
        español: "Float",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
    {
        ingles: "Flow control",
        español: " Control de flujo",
        definicion: "The set of tools, libraries, and configurations used by developers to write, test, and debug software applications."
    },
]

function mostrarDefinicion(divDefinicion) {
    if (divDefinicion.style.display === "none") {
        divDefinicion.style.display = "block";
    } else {
        divDefinicion.style.display = "none";
    }
}

function crearDiv2(ingles, español, definicion) {
    var divPrincipal = document.createElement("div")
    divPrincipal.classList.add("principal")
    var boton = document.createElement("button")
    var divDefinicion = document.createElement("div")
    divDefinicion.innerHTML = "Traduccion : " + español + "<br>" + definicion
    divDefinicion.classList.add("definition")
    divDefinicion.id = "def"
    boton.textContent = ingles
    boton.classList.add('word')
    divPrincipal.appendChild(boton)
    divPrincipal.appendChild(divDefinicion)
    document.body.appendChild(divPrincipal)
    boton.addEventListener("click", function () {
        mostrarDefinicion(divDefinicion)
    })
}
palabras.forEach(function (objeto) {
    crearDiv2(objeto.ingles, objeto.español, objeto.definicion)
})

// Agregar el evento 'input' al campo de entrada
inputBusqueda.addEventListener('input', function () {
    const terminoBusqueda = this.value.toLowerCase();
    // Seleccionar todos los elementos con la clase '.principal'
    const divsPalabras = document.querySelectorAll('.principal');

    divsPalabras.forEach(div => {
        // Seleccionar el primer elemento con la clase '.word' dentro del 'div' y guardarlo en 'boton'
        const boton = div.querySelector('.word');
        const textoBoton = boton.textContent.toLowerCase();

        if (textoBoton.includes(terminoBusqueda)) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });

    // Si el campo de entrada está vacío, recargar la página
    if (this.value === '') {
        location.reload();
    }
});
