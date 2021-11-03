import { ApiservesService } from './../../../apiserves.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare  var jQuery:  any;

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component implements OnInit {

	constructor(public _ActivateRoute:ActivatedRoute,
		public _apis:ApiservesService ,
		public route:Router) {
			this.geteveryStat()
	 }
	 
	 statis :any;
	 geteveryStat(){
		this._apis.getAllStatistics().subscribe((data) => { this.statis = data; })
	 }
	

  ngOnInit(): void {
		(function ($) {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
			
		})(jQuery);
	}

}
