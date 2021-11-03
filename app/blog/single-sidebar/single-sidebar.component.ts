import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-single-sidebar',
	templateUrl: './single-sidebar.component.html',
	styleUrls: ['./single-sidebar.component.css']
})
export class SingleSidebarComponent implements OnInit {


	banner: any = {

		pagetitle: "شروط الخدمه ",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "شروط الخدمة ",
	}

	layout: any = {
		sidebar: true,
		sidebarPosition: "right",
		container_class: ""
	}


	constructor() { }

	ngOnInit(): void {
	}

}
