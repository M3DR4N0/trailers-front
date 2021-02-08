import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrailersService } from 'src/app/services/trailers.service';
import { Login } from 'src/app/interfaces/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private loginService: TrailersService) { }

  loginArr: Login[];

  init(){
    var user: any = document.getElementById('adminUser');
    var pass: any = document.getElementById('adminPass');

    if(this.loginArr[0].userName == user.value && this.loginArr[0].password == pass.value){
      window.location.href = '/administrador';
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Usuario o contraseña incorrecta'
      })
    }
  }

  ngOnInit(): void {
    this.loginService.getUser().subscribe((x: Login[]) => { 
      this.loginArr = x;
    }, (error) => {
      alert('error!')
      console.log(error);
    });
  }

}
