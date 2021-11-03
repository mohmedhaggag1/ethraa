import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.css']
})
export class Grid3Component implements OnInit {



	banner : any = {
		pagetitle: "الحقائب التدريبة ",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "الحقائب التدريبية ",
	}
	layout : any = {	
		sidebar: false,
		sidebarPosition:"",
		gridClass:"col-lg-4"
	}
  constructor() { }

	ngOnInit(): void {
		
	}

}
