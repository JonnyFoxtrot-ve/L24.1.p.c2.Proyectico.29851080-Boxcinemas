export default class Cl_mCine {
  constructor() {
    this.cantidadCajaInicial = 100;
    this.mayor = 0;
    this.nombreFamiliaPagoMayor = "";
    this.acumPagoTipo1 = 0;
    this.cntPagoTipo1 = 0;
    this.acumMonto = 0;
  }

  //Metodo procesar es el metodo que nos va ayudar para obtener los datos correspondiente a los otros metodos
  procesarFamilia(f) {
    this.acumMonto += f.montoPagar(); //1

    if (f.montoPagar() > this.mayor) {
      this.mayor = f.montoPagar();
      this.nombreFamiliaPagoMayor = f.nombre;
    }

    if (f.dia == 1) {
      this.acumPagoTipo1 += f.montoPagar();
      this.cntPagoTipo1++;
    }
  }

  nFamiliaMayorPago() {
    return this.nombreFamiliaPagoMayor;
  } //3

  promPagadoDia1() {
    return this.cntPagoTipo1 > 0
      ? (this.acumPagoTipo1 / this.cntPagoTipo1).toFixed(2)
      : 0;
  } //4

  montoTotalCaja() {
    return (this.cantidadCajaInicial + this.acumMonto).toFixed(2);
  } //5 */
  montoCajaInicial() {
    return this.cantidadCajaInicial;
  }
  //Se utilizará para mostrarlo en la pantalla
}
