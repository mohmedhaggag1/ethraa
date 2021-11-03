import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html',
  styleUrls: ['./about-us1.component.css']
})
export class AboutUs1Component implements OnInit {
  banner: any = {

    pagetitle: " حقوق الملكية والنشر",
    bg_image: "assets/images/banner/bnr3.jpg",
    title: "  حقوق الملكية والنشر ",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
