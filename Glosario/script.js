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
        definicion: "A small graphical window that pops up to display information or prompt the user for input within a software application."
    },
    {
        ingles: "Dictionary",
        español: "Diccionario",
        definicion: "A data structure that stores a collection of key-value pairs, where each key is associated with a corresponding value."
    },
    {
        ingles: "Digitize",
        español: "Digitalizar",
        definicion: "To convert analog information or data into a digital format that can be processed and stored by a computer."
    },
    {
        ingles: "DIMM slot",
        español: "Ranura DIMM",
        definicion: "Dual In-line Memory Module slot; a physical slot on a computer's motherboard used to insert memory modules for RAM (Random Access Memory)."
    },
    {
        ingles: "Distributed programming",
        español: "Programacion distribuida",
        definicion: "Programming paradigm that involves designing and implementing software systems that run on multiple computers or devices connected over a network, typically working together to achieve a common goal."
    },
    {
        ingles: "Documentation",
        español: "Documentacion",
        definicion: "Written information or instructions that accompany software or a software project, providing guidance on how to use, configure, or develop the software."
    },
    {
        ingles: "DOM",
        español: "DOM",
        definicion: "Document Object Model; a programming interface for web documents that represents the structure of a web page as a hierarchical tree of objects, allowing scripts to dynamically access and modify the content, structure, and style of the document."
    },
    {
        ingles: "Domain",
        español: "Dominio",
        definicion: "In the context of the internet, a domain refers to a unique identifier associated with a specific website or network, often represented as a URL (Uniform Resource Locator)."
    },
    {
        ingles: "Double",
        español: "Double",
        definicion: "A data type used in programming languages to represent floating-point numbers with double precision, typically occupying 8 bytes of memory."
    },

    {
        ingles: "Download",
        español: "Descargar",
        definicion: "The process of transferring data or files from a remote computer or server to a local computer or device."
    },

    {
        ingles: "Drive",
        español: "Drive",
        definicion: "A storage device used to store and retrieve digital data, such as a hard disk drive (HDD), solid-state drive (SSD), or optical disc drive (e.g., CD-ROM or DVD-ROM drive)."
    },

    {
        ingles: "Dynamic",
        español: "Dinamico",
        definicion: "Referring to behavior or properties that can change or be modified during runtime, often in response to user input or other external factors."
    },

    {
        ingles: "Encapsulation",
        español: "Encapsulamiento",
        definicion: "A fundamental concept in object-oriented programming (OOP) that involves bundling data and methods (functions) that operate on that data into a single unit, known as an object, and restricting access to the object's internal state from outside the object's definition."
    },

    {
        ingles: "Encoding",
        español: "Codificacion",
        definicion: " The process of converting The set of tools, libraries, and configurations used by developers to write, test, and debug software applications.data from one format or representation to another, often used in the context of converting text characters into a binary format for storage or transmission."
    },

    {
        ingles: "Encryption",
        español: "Encriptacion",
        definicion: "The process of encoding information or data in such a way that only authorized parties can access it, typically using algorithms and cryptographic techniques to protect the confidentiality and integrity of the data."
    },

    {
        ingles: "Enter",
        español: "Enter",
        definicion: "A key on a computer keyboard used to confirm a command or input, often associated with submitting form data or executing a command in a software application."
    },

    {
        ingles: "Entity",
        español: "Entidad",
        definicion: "In the context of databases and data modeling, an entity refers to a distinct object, concept, or thing that is represented in the database and has attributes that describe its properties or characteristics."
    },

    {
        ingles: "Enumeration",
        español: "Enumeracion",
        definicion: "A data type in programming languages that consists of a set of named values, where each value represents a unique constant within the enumeration."
    },

    {
        ingles: "Enviroment variables",
        español: "Variables de entorno",
        definicion: "Configuration settings or parameters that are part of the operating system or runtime environment and can affect the behavior of software programs and system processes."
    },

    {
        ingles: "Ethernet connector",
        español: "Conector ethernet",
        definicion: " A physical interface or port on a computer or networking device used to connect to an Ethernet network, typically using an Ethernet cable."
    },

    {
        ingles: "Even-driven programming",
        español: "Programacion orientada a obejtos",
        definicion: "A programming paradigm where the flow of the program is determined by events, such as user actions, system notifications, or external inputs, triggering the execution of event handlers or callback functions."
    },

    {
        ingles: "Exeption",
        español: "Exepcion",
        definicion: "An abnormal or unexpected condition that occurs during the execution of a program, often indicating an error or problem that prevents the program from continuing normally."
    },

    {
        ingles: "Execution",
        español: "Ejecucion",
        definicion: "The process of running or executing a program, whereby the instructions in the program are processed by the computer's CPU (Central Processing Unit) to perform the desired tasks or operations."
    },

    {
        ingles: "Fan",
        español: "Ventilador",
        definicion: "A mechanical device used to circulate air and dissipate heat from computer components, such as the CPU, GPU, and power supply, to prevent overheating and maintain optimal operating temperatures."
    },

    {
        ingles: "Field",
        español: "Campo",
        definicion: "A data element or component within a record or data structure, typically representing a single piece of information or attribute."
    },

    {
        ingles: "File",
        español: "Archivo",
        definicion: "A collection of data or information stored as a unit on a computer storage device, typically identified by a filename and consisting of one or more contiguous sequences of bytes."
    },

    {
        ingles: "Firewall",
        español: "Firewall",
        definicion: "A network security device or software application that monitors and controls incoming and outgoing network traffic based on predetermined security rules, policies, or configurations."
    },

    {
        ingles: "Float",
        español: "Float",
        definicion: "A data type used in programming languages to represent floating-point numbers with single precision, typically occupying 4 bytes of memory."
    },
    {
        ingles: "Flow control",
        español: " Control de flujo",
        definicion: "The process of managing the execution flow or sequence of instructions within a program, often involving decision-making structures, loops, and branching statements to control the program's behavior."
    },
    {
        ingles: "Flowchart",
        español: "Diagrama de flujo",
        definicion: "A graphical representation of an algorithm or process using symbols and arrows to illustrate the sequence of steps or actions involved."
    },
    {
        ingles: "Flutter",
        español: "Flutter",
        definicion: "An open-source UI (User Interface) toolkit developed by Google for building natively compiled applications for mobile, web, and desktop platforms using a single codebase."
    },
    {
        ingles: "Folder",
        español: "Carpeta",
        definicion: "A directory or container used to organize and store files and other folders on a computer's filesystem."
    },
    {
        ingles: "Fonts",
        español: "Fuentes",
        definicion: "Sets of graphical characters or symbols with a specific design and style used to display text and typography in digital documents, interfaces, and applications."
    },
    {
        ingles: "Fork",
        español: "Bifurcacion",
        definicion: "In the context of version control systems like Git, a fork refers to creating a personal copy of a repository (project) hosted on a platform like GitHub, allowing for independent development and experimentation without affecting the original project."
    },
    {
        ingles: "Format",
        español: "Formatear",
        definicion: "The arrangement, structure, or layout of data or information in a specified manner, often involving the presentation, organization, or encoding of data according to predefined rules or standards."
    },
    {
        ingles: "Framework",
        español: "Estructura",
        definicion: "A structured set of libraries, tools, and conventions that provides a foundation for developing software applications or solutions within a specific programming environment or domain."
    },
    {
        ingles: "Freelancer",
        español: "Persona de libre dedicacion",
        definicion: "A self-employed individual who offers services or works on projects for multiple clients or employers on a temporary or contract basis, typically without long-term commitments."
    },
    {
        ingles: "Freeware",
        español: "Software gratuito",
        definicion: "Software that is available for use or distribution at no cost, often with limited functionality or licensing restrictions compared to commercial software."
    },
    {
        ingles: "Front-end",
        español: "Front-end",
        definicion: "The part of a software application or system that interacts directly with users, typically consisting of user interfaces, presentation layers, and client-side logic."
    },
    {
        ingles: "FTP",
        español: "Protocolo de Trasferencia de archivos",
        definicion: "A standard network protocol used for transferring files between a client and a server on a TCP/IP-based network, such as the internet."
    },
    {
        ingles: "Full-stack",
        español: "Full-stack",
        definicion: "A term used to describe developers who have expertise in both front-end and back-end technologies, allowing them to work on all layers of a software application or system."
    },
    {
        ingles: "Function",
        español: "Funcion",
        definicion: "A self-contained block of code within a program that performs a specific task or operation, often accepting inputs (parameters) and"
    },
    {
        ingles: "Gamepad",
        español: "Mando",
        definicion: "A handheld input device used primarily for playing video games on a computer or gaming console, typically featuring buttons, triggers, analog sticks, and directional pads for controlling in-game actions and movements."
    },
    {
        ingles: "Gigabyte",
        español: "Gigabyte",
        definicion: "A unit of digital information storage capacity equal to 1,024 megabytes (or approximately one billion bytes), commonly used to quantify the size of computer storage devices or the amount of data transferred over a network."
    },
    {
        ingles: "GitHub",
        español: "GitHub",
        definicion: " A web-based platform and service that provides hosting for software development projects using the Git version control system, enabling collaboration, code sharing, and project management features for developers."
    },
    {
        ingles: "Global",
        español: "Global",
        definicion: "Refers to a variable, function, or object that is accessible and visible from any part of a program or system, often used to store values or define behavior that needs to be shared and accessed across multiple components or modules."
    },
    {
        ingles: "GPU",
        español: "Unidad de procesamiento grafico",
        definicion: "Graphics Processing Unit; a specialized electronic circuit designed to accelerate the rendering of images, graphics, and visual effects in computer applications, particularly in 3D graphics rendering and video playback."
    },
    {
        ingles: "Graphic card",
        español: "Tarjeta grafica",
        definicion: "A hardware component installed in a computer system that is responsible for rendering and displaying graphics, images, and visual content on a monitor or display device."
    },
    {
        ingles: "Hacker",
        español: "Hacker",
        definicion: "A person who uses technical knowledge and programming skills to gain unauthorized access to computer systems, networks, or data with malicious intent, or to explore and experiment with computer systems and software for educational or constructive purposes."
    },
    {
        ingles: "Hard drive",
        español: "Disco duro",
        definicion: "Device used to store and retrieve digital information using rotating disks coated with magnetic material."
    },
    {
        ingles: "Hardware",
        español: "Hardware",
        definicion: "Physical components of a computer system, including the central processing unit, memory, and peripherals."
    },
    {
        ingles: "HDMI",
        español: "HDMI",
        definicion: "Interface for transmitting high-definition video and audio data between devices."
    },
    {
        ingles: "Hibernation",
        español: "Hibernación",
        definicion: "Power-saving state where a computer saves the contents of its RAM to a hard drive before powering down."
    },
    {
        ingles: "Hypervisor",
        español: "Hipervisor",
        definicion: "Software layer that allows multiple operating systems to share a single hardware host."
    },
    {
        ingles: "Host",
        español: "Host",
        definicion: "Computer or other device that provides data, services, or resources to other devices on a network."
    },
    {
        ingles: "Hosting",
        español: "Hosting",
        definicion: "Service that allows organizations and individuals to post a website or web page onto the Internet."
    },
    {
        ingles: "HTML",
        español: "HTML",
        definicion: "Standard markup language for creating web pages and web applications."
    },
    {
        ingles: "Hyperlink",
        español: "Hipervínculo",
        definicion: "Reference in a digital document that allows users to navigate to another document or resource."
    },
    {
        ingles: "Icon",
        español: "Icono",
        definicion: "Graphical representation of a program, file, or function, typically found on a computer desktop or interface."
    },
    {
        ingles: "ID",
        español: "ID",
        definicion: "Unique identifier used to distinguish a specific element or entity in programming and databases."
    },
    {
        ingles: "IDE",
        español: "IDE",
        definicion: "Integrated Development Environment; a software application that provides comprehensive facilities to computer programmers for software development."
    },
    {
        ingles: "Imperative",
        español: "Imperativo",
        definicion: "Programming paradigm that uses statements to change a program's state, emphasizing how to perform tasks."
    },
    {
        ingles: "Implementation",
        español: "Implementación",
        definicion: "Process of executing a plan or algorithm to achieve a specific function or operation in software development."
    },
    {
        ingles: "Import",
        español: "Importar",
        definicion: "Process of bringing or incorporating external resources, modules, or data into a program or project."
    },
    {
        ingles: "Increment",
        español: "Incremento",
        definicion: "Increase in value or quantity, often used in programming to denote adding a fixed value to a variable."
    },
    {
        ingles: "Indexing",
        español: "Indexación",
        definicion: "Organizing and optimizing data storage to quickly retrieve specific information, often used in databases and search algorithms."
    },
    {
        ingles: "Inheritance",
        español: "Herencia",
        definicion: "OOP concept where a class inherits properties and behaviors from another class, promoting code reuse and hierarchy."
    },
    {
        ingles: "Init",
        español: "Iniciar",
        definicion: "To start or initialize a process, program, or operation, typically used in software development."
    },
    {
        ingles: "Instances",
        español: "Instancias",
        definicion: "Particular occurrences or realizations of a class in object-oriented programming, representing individual objects."
    },
    {
        ingles: "Int",
        español: "Int",
        definicion: "Data type representing whole numbers in programming languages, typically used for integer values."
    },
    {
        ingles: "Integration",
        español: "Integración",
        definicion: "Combining or merging different components, systems, or software to work together seamlessly."
    },
    {
        ingles: "Interfaces",
        español: "Interfaces",
        definicion: "A point of interaction between software components or systems, defining how they communicate and interoperate."
    },
    {
        ingles: "Internet",
        español: "Internet",
        definicion: "Global network of interconnected computers and devices, facilitating communication and information exchange."
    },
    {
        ingles: "Interpreter",
        español: "Intérprete",
        definicion: "Program that directly executes code written in a high-level programming language, translating and running it line by line."
    },
    {
        ingles: "Intranet",
        español: "Intranet",
        definicion: "Private network within an organization that uses Internet technologies to share information and resources."
    },
    {
        ingles: "IP",
        español: "IP",
        definicion: "Internet Protocol; unique address assigned to each device connected to a computer network, allowing communication."
    },
    {
        ingles: "Iteration",
        español: "Iteración",
        definicion: "Repetition of a process or cycle in a program, often used for looping and executing code multiple times."
    },
    {
        ingles: "Iterative",
        español: "Iterativo",
        definicion: "Process or method that involves repeating a sequence of steps or operations, typically refining or improving with each repetition."
    },
    {
        ingles: "Java",
        español: "Java",
        definicion: "High-level, object-oriented programming language known for its platform independence and extensive libraries."
    },
    {
        ingles: "JavaScript",
        español: "JavaScript",
        definicion: "High-level, dynamic programming language primarily used for client-side web development, enabling interactive web pages."
    },
    {
        ingles: "Jumper",
        español: "Jumper",
        definicion: "Small device or connector used to close, open, or bypass part of an electronic circuit, typically used in hardware configuration."
    },
    {
        ingles: "Kernel",
        español: "Kernel",
        definicion: "Central component of an operating system, responsible for managing system resources and providing essential services."
    },
    {
        ingles: "Keyboard",
        español: "Teclado",
        definicion: "Input device consisting of keys used to input data and commands into a computer or other device."
    },
    {
        ingles: "Kilobyte",
        español: "Kilobyte",
        definicion: "Unit of digital information storage equal to 1,024 bytes, commonly used to measure file sizes and memory capacity."
    },
    {
        ingles: "Language",
        español: "Lenguaje",
        definicion: "Systematic means of communication, typically consisting of words, symbols, or gestures, used by humans and computers."
    },
    {
        ingles: "Laravel",
        español: "Laravel",
        definicion: "Popular open-source PHP web framework known for its elegant syntax and powerful features, used for building web applications."
    },
    {
        ingles: "Layout",
        español: "Maquetación",
        definicion: "Arrangement or organization of elements in a graphical interface or design, determining the visual structure and presentation."
    },
    {
        ingles: "LGA",
        español: "LGA",
        definicion: "Land Grid Array; type of integrated circuit packaging where the connection pins are located on the socket rather than the integrated circuit itself."
    },
    {
        ingles: "Libraries",
        español: "Librerías",
        definicion: "Collection of pre-written code modules or functions that can be used to extend the functionality of a programming language or framework."
    },
    {
        ingles: "Library",
        español: "Biblioteca",
        definicion: "Collection of resources, such as books, articles, or multimedia materials, organized for reference or borrowing."
    },
    {
        ingles: "Link",
        español: "Enlace",
        definicion: "Connection between two resources, such as web pages or files, allowing navigation or access between them."
    },
    {
        ingles: "List",
        español: "Lista",
        definicion: "Ordered or unordered collection of items or elements, often used in programming to store and manipulate data."
    },
    {
        ingles: "Live server",
        español: "Servidor en vivo",
        definicion: "Server environment that is actively running and serving requests, often used for web development and testing."
    },
    {
        ingles: "Local",
        español: "Local",
        definicion: "Pertaining to or located in a particular area or environment, often used to refer to resources or data stored on a local device or network."
    },
    {
        ingles: "Login",
        español: "Iniciar Sesión",
        definicion: "Process of accessing a computer system, network, or application by providing credentials, typically a username and password."
    },
    {
        ingles: "Logging",
        español: "Registro",
        definicion: "Process of recording events, actions, or messages to a log file for monitoring, troubleshooting, or analysis purposes."
    },
    {
        ingles: "Logical",
        español: "Lógico",
        definicion: "Related to or based on logic, rational reasoning, or consistent principles."
    },
    {
        ingles: "Logical operation",
        español: "Operación lógica",
        definicion: "Process or action performed on logical values or variables, typically involving logical operators such as AND, OR, and NOT."
    },
    {
        ingles: "Maintenance",
        español: "Mantenimiento",
        definicion: "Process of preserving, repairing, or keeping something in proper condition, often used in software development and system administration."
    },
    {
        ingles: "Malware",
        español: "Malware",
        definicion: "Software designed to disrupt, damage, or gain unauthorized access to computer systems, networks, or data, often with malicious intent such as theft, surveillance, or extortion."
    },
    {
        ingles: "Manual input",
        español: "Entrada manual",
        definicion: "Input or data entry performed directly by a human user, typically through physical interaction with a device such as a keyboard, mouse, or touchscreen."
    },
    {
        ingles: "Map",
        español: "Mapa",
        definicion: "Visual representation or diagram showing the spatial arrangement or relationship between elements, locations, or concepts."
    },
    {
        ingles: "Matrix",
        español: "Matriz",
        definicion: "Data structure consisting of rows and columns, used for organizing and manipulating data in mathematical, statistical, or computational contexts."
    },
    {
        ingles: "Megabyte",
        español: "Megabyte",
        definicion: "Unit of digital information storage equal to 1,024 kilobytes or approximately one million bytes, commonly used to measure file sizes and memory capacity."
    },
    {
        ingles: "Memory",
        español: "Memoria",
        definicion: "Internal storage component of a computer or device used to store data and instructions temporarily or permanently for processing."
    },
    {
        ingles: "Menu",
        español: "Menú",
        definicion: "List of options or commands displayed on a computer screen or interface, typically organized hierarchically for navigation or selection."
    },
    {
        ingles: "Methods",
        español: "Métodos",
        definicion: "Procedures or functions associated with an object or class in object-oriented programming, used to perform specific tasks or operations."
    },
    {
        ingles: "Microprocessor",
        español: "Microprocesador",
        definicion: "Integrated circuit responsible for executing instructions and processing data in a computer or electronic device, often referred to as the central processing unit (CPU)."
    },
    {
        ingles: "Microservices",
        español: "Microservicios",
        definicion: "Architectural approach to software development where applications are divided into small, independently deployable services, each responsible for specific tasks or functions."
    },
    {
        ingles: "Minimize",
        español: "Minimizar",
        definicion: "Action of reducing the size, scope, or presence of something, often used in computing to refer to the act of minimizing a window or application."
    },
    {
        ingles: "Mixed reality",
        español: "Realidad mixta",
        definicion: "Integration of virtual and augmented reality technologies to create immersive experiences that blend physical and digital environments."
    },
    {
        ingles: "Mockups",
        español: "Maquetas",
        definicion: "Visual representation or prototype of a design or product, often used in software development to demonstrate functionality and user interface."
    },
    {
        ingles: "Modem",
        español: "Módem",
        definicion: "Device that modulates and demodulates signals for transmitting data over communication channels, typically used to connect to the internet or other networks."
    },
    {
        ingles: "Modular",
        español: "Modular",
        definicion: "Characterized by or based on the use of separate modules or components that can be independently replaced, upgraded, or modified."
    },
    {
        ingles: "Motherboard",
        español: "Placa base",
        definicion: "Main circuit board of a computer, containing the central processing unit (CPU), memory, expansion slots, and other essential components."
    },
    {
        ingles: "Mouse",
        español: "Ratón",
        definicion: "Input device used to interact with graphical user interfaces by moving a cursor or pointer on a screen and selecting items or performing actions."
    },
    {
        ingles: "Multicasting",
        español: "Multidifusión",
        definicion: "Communication method where a single data transmission is received by multiple recipients simultaneously, often used in computer networks."
    },
    {
        ingles: "Multimeter",
        español: "Multímetro",
        definicion: "Electronic measuring instrument used to measure various electrical quantities such as voltage, current, and resistance."
    },
    {
        ingles: "NetBeans",
        español: "NetBeans",
        definicion: "Integrated development environment (IDE) primarily used for Java development, providing tools and features for coding, debugging, and testing."
    },
    {
        ingles: "Network card",
        español: "Tarjeta de red",
        definicion: "Hardware component that enables a computer or device to connect to a network and communicate with other devices, often referred to as a network adapter or NIC."
    },
    {
        ingles: "Network",
        español: "Red",
        definicion: "Interconnected system of computers, devices, or nodes that communicate and share resources such as data, services, and applications."
    },
    {
        ingles: "Node.js",
        español: "Node.js",
        definicion: "JavaScript runtime environment based on Chrome's V8 engine, designed to allow the creation of scalable and high-performance network applications."
    },
    {
        ingles: "No-primitives",
        español: "No primitivos",
        definicion: "Technique or design approach in software development that avoids the use of primitive data types in favor of more complex and expressive abstractions."
    },
    {
        ingles: "Northbridge",
        español: "Puente norte",
        definicion: "Integrated circuit responsible for connecting the central processing unit (CPU) to high-speed components such as RAM and the graphics card."
    },
    {
        ingles: "Not",
        español: "Not",
        definicion: "Logical operator that negates the value of a Boolean expression, returning true if the expression is false and false if the expression is true."
    },
    {
        ingles: "Object",
        español: "Objeto",
        definicion: "Instance of a class in object-oriented programming that encapsulates data and functionality, representing a real-world or abstract entity."
    },
    {
        ingles: "Object-oriented-programming",
        español: "Programación orientada a objetos",
        definicion: "Programming paradigm based on the concept of classes and objects, where software entities are modeled as objects with attributes and methods."
    },
    {
        ingles: "Operating manual",
        español: "Manual de operación",
        definicion: "Document that provides detailed instructions on how to use, maintain, or troubleshoot a device, system, or software."
    },
    {
        ingles: "Or",
        español: "O",
        definicion: "Logical operator that returns true if at least one of the compared expressions is true, and false if all expressions are false."
    },
    {
        ingles: "Oracle",
        español: "Oracle",
        definicion: "Technology company that offers a wide range of database products and services, enterprise software, and cloud computing systems."
    },
    {
        ingles: "Oscilloscope",
        español: "Osciloscopio",
        definicion: "Electronic measurement instrument used to visualize and analyze electrical signals in the form of waves over time."
    },
    {
        ingles: "Overclocking",
        español: "Overcloking",
        definicion: "Process of increasing the operating speed of a hardware component, such as the CPU or GPU, beyond the manufacturer's nominal specifications."
    },
    {
        ingles: "Overlay",
        español: "Superposición",
        definicion: "Technique of superimposing images, graphics, or visual elements onto an existing image or screen to provide additional information or enhance the user experience."
    },
    {
        ingles: "Parallel Programming",
        español: "Programación paralela",
        definicion: "Technique of writing computer programs that can execute multiple tasks simultaneously by leveraging the parallel processing capability of systems."
    },
    {
        ingles: "Parameter",
        español: "Parámetro",
        definicion: "Variable used to pass information to a function or method, which acts as input for the operation and can be modified or processed by the code."
    },
    {
        ingles: "Password",
        español: "Contraseña",
        definicion: "Sequence of characters used to authenticate a user's identity and provide secure access to an account, system, or protected resource."
    },
    {
        ingles: "PCI slot",
        español: "Ranura PCI",
        definicion: "Expansion connector used to connect expansion cards such as network cards, sound cards, and graphics cards to a computer motherboard."
    },
    {
        ingles: "PCIE slot",
        español: "Ranura PCIe",
        definicion: "Type of high-speed expansion slot used to connect high-performance peripheral devices such as graphics cards and SSD storage drives to a motherboard."
    },
    {
        ingles: "Performance",
        español: "Rendimiento",
        definicion: "Measure of the efficiency, speed, or execution capability of a system, program, or device, usually related to the amount of work done in a given period of time."
    },
    {
        ingles: "Peripherals",
        español: "Periféricos",
        definicion: "Devices connected to a computer or system that extend its input, output, or storage capabilities, such as keyboards, mice, printers, and disk drives."
    },
    {
        ingles: "Phishing",
        español: "Phishing",
        definicion: "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in electronic communications."
    },
    {
        ingles: "Pin",
        español: "Pin",
        definicion: "A personal identification number used for secure access to systems or data."
    },
    {
        ingles: "Pirate",
        español: "Pirata",
        definicion: "An individual who illegally copies, distributes, or uses software without proper authorization."
    },
    {
        ingles: "Pixel",
        español: "Pixel",
        definicion: "The smallest unit of a digital image or display, representing a single point in the image."
    },
    {
        ingles: "Plug-ins",
        español: "Plug-ins",
        definicion: "Software components that add specific capabilities to a larger software application, enabling customization and extension."
    },
    {
        ingles: "Polymorphism",
        español: "Polimorfismo",
        definicion: "A programming language feature that allows functions or methods to process objects differently based on their data type or class."
    },
    {
        ingles: "Portability",
        español: "Portabilidad",
        definicion: "The ability of software to be transferred from one environment or platform to another with minimal modifications."
    },
    {
        ingles: "Power supply",
        español: "Fuente de alimentación",
        definicion: "A hardware component that provides electrical power to a computer or other device."
    },
    {
        ingles: "Primitives",
        español: "Primitivos",
        definicion: "Basic data types provided by a programming language as building blocks for data manipulation."
    },
    {
        ingles: "Print",
        español: "Imprimir",
        definicion: "A function or command used to display text or other output in a programming environment, or to produce a physical copy on paper."
    },
    {
        ingles: "Printer",
        español: "Impresora",
        definicion: "A peripheral device that converts digital documents into physical printed copies."
    },
    {
        ingles: "Procedural",
        español: "Procedual",
        definicion: "A programming paradigm based on the concept of procedure calls, where statements are structured into procedures or functions."
    },
    {
        ingles: "Process",
        español: "Proceso",
        definicion: "An instance of a program that is being executed, including its current state and allocated system resources."
    },
    {
        ingles: "Processor",
        español: "Procesador",
        definicion: "The central processing unit (CPU) of a computer, responsible for interpreting and executing instructions from software."
    },
    {
        ingles: "Profile",
        español: "Perfil",
        definicion: "A set of user preferences and settings stored by a software application to customize the user experience."
    },
    {
        ingles: "Programming paradigm",
        español: "Paradigma de programación",
        definicion: "A fundamental style or approach to programming, such as procedural, object-oriented, or functional programming."
    },
    {
        ingles: "Project manager",
        español: "Project manager",
        definicion: "A professional responsible for planning, executing, and closing projects, ensuring that goals and deadlines are met."
    },
    {
        ingles: "Prototype",
        español: "Prototipo",
        definicion: "An initial or preliminary version of a system or component used to demonstrate concepts and test functionality."
    },
    {
        ingles: "Proxy",
        español: "Proxy",
        definicion: "A server that acts as an intermediary for requests from clients seeking resources from other servers, often used for anonymity or security."
    },
    {
        ingles: "Pseudocode",
        español: "Seudocódigo",
        definicion: "A high-level description of an algorithm or program written in a form that resembles code but is meant for human reading."
    },
    {
        ingles: "Pseudocode",
        español: "Pseudocodigo",
        definicion: "A high-level description of an algorithm or program written in a form that resembles code but is meant for human reading."
    },
    {
        ingles: "Public",
        español: "Public",
        definicion: "An access modifier in programming that allows a member of a class to be accessible from any other code."
    },
    {
        ingles: "Pull",
        español: "Pull",
        definicion: "A method in version control systems where changes are fetched from a remote repository to the local repository."
    },
    {
        ingles: "Push",
        español: "Push",
        definicion: "A method in version control systems where changes are sent from the local repository to a remote repository."
    },
    {
        ingles: "RAID card",
        español: "Tarjeta RAID",
        definicion: "A hardware component that manages Redundant Array of Independent Disks (RAID) configurations for data storage."
    },
    {
        ingles: "RAM",
        español: "RAM",
        definicion: "Random Access Memory, a type of volatile memory used for temporary data storage while a computer is running."
    },
    {
        ingles: "RAM memory",
        español: "Memoria RAM",
        definicion: "Random Access Memory, a type of volatile memory used for temporary data storage while a computer is running."
    },
    {
        ingles: "Ranura PCIe",
        español: "Ranura PCIe",
        definicion: "A high-speed interface for connecting peripheral devices to a computer's motherboard."
    },
    {
        ingles: "React",
        español: "React",
        definicion: "A JavaScript library for building user interfaces, particularly for single-page applications."
    },
    {
        ingles: "Regular expressions",
        español: "Expresiones regulares",
        definicion: "Sequences of characters that define a search pattern, typically for use in pattern matching with strings."
    },
    {
        ingles: "Remote",
        español: "Remoto",
        definicion: "Accessing or managing a computer, system, or network from a distant location."
    },
    {
        ingles: "Repository",
        español: "Repositorio",
        definicion: "A central place where data is stored and managed, often used in version control systems."
    },
    {
        ingles: "Requirements",
        español: "Requerimientos",
        definicion: "Specifications of what a system should do, including functional and non-functional aspects."
    },
    {
        ingles: "Robotics",
        español: "Robótica",
        definicion: "The branch of technology that deals with the design, construction, operation, and application of robots."
    },
    {
        ingles: "SATA",
        español: "SATA",
        definicion: "Serial ATA, an interface used to connect mass storage devices like hard drives and solid-state drives to a computer."
    },
    {
        ingles: "Scanner",
        español: "Escáner",
        definicion: "A device that converts physical documents into digital format."
    },
    {
        ingles: "Scrum",
        español: "Scrum",
        definicion: "An agile framework for managing complex knowledge work, particularly in software development."
    },
    {
        ingles: "SDK",
        español: "SDK",
        definicion: "Software Development Kit, a collection of tools, libraries, and documentation for developing software applications."
    },
    {
        ingles: "Search",
        español: "Búsqueda",
        definicion: "The process of finding specific data or information within a larger set, often using algorithms."
    },
    {
        ingles: "Server",
        español: "Servidor",
        definicion: "A computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network."
    },
    {
        ingles: "Software",
        español: "Software",
        definicion: "Programs and other operating information used by a computer."
    },
    {
        ingles: "Speech recognition",
        español: "Reconocimiento de voz",
        definicion: "The ability of a machine or program to identify and respond to the sounds produced in human speech."
    },
    {
        ingles: "SQL injection",
        español: "Inyección SQL",
        definicion: "A code injection technique used to attack data-driven applications by inserting malicious SQL statements into an entry field."
    },
    {
        ingles: "SSD",
        español: "SSD",
        definicion: "Solid State Drive, a type of mass storage device similar to a hard disk drive but faster and more reliable."
    },
    {
        ingles: "Stack trace",
        español: "Stack trace",
        definicion: "A report of the active stack frames at a certain point in time during the execution of a program."
    },
    {
        ingles: "State",
        español: "Estado",
        definicion: "A condition or situation of a system or component at a specific time."
    },
    {
        ingles: "Static",
        español: "Estático",
        definicion: "Pertaining to a state that does not change."
    },
    {
        ingles: "Stored data",
        español: "Datos almacenados",
        definicion: "Data that is stored and retained for later use."
    },
    {
        ingles: "String",
        español: "Cadena",
        definicion: "A sequence of characters, typically used to represent text."
    },
    {
        ingles: "Sublime Text",
        español: "Sublime Text",
        definicion: "A popular text editor used for writing code."
    },
    {
        ingles: "Switch",
        español: "Interruptor",
        definicion: "A device for making and breaking the connection in an electric circuit."
    },
    {
        ingles: "Template method",
        español: "Método plantilla",
        definicion: "A design pattern that defines the program skeleton of an algorithm in a method, deferring some steps to subclasses."
    },
    {
        ingles: "Terabyte",
        español: "Terabyte",
        definicion: "A unit of information equal to one trillion bytes."
    },
    {
        ingles: "Terminal",
        español: "Terminal",
        definicion: "A device or program for input and output of data, typically used in a command-line interface."
    },
    {
        ingles: "Testing",
        español: "Testeo",
        definicion: "The process of executing a program with the intent of finding errors."
    },
    {
        ingles: "Trojan",
        español: "Troyano",
        definicion: "A type of malware disguised as legitimate software."
    },
    {
        ingles: "Type of data",
        español: "Tipo de datos",
        definicion: "A classification of data that tells the compiler or interpreter how the programmer intends to use the data."
    },
    {
        ingles: "UI (Interfaz de usuario)",
        español: "Interfaz de usuario (UI)",
        definicion: "The space where interactions between humans and machines occur."
    },
    {
        ingles: "Unit testing",
        español: "Pruebas unitarias",
        definicion: "A type of software testing where individual units or components of a software are tested."
    },
    {
        ingles: "Upload",
        español: "Subir",
        definicion: "To transfer data from one computer system to another, typically to a server."
    },
    {
        ingles: "Usability",
        español: "Usabilidad",
        definicion: "The ease of use and learnability of a human-made object or tool."
    },
    {
        ingles: "User manual",
        español: "Manual de usuario",
        definicion: "A document that provides instructions on how to use a particular system or product."
    },
    {
        ingles: "Variables",
        español: "Variables",
        definicion: "Storage locations paired with an associated symbolic name, which contain some known or unknown quantity of information referred to as a value."
    },
    {
        ingles: "Vector",
        español: "Vector",
        definicion: "An array with a single dimension."
    },
    {
        ingles: "Version control",
        español: "Control de versiones",
        definicion: "A system that records changes to a file or set of files over time so that you can recall specific versions later."
    },
    {
        ingles: "Video card",
        español: "Tarjeta de video",
        definicion: "A hardware component that generates and outputs images to a display."
    },
    {
        ingles: "Virtual reality",
        español: "Realidad virtual",
        definicion: "A simulated experience that can be similar to or completely different from the real world."
    },
    {
        ingles: "Virus",
        español: "Virus",
        definicion: "A type of malicious software program that, when executed, replicates by inserting copies of itself into other computer programs, data files, or the boot sector of the hard drive."
    },
    {
        ingles: "Visual Studio",
        español: "Visual Studio",
        definicion: "An integrated development environment (IDE) from Microsoft."
    },
    {
        ingles: "Voltage",
        español: "Voltaje",
        definicion: "An electromotive force or potential difference expressed in volts."
    },
    {
        ingles: "Webcam",
        español: "Cámara web",
        definicion: "A video camera that inputs to a computer connected to the Internet, so that its images can be viewed by Internet users."
    },
    {
        ingles: "Website",
        español: "Página web",
        definicion: "A set of related web pages located under a single domain name, typically produced by a single person or organization."
    },
    {
        ingles: "Workstation",
        español: "Estación de trabajo",
        definicion: "A high-performance computer system used for technical or scientific applications."
    },
    {
        ingles: "Zettabyte",
        español: "Zettabyte",
        definicion: "A unit of information equal to one sextillion (10^21) bytes."
    },
    {
        ingles: "ZIP",
        español: "ZIP",
        definicion: "A file format and a software that compresses files to reduce file size."
    }
];

