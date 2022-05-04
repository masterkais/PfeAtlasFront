import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from '../services/authentification-service.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {
  mode=1;
  constructor(private authService:AuthentificationServiceService,private router:Router) {
   }

  ngOnInit(): void {
  }
  onSaveGroup(group:any){
this.authService.saveGroup(group).subscribe(
res=>{
group=res;
this.router.navigateByUrl("/groups");
},error=>{
this.mode=0
}
);
  }

}
