import { Component, OnInit } from '@angular/core';
import { ApiservesService } from "./../../apiserves.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
	
banner : any = {
		
		pagetitle: " الدورات التدريبية ",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "الدورات التدريبية ",
	}	

  constructor(public _ActivateRoute:ActivatedRoute,
    public _apis:ApiservesService ,
    public route:Router) {
      this.geteveryCourse()
   }
  
   courses :any;
   geteveryCourse()
   {
    this._apis.getAllCourse().subscribe((data) => { this.courses = data; })
   }
  ngOnInit() { 

  }

}