function mostrarDefinicion(divDefinicion) {
    if (divDefinicion.style.display === "none") {
        divDefinicion.style.display = "block";
    } else {
        divDefinicion.style.display = "none";
    }
}

let cont = 0;
let contDiv = 1;
const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function crearDiv2(ingles, español, definicion, primeraLetra) {
    if (primeraLetra === letras[cont]) {
        if (contDiv === 1) {
            const divLetra = document.createElement('div');
            divLetra.classList.add('letra');
            divLetra.innerHTML = `<h2>${letras[cont]}</h2>`;
            document.body.appendChild(divLetra);
            contDiv = 2;
        }
        const divPrincipal = document.createElement("div");
        divPrincipal.classList.add("principal");
        const boton = document.createElement("button");
        const divDefinicion = document.createElement("div");
        divDefinicion.innerHTML = "Traducción: " + español + "<br>" + definicion;
        divDefinicion.classList.add("definition");
        divDefinicion.style.display = "none"; // Inicialmente oculto
        boton.textContent = ingles;
        boton.classList.add('word');
        divPrincipal.appendChild(boton);
        divPrincipal.appendChild(divDefinicion);
        document.body.appendChild(divPrincipal);
        boton.addEventListener("click", function () {
            mostrarDefinicion(divDefinicion);
        });
    } else {
        contDiv = 1;
        cont++;
    }
}

palabras.forEach(function (objeto) {
    const primeraLetra = objeto.ingles.charAt(0);
    crearDiv2(objeto.ingles, objeto.español, objeto.definicion, primeraLetra);
});

// Agregar el evento 'input' al campo de entrada después de que el DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', function () {
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
});