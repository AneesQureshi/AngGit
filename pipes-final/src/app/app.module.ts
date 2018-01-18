import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import{ServerService} from './server.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from "app/auth/auth.service";


const appRoutes:Routes=[
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent}
 ];


@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
