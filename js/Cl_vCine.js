export default class Cl_vCine {
  constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblCajaInicial = document.getElementById("mainFor_lblCajaInicial");
    this.lblFamiliaMayorPago = document.getElementById(
      "mainFor_blnFamiliaMayorPago"
    );
    this.lblpromPagadoDia1 = document.getElementById(
      "mainFor_lblpromPagadoDia1"
    );
    this.lblmontoTotalCaja = document.getElementById(
      "mainFor_lblmontoTotalCaja"
    );
    this.btAgregar.onclick = () => {
      controlador.mostrarVistaFamilia();
    };
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }

  reportarFamilia({
    nombre,
    personas,
    dia,
    montoPagar,
    cajaInicial,
    nFamiliaMayorPago,
    promPagadoDia1,
    montoTotalCaja,
  }) {
    this.tabla.innerHTML += `<br>
    <tr>
<td>${nombre}</td>
<td>${personas}</td>
<td>${dia}</td>
<td>$${montoPagar}</td>
</tr>`;
    this.lblCajaInicial.innerHTML = cajaInicial;
    this.lblFamiliaMayorPago.innerHTML = nFamiliaMayorPago;
    this.lblpromPagadoDia1.innerHTML = promPagadoDia1;
    this.lblmontoTotalCaja.innerHTML = montoTotalCaja;
  }
}
