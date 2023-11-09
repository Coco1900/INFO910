import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private name: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  name$: Observable<string | null> = this.name.asObservable();

  private picture: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  picture$: Observable<string | null> = this.picture.asObservable();

  constructor() { }

  setName(name: string) {
    this.name.next(name);
  }

  setPicture(picture: string) {
    this.picture.next(picture);
  }



}
