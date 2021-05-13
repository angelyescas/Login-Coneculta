import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController,NavController } from '@ionic/angular';
import { AsistenciaService } from '../services/asistencia.service';
import { ToastService } from '../services/toast.service';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = new FormGroup({
    usuario: new FormControl(''),
    pass: new FormControl('')
  });

  constructor(
    private menu: MenuController,
    private nav: NavController,
    private router: Router,
    private alert: ToastService,
    private usuarioService:AsistenciaService,
    //private storage:Storage,
    private http:HttpClient) { }

  ngOnInit() {
    
    this.menu.enable(false);
  }

  public login():void{
   
    this.usuarioService.iniciarSesion(this.formLogin.value)
      .subscribe((response) => {
        if((response.status == 200  && response.login)){
          console.log(response)
          this.router.navigate(['folder/Inbox']);
          localStorage.setItem('storage', JSON.stringify(response));
          //this.storage.set('storage', response);
          this.alert.success('Sesion iniciada correctamente');
        }else{
          console.log(response.data)
          this.alert.warning('Usuario o contraseña incorrecto');
        }
      },(error ) => {
       console.log(error)
    });
  }

  
  }


