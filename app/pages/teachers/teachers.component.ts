import { Component, OnInit } from '@angular/core';
import { ApiservesService } from "./../../apiserves.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

banner : any = {
		
		pagetitle: "كل المحاضرين",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "المحاضرين",
	}
	
// teachers : any[] = [
// 		{
// 			teacher_image: "assets/images/our-team/pic1.jpg",
// 			teacher_name: "Nashid Martines",
// 			teacher_post: "Director",
// 			fb_link: "javascript:void(0);",
// 			twitter_link: "javascript:void(0);",
// 			linkedin_link: "javascript:void(0);",
// 			pinterest_link: "javascript:void(0);",

// 		},
// 	]		
	

constructor(public _ActivateRoute:ActivatedRoute,
	public _apis:ApiservesService ,
	public route:Router) {
		this.geteveryTeachers()
 }
 
 teachers :any;
 geteveryTeachers(){
	this._apis.getAllTeacher().subscribe((data) => { this.teachers = data; })
 }
  ngOnInit(): void {
  }

}
