import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('created the service');
    }
    public getTask(){
        return this.http.get('http://localhost:3000')
        .map(res =>res.json());    
    }
}