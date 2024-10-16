import Cl_vCine from "./Cl_vCine.js";
import Cl_vFamilia from "./Cl_vFamilia.js";
import Cl_mCine from "./Cl_mCine.js";
import Cl_mFamilia from "./Cl_mFamilia.js";

export default class Cl_Controlador {
  constructor() {
    this.mCine = new Cl_mCine();
    this.vFamilia = new Cl_vFamilia(this);
    this.vCine = new Cl_vCine(this);
    this.mostrarVistaCine();
  }

  mostrarVistaFamilia() {
    this.vCine.ocultar();
    this.vFamilia.mostrar();
  }

  mostrarVistaCine() {
    this.vFamilia.ocultar();
    this.vCine.mostrar();
  }

  agregarFamilia({ nombre, personas, dia }) {
    let familia = new Cl_mFamilia({ nombre, personas, dia });
    this.mCine.procesarFamilia(familia);

    this.vCine.reportarFamilia({
      nombre: familia.nombre,
      personas: familia.personas,
      dia: familia.dia,
      montoPagar: familia.montoPagar(),
      cajaInicial: this.mCine.montoCajaInicial(),
      nFamiliaMayorPago: this.mCine.nFamiliaMayorPago(),
      promPagadoDia1: this.mCine.promPagadoDia1(),
      montoTotalCaja: this.mCine.montoTotalCaja(),
    });
    this.mostrarVistaCine();
  }
}
