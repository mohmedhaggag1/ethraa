import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiservesService } from 'src/app/apiserves.service';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid2-sidebar-left',
  templateUrl: './grid2-sidebar-left.component.html',
  styleUrls: ['./grid2-sidebar-left.component.css']
})
export class Grid2SidebarLeftComponent implements OnInit {



	banner : any = {
		pagetitle: "إضافة دورة  جديدة ",
		bg_image: "assets/images/banner/bnr1.jpg",
		// title: "Blog large image left sidebar",
	}
	layout : any = {	
		sidebar: true,
		sidebarPosition:"left",
		gridClass:"col-lg-6"
	}
	constructor(private formBuilder:FormBuilder,public _route:Router,
		public _api:ApiservesService, public _ActivatedRoute:ActivatedRoute ,
		public _http:HttpClient) {
			this.getallTeacher()
	   }
	
	public courseobj :FormGroup;
	// public registrationForm :FormGroup;
	ngOnInit(): void {
	 
	  this.courseobj = this.formBuilder.group({
		Image:File,
		Title:[''],
		Body:[''],
		NumberOfStudents:[''],
		Price:[''],
		TeachersId:[''],
		CategoriesId:1
				
	  })

	  
	
	}

	addFileToObject (event :any){
		if( event.target.files && event.target.files[0]){
			const image = event.target.files[0] as File;
			this.courseobj.get('Image').setValue(image);
		}
	}
	
	
	addoneCourse(){
		const formData =new FormData();
		// const image2 = this.courseobj.get('Image').value
		formData.append('Image' ,this.courseobj.get('Image').value );
		formData.append('Title' , this.courseobj.get('Title').value);
		formData.append('Body' ,  this.courseobj.get('Body').value);
		formData.append('NumberOfStudents' ,  this.courseobj.get('NumberOfStudents').value);
		formData.append('Price' ,  this.courseobj.get('Price').value);
		formData.append('TeachersId' ,  this.courseobj.get('TeachersId').value);
		formData.append('CategoriesId' ,  this.courseobj.get('CategoriesId').value);
		
		// console.log("image"+ formData.get('Image'))
		// console.log("TITLe"+ formData.get('Title'))
		// console.log("Body"+ formData.get('Body'))
		// console.log("NumberOfStudents"+ formData.get('NumberOfStudents'))
		// console.log("Price"+ formData.get('Price'))
		// console.log("TeachersId"+ formData.get('TeachersId'))
		// console.log("CategoriesId"+ formData.get('CategoriesId'))

		  this._api.addCourse(formData).subscribe((response)=>{alert("تم إضافة دورة تدريبية بنجاح")})
		}
	
	
	//DropDown to get all teacher id and chose from  
	posts :any;
	getallTeacher(){
		this._api.getAllTeacher().subscribe((response)=>{this.posts=response})

		}


		getSelectValue(selectvalueID :any) {
			this.courseobj.get('TeachersId').setValue(selectvalueID)
			// console.log("selectvalue is " +this.courseobj.get('TeachersId').value);
				}



	}
	