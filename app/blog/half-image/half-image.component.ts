import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiservesService } from 'src/app/apiserves.service';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-half-image',
  templateUrl: './half-image.component.html',
  styleUrls: ['./half-image.component.css']
})
export class HalfImageComponent implements OnInit {

	banner : any = {
		pagetitle: "إضافة معلم جديد",
		bg_image: "assets/images/banner/bnr1.jpg",
		// title: "Blog half image",
	}
	layout : any = {	
		sidebar: false,
		sidebarPosition:""
	}


	

	constructor(public formBuilder:FormBuilder,public _route:Router,
		public _api:ApiservesService, public _ActivatedRoute:ActivatedRoute ,
		public _http:HttpClient) {
	   }
	
	public portfile :FormGroup;
	ngOnInit(): void {
	 
	  this.portfile = this.formBuilder.group({
		Name : [''],  
		Title:[''],
		Image:File
		
	  })
	  
	}

	// displ (nameobj:any){
	// 	this.portfile.get('Name').setValue(nameobj);
	// 	console.log("Nam"+ nameobj)

	// }
	// displa (titleobj:any){
	// 	this.portfile.get('Title').setValue(titleobj);
	// 	console.log("title"+ titleobj)
	// }

	display (event :any){
		if( event.target.files && event.target.files[0]){
			const image = event.target.files[0] as File;
			this.portfile.get('Image').setValue(image);
			// console.log(event.target.files)
			// console.log("immmmmm"+ image)
		}
	}
	
	addteacher(){
		const formData =new FormData();
		// const image2 = this.portfile.get('Image').value
        //  console.log( this.portfile.get('Image').value)
		formData.append('Name' ,  this.portfile.get('Name').value);
		formData.append('Title' , this.portfile.get('Title').value);
		formData.append('Image' ,this.portfile.get('Image').value );
		// console.log("name"+ formData.get('Name'))
		// console.log("TITLe"+ formData.get('Title'))
		// console.log("image"+ formData.get('Image'))

		  this._api.addTeacher(formData).subscribe((response)=>{alert("تم إضافة معلم جديد بنجاح")})
		
		}
	
	}
	