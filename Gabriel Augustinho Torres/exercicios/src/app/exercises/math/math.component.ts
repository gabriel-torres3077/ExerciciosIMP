import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }
  
  form = this.fb.group({
    num: ['', Validators.required]
  });
  numIsPerfect: string = '';
  table: Number[] = [];
  baseNum = 0;
  show: Boolean = false;
  
  ngOnInit(): void {
  }

  isPerfect(n: number){
    var soma = 1;
    for (let i = 2; i * i <= n; i++)
    {
        if (n % i==0)
        {
            if(i * i != n)
                soma = soma + i + n / i;
            else
                soma = soma + i;
        }
    }

    if (soma == n && n != 1)
        return true;
    return false;
  }
  calcularTabuada(num: number){
    var resposta = document.getElementById('tabuada');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta!.innerHTML = tabuada;
  }
  calculate(){
    this.baseNum = Number(this.form.controls['num'].value);
    if (this.isPerfect(this.baseNum)){
      this.numIsPerfect = 'é';
    } else {
      this.numIsPerfect = 'não é';
    }
    this.calcularTabuada(this.baseNum);
    
    this.show = true;

  }

}
