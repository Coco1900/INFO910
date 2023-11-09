import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackAPIService {

  constructor(private Http:  HttpClient) { }

  public postBackAPI(number: number): any {

    let objectObservable = this.Http.get('http://localhost:3000/'+number+'/');
    return objectObservable;
  }
}
