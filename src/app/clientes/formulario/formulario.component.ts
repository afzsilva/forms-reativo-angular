import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  formCliente!: FormGroup;

  constructor(private formbuilder:FormBuilder){  }

  ngOnInit(): void {
    this.createForm(new Cliente);
  }

  createForm(cliente:Cliente){

    this.formCliente = this.formbuilder.group({

      nome: [cliente.nome],
      genero: [cliente.genero],
      tipo: [cliente.tipo],
      dataNascimento: [cliente.dataNascimento],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo],

    });



  }

  onSubmit(){
    console.log(this.formCliente.value);// mostra os valores presentes FormControls
    console.log(this.formCliente.controls);//Mostra FormControls
    console.log(this.formCliente.get("genero"));//obter uma propriedade do FormGroup


  }

}
