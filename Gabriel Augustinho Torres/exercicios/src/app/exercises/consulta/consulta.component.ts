import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private fb: FormBuilder
  ) { }

  validacep = /^[0-9]{8}$/;

  public show: Boolean = false;

  form = this.fb.group({
    cep: ['', Validators.required]
  })

  endereco: any = {};
  ngOnInit(): void {
    this.show = true;
  }

  get formControl(){
    return this.form.controls['cep'].value
  }

  checkAdress(){
    console.log('test')
    const cep = String(this.formControl);
    if (this.validacep.test(cep)){
      this.commonService.getAdress(Number(cep)).subscribe(
        (res) => {
          console.log(res)
          this.endereco = res,
          this.show = true;    
          window.alert('Pesquisa realizada com sucesso') 
          return true;   
        }
      );
    } else {
      window.alert('O CEP informado é inválido, verifique se existe algum simbolo ou letra');
    }
  }
}
