import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from '../services/authentification-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups:any=[];
  constructor(public authService:AuthentificationServiceService,private router:Router) { }
  onNewGroup(){
    this.router.navigateByUrl("/new-group")
  }
  ngOnInit(): void {
    this.authService.getGroups().subscribe(
      res=>{
        this.groups=res;
      },err=>{
        this.authService.logout();
        this.router.navigateByUrl('/login');
      }
    )
  }

}
