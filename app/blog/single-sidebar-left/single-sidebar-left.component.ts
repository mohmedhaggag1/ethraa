import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-single-sidebar-left',
	templateUrl: './single-sidebar-left.component.html',
	styleUrls: ['./single-sidebar-left.component.css']
})
export class SingleSidebarLeftComponent implements OnInit {


	banner: any = {

		pagetitle: "سياسة الدعم الفني ",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "سياسة الدعم الفني ",
	}

	layout: any = {
		sidebar: true,
		sidebarPosition: "left",
		container_class: ""
	}


	constructor() { }

	ngOnInit(): void {
	}

}
