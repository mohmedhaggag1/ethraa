import { Component, OnInit } from '@angular/core';
import { ApiservesService } from "./../../apiserves.service";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminGuardGuard } from './../../../admin-guard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  banner: any = {

    pagetitle: "تسجيل الـدخول",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "تسجيل الـدخول",
  }

  constructor(private gard: AdminGuardGuard, private formBuilder: FormBuilder, public _route: Router,
    public _api: ApiservesService, public _ActivatedRoute: ActivatedRoute,
    public _http: HttpClient) {

  }
  //tologin
  public loginForm: FormGroup;

  //tosendCode when forget password
  public SendCode: FormGroup;

  //to send my recived code  عشان نسيت الباسورد 
  public MyDataTOchange: FormGroup;

  //to changepassword 
  public changepassword: FormGroup;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],

    })
    //to send Code using email
    this.SendCode = this.formBuilder.group({
      toEmail: ['']
    })
    //to send the recived Code 
    this.MyDataTOchange = this.formBuilder.group({
      email: [''],
      code: [''],
      newPassword: ['']
    })

    // to change password
    this.changepassword = this.formBuilder.group({
      email: [''],
      password: [''],
      newPassword: ['']
    })




  }

  login() {
    this._api.loginUser(this.loginForm.value).subscribe((response) => {
      if (response.data.isAuthenticated == true) {
        if (response.data.roles.includes("Admin")) {
          this._route.navigate(['blog-half-img-sidebar'])
          this.gard.valtest = true; //هنا ببعت للجارد اقوله تمام انا ادمن 
          localStorage.setItem('token', response.data.token)
        }
        else {
          this.loginForm.reset();
          // localStorage.setItem('token' , response.token)
          this._route.navigate(['home-university'])
        }

        // localStorage.setItem('token', response.data.token)
        // console.log(response.data.token)
      }
      else {
        alert("هذا المستخدم غير موجود")
      }
    }, err => { alert("تأكد من صحة البيانات") })


  }


  code: any;
  sendMyCode() {

    this._api.sendCodeTomaile(this.SendCode.value).
      subscribe((response) => {

        this.code = response;
        if (this.code.succeeded == true) {
          alert('تم إرسال الكود الخاص بك')
          console.log(response)
          this.SendCode.reset();
        }
        else {
          alert('هذا المستخدم غير موجود')
        }
      }, err => { alert("تأكد من صحة البيانات") })


  }


  // this called every time when user changed the code
  onCodeChanged(code1: string) { // دي بيتجيب رقم برقم بس مستخدمتهاش 

  }

  // this called only if user entered full code

  onCodeCompleted(code: number) { // دي اول مايخلص ادخال الرقم بتجيبه ع بعضه 
    this.MyDataTOchange.get('code').setValue(code);

  }

  // to get new password when forget 
  forget: any;
  ForGEtPassWOrd() {

    this._api.forgetpassword(this.MyDataTOchange.value).subscribe((response) => {
      this.forget = response;
      if (this.forget.succeeded == true) {
        alert('تم تغيير الرقم السري بنجاح')
        console.log(response)
        this.MyDataTOchange.reset();
        this._route.navigate(['shop-login'])
      }
      else {
        alert("تأكد من صحة البيانات ")
      }
    }, err => { alert("تأكد من صحة البريد الإلكتروني أو الكود") })


  }

  //ChangePassword Function 
  change: any;
  Changepass() {

    this._api.ChangeMYPassword(this.changepassword.value).subscribe((response) => {
      this.change = response;
      if (this.change.succeeded == true) {
        alert('تم تغيير الرقم السري بنجاح')
        console.log(response)
        this.changepassword.reset();
        this._route.navigate(['shop-login'])
      }
      else {
        alert("تأكد من صحة البيانات ")
      }
    }, err => { alert("تأكد من صحة البيانات ") })

  }






  //  public loginUserData ={};
  //  posts:any;
  //  TheUserLOg(){
  // 	this._apis.loginUser(this.loginUserData).subscribe(
  //     res => console.log(res),
  //     err => console.log(err)

  //     )
  //  }
}
