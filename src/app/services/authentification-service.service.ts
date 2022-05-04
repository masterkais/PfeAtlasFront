import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
private host:string="http://localhost:8080";
private jwt:string="";
private jwToken:any;
private roles:Array<any>=[];
  constructor(private http:HttpClient) { }

login(user:any){
return this.http.post(this.host+"/login",user,{observe:'response'});
}
saveToken(jwt:any){
  this.jwToken=jwt;
  localStorage.setItem('token',jwt);
  let jwtHelper=new JwtHelperService();
  this.roles=jwtHelper.decodeToken(this.jwToken).groups;
}
loadToken(){
  this.jwToken=localStorage.getItem('token');
}
getGroups(){
  if(this.jwToken==null){this.loadToken();}
  console.log("jwt pour get"+this.jwToken)
  return this.http.get(this.host+"/api/group/groups",{headers:new HttpHeaders({'Authorization':this.jwToken})});
}
logout(){
  this.jwToken=null;
  localStorage.removeItem('token');
}
isAdmin(){
for(let r of this.roles){
  if(r.authority=="ADMIN"){return true;} 
}
return false;
}
saveGroup(group:any){
  let headers=new HttpHeaders();
  headers.append('Authorization',this.jwToken);
  return this.http.post(this.host+"/api/group",group,{headers:new HttpHeaders({'Authorization':this.jwToken})});
}

}
