export default class Cl_mFamilia {
  constructor({ nombre, personas, dia }) {
    this.nombre = nombre;
    this.personas = personas;
    this.dia = dia;
  }

  setDia(dia) {
    this._dia = dia;
  }
  getDia() {
    return this._dia;
  }

  setPersonas(personas) {
    this._personas = +personas;
  }

  getPersonas() {
    return this._personas;
  }

  //1* Prime metodo montoPagar para conocer cuanto debe pagar cada familia
  montoPagar() {
    if (this.dia == 1) {
      return 1.5 * this.personas;
    } else {
      return 3 * this.personas;
    }
  }
}
