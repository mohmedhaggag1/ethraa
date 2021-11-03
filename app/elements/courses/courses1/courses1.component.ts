import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-courses1',
  templateUrl: './courses1.component.html',
  styleUrls: ['./courses1.component.css']
})
export class Courses1Component implements OnInit {

  constructor( http:HttpClient  ) { 
    
  }

  ngOnInit(): void {
  }

}
