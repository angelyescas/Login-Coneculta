import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

interface Login {
  usuario:string,
  pass:string
}

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  url = "http://localhost/apiConeculta/";

  constructor(private http:HttpClient) { }

  public iniciarSesion(obj:Login){
    return this.http.post<any>(this.url, obj);  
}

  
  }

 

 

