import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './group/group.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AuthentificationServiceService } from './services/authentification-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupComponent,
    NewGroupComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AuthentificationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
