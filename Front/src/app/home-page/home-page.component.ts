import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InfoService} from "../service/info.service";
import {Observable} from "rxjs";
import {BackAPIService} from "../service/back-api.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit{

  name$!: Observable<string | null>;
  picture$!: Observable<string | null>;

  constructor(private infoService: InfoService, private backAPIService :BackAPIService) { }

  ngOnInit(){
    this.name$ = this.infoService.name$;
    this.picture$ = this.infoService.picture$;
  }

  ngAfterViewInit() {
    this.searchs();
  }

  searchs() {
    let random = Math.floor(Math.random() * (100));
    this.backAPIService.postBackAPI(random).subscribe((data: any)=>{
      this.name$= data.forms[0].name;
      let pictureLink = data.sprites.front_default.split('https');
      if(pictureLink.length==3){
        pictureLink[2]="https"+pictureLink[2];
        this.picture$ = pictureLink[2];
      }
      else{
        this.picture$ = data.sprites.front_default;
      }
    })
  };
}
