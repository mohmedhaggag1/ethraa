import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-single',
	templateUrl: './single.component.html',
	styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

	banner: any = {
		pagetitle: "سياسة الخصوصية والإستخدام  ",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: " سياسة الخصوصية والإستخدام  ",
	}

	layout: any = {
		sidebar: false,
		sidebarPosition: "",
		container_class: "min-container"
	}
	constructor() { }

	ngOnInit(): void {
	}

}
