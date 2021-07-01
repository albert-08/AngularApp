import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Frida";
  apellido = "Benitez";
  edad = 0;
  empresa = "EBC";

  /*cambiaNombre(event:Event) {
    this.nombre = (<HTMLInputElement>event.target).value;
  }

  cambiaApellido(event:Event) {
    this.apellido = (<HTMLInputElement>event.target).value;
  }

  cambiaEdad(event:Event) {
    this.edad = parseInt((<HTMLInputElement>event.target).value);
  }

  cambiaEmpresa(event:Event) {
    this.empresa = (<HTMLInputElement>event.target).value;
  } */

  /*getEdad() {
    return this.edad;
  }*/
  
  habilitacionCuadro = false;

  usuarioRegistrado = false;

  textoDeRegistro = "No hay nadie registrado"

  getRegistroUsuario() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event:Event) {
    //alert ("El usuario se acaba de registrar");
    
    //this.textoDeRegistro = "El usuario se acaba de registrar"

    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoDeRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro = "No hay nadie registrado"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
