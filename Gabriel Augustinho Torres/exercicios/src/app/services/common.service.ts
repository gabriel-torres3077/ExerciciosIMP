import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  public getAdress(cep: number){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
  /* 
  type: 'POST',
  contentType: 'application/x-www-form-urlencoded',
  url: 'consultar-cep',
  dataType: 'json',
  data: $.param({cep: $cep.val()})
  */
}
