function Borrar(){
    document.getElementById("ventana").value=''
}

function Mostrar(valor) {
    document.getElementById("ventana").value += valor;
}

function EliminarUltimo(){
    var elementos = document.getElementById("ventana").value;
    var correccion = elementos.slice(0,-1);
    document.getElementById("ventana").value = correccion;
    return correccion;
}

function Solve() {
    let x = document.getElementById("ventana").value;
    let y = eval(x);
    document.getElementById("ventana").value = y;
    return y;
}
