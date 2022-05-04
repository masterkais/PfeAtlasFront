import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from './services/authentification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAthentification';
  constructor(private auth:AuthentificationServiceService,private router:Router){}
  onLogout(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
