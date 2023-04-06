import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  formCliente!: FormGroup;

  constructor(){  }

  ngOnInit(): void {
    this.createForm(new Cliente);
  }

  createForm(cliente:Cliente){

    this.formCliente = new FormGroup({

      nome: new FormControl(cliente.nome),
      genero: new FormControl(cliente.genero),
      tipo: new FormControl(cliente.tipo),
      dataNascimento: new FormControl(cliente.dataNascimento),
      observacao: new FormControl(cliente.observacao),
      inativo: new FormControl(cliente.inativo),

    });



  }

  onSubmit(){
    console.log(this.formCliente.value);// mostra os valores presentes FormControls
    console.log(this.formCliente.controls);//Mostra FormControls
    console.log(this.formCliente.get("genero"));//obter uma propriedade do FormGroup


  }

}
