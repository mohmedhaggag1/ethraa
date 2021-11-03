import { Component, OnInit } from '@angular/core';
import { ApiservesService } from "./../../apiserves.service";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.css']
})
export class Grid2Component implements OnInit {

	banner : any = {
		pagetitle: "الحقائب التدريبية ",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "الحقائب التدريبية ",
	}
	
	//tologin
public loginForm :FormGroup;
  
constructor(private formBuilder:FormBuilder,public _route:Router,
    public _api:ApiservesService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email:[''],
			password:['']
							})
		}
	login(){
    
		this._api.loginUser(this.loginForm.value).subscribe((response)=>{
		  
		if(response.data.isAuthenticated == true){
		 
		  
		  
		  this.loginForm.reset();
		  this._route.navigate(['blog-grid-3'])
		}
		else{
		  alert ("هذا المستخدم غير موجود")
		}
	  
	  },err=>{alert("تأكد من صحة البيانات" )})
	
}
}