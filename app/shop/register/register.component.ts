import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiservesService } from 'src/app/apiserves.service';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

banner : any = {
		
		pagetitle: "إنشاء حساب جديد",
		bg_image: "assets/images/banner/bnr5.jpg",
		title: "إنشاء حساب جديد",
	}

  constructor(private formBuilder:FormBuilder,public _route:Router,
    public _api:ApiservesService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {
    
   }


public SignupForm :FormGroup;
ngOnInit(): void {
 
  this.SignupForm = this.formBuilder.group({
    username : [''],  
    email:[''],
    password:[''],
    confirmPassword:['']
  })
}

post:any;
signup(){

  this._api.register(this.SignupForm.value).subscribe((response)=>{
   this.post=response;
    if(this.post.succeeded== true){
     
      alert("تم إنشاء حساب جديد بنجاح")
      console.log(response)
      this._route.navigate(['shop-login'])
      
    }
    else{
      alert ("تأكد من صحة البيانات ")
    }
   
  
  },err=>{alert("تأكد من صحة البيانات" )})
}





//  public  newObject={};
// createObject(name,em,pass1,pass2){    
//  this.newObject = { 
//   "username" : name,  
//   "email":em,
//   "password":pass1,
//   "confirmPassword":pass2
//   }
//  console.log(this.newObject) 
// //  this._api.register(this.newObject)  
// }


}
