import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  constructor(private route:ActivatedRoute) { }

  username:any= ""
  public w:any;


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.username = params.get("user"));

    this.w = window.innerWidth;


  }



  ngOnChanges()
  {
    console.log("Changed")
  }
}
