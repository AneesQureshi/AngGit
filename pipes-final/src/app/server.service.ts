
import { Injectable } from "@angular/core";
import{Http} from "@angular/http";
import 'rxjs/Rx';
import{Response} from '@angular/http';

@Injectable()
export class ServerService{
constructor(private http : Http){}
storeServers(servers:any[]){
   return this.http.post('https://minehttpdemo.firebaseio.com/data.json',servers
    );
}
getServers(){
    return this.http.get('https://minehttpdemo.firebaseio.com/data.json').map(
        (respose:Response)=>{
            const data =respose.json();
            return data;
        }
    );

}
}