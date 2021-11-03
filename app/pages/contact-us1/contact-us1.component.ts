import { Component, OnInit } from '@angular/core';
import { ApiservesService } from "./../../apiserves.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us1',
  templateUrl: './contact-us1.component.html',
  styleUrls: ['./contact-us1.component.css']
})
export class ContactUs1Component implements OnInit {


banner : any = {
		
		pagetitle: "حذف دورة تدريبة ",
		bg_image: "assets/images/banner/bnr3.jpg",
		// title: "Contact Us",
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

   
  

  deelCourse(delobj:any){
    this._apis.deleteCourse(delobj).subscribe((response)=>{
     location.reload()
     alert("تم حذف الدورة بنجاح")
    })
  }

  ngOnInit() { 

  }

}
