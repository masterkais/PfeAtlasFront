import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from '../services/authentification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode:number=0;
  constructor(private authService:AuthentificationServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(dataForm:any){
this.authService.login(dataForm).subscribe(
  resp=>{
    let jwt=resp.headers.get('Authorization');
this.authService.saveToken(jwt);
this.router.navigateByUrl('/groups');
  },err=>{
    this.mode=1;
  }
  );

  }

}
