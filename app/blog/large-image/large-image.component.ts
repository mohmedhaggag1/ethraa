import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-image',
  templateUrl: './large-image.component.html',
  styleUrls: ['./large-image.component.css']
})
export class LargeImageComponent implements OnInit {



	constructor() { }

	active: boolean = false;
  
  
	onClick() {
	  this.active = !this.active
	}
  
	ngOnInit(): void {
	}
  
  }
  