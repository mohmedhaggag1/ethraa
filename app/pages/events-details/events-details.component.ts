import { Component, OnInit } from '@angular/core';
import { ApiservesService } from "./../../apiserves.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  banner: any = {

    pagetitle: "حذف معلم ",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "حذف معلم ",
  }


  constructor(public _ActivateRoute: ActivatedRoute,
    public _apis: ApiservesService,
    public route: Router) {
    this.geteveryTeachers()
  }

  showMe: boolean = true;

  toggle() {
    this.showMe = !this.showMe;
  }


  teachers: any;
  geteveryTeachers() {
    this._apis.getAllTeacher().subscribe((data) => { this.teachers = data; })
  }


  deleteone(idteach: any) {
    console.log(idteach)
    this._apis.deleteteacher(idteach).subscribe((Response) => location.reload())
  }

  ngOnInit(): void {
    // this.geteveryTeachers()
    // location.reload()

  }

}
