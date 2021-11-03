import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
	selector: 'app-grid3-sidebar-left',
	templateUrl: './grid3-sidebar-left.component.html',
	styleUrls: ['./grid3-sidebar-left.component.css']
})
export class Grid3SidebarLeftComponent implements OnInit {



	banner: any = {
		pagetitle: "المركز الإعلامي",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "المركز الإعلامي ",
	}
	layout: any = {
		sidebar: true,
		sidebarPosition: "left",
		gridClass: "col-lg-4"
	}
	constructor() { }

	ngOnInit(): void {
		(function ($) {

			var self = jQuery("#masonry, .masonry");
			self.imagesLoaded(function () {
				self.masonry({
					gutterWidth: 15,
					isAnimated: true,
					itemSelector: ".card-container"
				});
			});

		})(jQuery);
	}

}
