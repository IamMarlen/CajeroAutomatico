document.getElementById("boton").addEventListener("click", function () {
    let persona = document.getElementById("Nomusua").value
    let contra = document.getElementById("contraseña").value
    validador(persona, contra);
});

var usuario = [
    { nombre: "Eliza", password: "1230", saldo: 0},
    { nombre: "Zack", password:"admin25", saldo:0},
    { nombre: "Marion", password:"MA15", saldo:0},
];

let usuarioSeleccionado;
let SaldoUsuario = document.getElementById("montoactual");




function validador(nombre, password) {
    let usuarioEncontrado = false;

    for (let index = 0; index < usuario.length; index++) {
        if (nombre === usuario[index].nombre && password === usuario[index].password) {
            alert("¡Login Exitoso!");
            usuarioSeleccionado = usuario[index];
            usuarioSeleccionado.saldo = 20; // saldo inicial en 20 para todos las cuentas
            document.getElementById("persona").textContent = usuarioSeleccionado.nombre;
            document.getElementById("form").style.display = "none";
            document.getElementById("navbarr").style.display = "block";
            document.getElementById("opciones").style.display = "block";
            CalcularSaldo();
            usuarioEncontrado = true;
            break; // Salir del bucle después del inicio de sesión exitoso
        } else if (nombre === "" || password === "") {
            alert("Los campos son obligatorios");
            return; // Salir de la función si falta información
        }
    }

    if (!usuarioEncontrado) {
        alert("Datos errados, por favor revisar");
    }
}

function CalcularSaldo() {
    let saldo = usuarioSeleccionado.saldo;
    SaldoUsuario.textContent = "Saldo Actual: $" + saldo;
}

document.getElementById("botondinero").addEventListener("click", function () {
    let aumentoDinero = document.getElementById("dinero").value;
    AumentoDinero(aumentoDinero);
})

function AumentoDinero(dinero) {
    if (usuarioSeleccionado.saldo + Number(dinero) > 990) {
        alert("Transacción rechazada: No puedes depositar esta cantidad");
    } else {
        usuarioSeleccionado.saldo += Number(dinero);
        document.getElementById("ingresar").textContent = "Acabas de realizar un depósito de $" + dinero;
        document.getElementById("montoactual").textContent = usuarioSeleccionado.saldo;
    }
}

document.getElementById("botonretirar").addEventListener("click", function () {
    let disminuyeDinero = document.getElementById("dinero").value
    DisminucionDinero(disminuyeDinero)
})


function DisminucionDinero(dinero) {
    if (usuarioSeleccionado.saldo - Number(dinero) < 10) {
        alert("Transacción rechazada: No puedes retirar esta cantidad");
    } else {
        usuarioSeleccionado.saldo -= Number(dinero);
        document.getElementById("ingresar").textContent = "Realizaste un retiro de $" + dinero;
        document.getElementById("montoactual").textContent = usuarioSeleccionado.saldo;
    }
}

document.getElementById("nuevoSaldo").addEventListener("click", function () {

    saldoactualizado()
})

function saldoactualizado() {
    document.getElementById("saldo").textContent = "Su nuevo Saldo es:" + usuarioSeleccionado.saldo;
}