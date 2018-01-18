import { Component, OnInit } from '@angular/core';
import{ServerService} from './server.service';
import{Response} from '@angular/http';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data1;
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyApV0_Sc_qkeGleYcNDfwLk2Wq_rdjf1v8",
      authDomain: "minehttpdemo.firebaseapp.com"
    });
  }
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filteredStatus = '';
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer(name:string) {
    this.servers.push({
      instanceType: 'small',
      name: name,
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
      }
  constructor(private serverService : ServerService){}

  onSave(){
    this.serverService.storeServers(this.servers).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
    );
  }

//  without data 
//   onGet(){
//     this.serverService.getServers().subscribe(
//       (response)=>console.log(response),
//       (error)=>console.log(error)
//     );
// }

  //with data in response
//   onGet(){
//     this.serverService.getServers().subscribe(
//       (response :Response)=>{
// const data =response; 
// // console.log("data="+data[0])
// console.log(data);
//       },
//       (error)=>console.log(error)
//     );
//   }

// with data retrieve on service page

onGet(){
  this.serverService.getServers().subscribe(
    (response:Response)=>{this.data1=response;

  }
    // (servers:any[])=>console.log(servers),
    // (error)=>console.log(error)
    
  );
}

}
 