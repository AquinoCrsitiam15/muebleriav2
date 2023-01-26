import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(){
    location.href = '#page-top';
  }
}
