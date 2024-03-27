// Tercera Pre Entrega JS

class Cliente {
    constructor(nombre, apellido, dni, tel, mail) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.tel = tel
        this.mail = mail
    }
}

class Mascota {
    constructor(nombre, animal, raza, edad, vacunado) {
        this.nombre = nombre
        this.animal = animal
        this.raza = raza
        this.edad = edad
        this.vacunado = vacunado
    }
}

function menu() {

    let msg1 = 'Historia Clinica Veterinaria\n'
    let msg2 = '1 - Nuevo Paciente\n2 - Ver Registro\n3 - Salir';
    let msg3 = 'Debe Ingresar un numero de opcion valida del menu: \n';
    let opc = parseInt(Number(prompt(msg1 + msg2)));
    while (isNaN(opc)) {
        opc = parseInt(Number(prompt(msg3 + msg2)));
    }
    runMenu(opc, 3, msg3);
}


function runMenu(opc, item, msg3) {
    while (opc > item) {
        alert(msg3);
        menu();
    }
    switch (opc) {
        case 1:
            crearCliente();
            break;
        case 2:
            verRegistro();
            break;
        case 3:
            salir();
            break;
        default:
            break;
    }
}


function crearCliente() {
    let rCliente = regCliente;
    let brk = true;

    while (brk) {

        let nomCli = prompt('Ingrese el nombre del cliente');
        let apellido = prompt('Ingrese el apellido del cliente');
        let dni = Number(prompt('Ingrese el DNI del cliente'));
        while (isNaN(dni)) {
            dni = Number(prompt('Debe ingresar el numero del DNI'));
        }
        let tel = Number(prompt('Ingrese el telefono del cliente'));
        while (isNaN(tel)) {
            tel = Number(prompt('Debe ingresar un numero telefonico'));
        }
        let mail = prompt('Ingrese el email del cliente');

        let nomMas = prompt('Ingrese el nombre de la Mascota');
        let animal = prompt('Ingrese el tipo de mascota', 'Perro / Gato / Etc');
        let raza = prompt('Ingrese la raza de la mascota');
        let edad = Number(prompt('Ingrese la edad de la mascota'));
        while (isNaN(edad)) {
            edad = Number(prompt('Debe ingresar la edad en numeros'));
        }
        let vacunado = confirm('Está Vacunado?');
                      if(vacunado){
                        vacunado = 'Si';
                      }else
                        vacunado = 'No';

        let clie = new Cliente(nomCli, apellido, dni, tel, mail);
        let masc = new Mascota(nomMas, animal, raza, edad, vacunado);

        let addReg = { clie, masc };

        rCliente.push(addReg);
        alert('Cliente Agregado Exitosamente');

        brk = confirm('Desea Agregar Mas Clientes ?');
        if (!brk) {
            menu();
        }

    }
}

function verRegistro() {
    if (regCliente.length === 0) {
        alert('No Hay Ningun Cliente Registrado');
        menu();
    } else {
        let verNomCli;
        let verApellido;
        let verDni;
        let verTel;
        let verMail;
        let verNomMasc;
        let verAnimal;
        let verRaza;
        let verEdad;
        let verVacunado;

        for (let i = 0; i < regCliente.length; i++) {
            verNomCli = regCliente[i].clie.nombre;
            verApellido = regCliente[i].clie.apellido;
            verDni = regCliente[i].clie.dni;
            verTel = regCliente[i].clie.tel;
            verMail = regCliente[i].clie.mail;

            verNomMasc = regCliente[i].masc.nombre;
            verAnimal = regCliente[i].masc.animal;
            verRaza = regCliente[i].masc.raza;
            verEdad = regCliente[i].masc.edad;
            verVacunado = regCliente[i].masc.vacunado;


            alert('Cliente:\n' +
                '- Nombre: ' + verNomCli + '\n' +
                '- Apellido: ' + verApellido + '\n' +
                '- DNI: ' + verDni + '\n' +
                '- Telefono: ' + verTel + '\n' +
                '- Mail: ' + verMail + '\n' +
                'Mascota:\n' +
                '- Nombre: ' + verNomMasc + '\n' +
                '- Tipo: ' + verAnimal + '\n' +
                '- Raza: ' + verRaza + '\n' +
                '- Edad: ' + verEdad + '\n' +
                '- Vacunado: ' + verVacunado);
        }
        menu();

    }

    console.log('Listado de Clientes');
    for (let i = 0; i < regCliente.length; i++) {
        console.log(regCliente[i].clie, regCliente[i].masc);
    }
}


function salir() {
    let quit = confirm('Desea Salir ?');
    if (quit) {
        return;
    } else {
        menu();
    }
}

var regCliente = [];
menu();
