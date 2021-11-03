import { Component, OnInit } from '@angular/core';
import { ApiservesService } from "./../../apiserves.service";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us3',
  templateUrl: './contact-us3.component.html',
  styleUrls: ['./contact-us3.component.css']
})
export class ContactUs3Component implements OnInit {


  banner: any = {

    pagetitle: "الدعم الفني",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "الدعم الفني ",
  }

  constructor(private formBuilder: FormBuilder, public _route: Router,
    public _api: ApiservesService, public _ActivatedRoute: ActivatedRoute,
    public _http: HttpClient) {

  }
  //tologin
  public ContactUsData: FormGroup;

  ngOnInit(): void {
    this.ContactUsData = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      subject: [''],
      message: [''],

    })
  }



  contactus() {

    this._api.contact(this.ContactUsData.value).
      subscribe((response) => {
        alert('شكرا لتواصلك معنا ')
        // console.log(response)
        this.ContactUsData.reset();
      }, err => { alert("شكرا لتواصلك معنا") })


  }
}
