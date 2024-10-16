export default class Cl_vFamilia {
  constructor(controlador) {
    this.vista = document.getElementById("familiaForm");
    this.sNombre = document.getElementById("familiaForm_nombre");
    this.inPersonas = document.getElementById("familiaForm_personas");
    this.inDia = document.getElementById("familiaForm_dia");
    this.btAceptar = document.getElementById("familiaForm_btAceptar");
    this.btAceptar.onclick = () =>
      controlador.agregarFamilia({
        nombre: this.sNombre.value,
        personas: this.inPersonas.value,
        dia: this.inDia.value,
      });
    this.ocultar();
  }
  mostrar() {
    this.vista.hidden = false;
  }

  ocultar() {
    this.vista.hidden = true;
  }
}
