import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {Routes,RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent},
    
  ]},
  
  {path:'server',component:ServerComponent},
  {path:'servers',component:ServersComponent,children:[
    {path:':id/edit',component:EditServerComponent},
    {path:':id',component:ServerComponent},
  ]

},
 {path:'not-found',component:PageNotFoundComponent},
 {path:'**', redirectTo:'not-found'} // this must be last route else it will ignore below routes
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
