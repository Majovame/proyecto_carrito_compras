document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("suscripcionForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        
        const btn = document.querySelector ("#mybtn")
        btn.addEventListener(`click`, () =>{
           
           Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'te has suscrito exitosamente',
               showConfirmButton: false,
               timer: 1500
             })
       
       
        });

        document.getElementById("suscripcionForm").reset();
    });
});

function actualizarListaSuscripciones() {
    var listaSuscripciones = document.getElementById("suscripcionesList");
    listaSuscripciones.innerHTML = "";

    suscripciones.forEach(function(suscripcion) {
        var li = document.createElement("li");
        li.textContent = "Nombre: " + suscripcion.nombre + ", Correo Electrónico: " + suscripcion.email;
        listaSuscripciones.appendChild(li);
    });
}










const btn = document.querySelector ("#mybtn")
 btn.addEventListener(`click`, () =>{
    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'te has suscrito exitosamente',
        showConfirmButton: false,
        timer: 1500
      })


 });
