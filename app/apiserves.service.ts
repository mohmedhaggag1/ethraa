// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiservesService {
  
url = "http://pixelserver-001-site12.ctempurl.com";
api = "api";
constructor(public _http: HttpClient) {}

//get all Courses 
getAllCourse(){
  return this._http.get(`${this.url}/${this.api}/Courses/GetAllCourses`)
}

getCourseById(id: any) {
  // return this._http.get(`http://pixelserver-001-site12.ctempurl.com/api/Courses/GetOneCourse?CourseId=${id}`)
  return this._http.get(`${this.url}/${this.api}/Courses/GetOneCourse?CourseId=${id}`,
    
  )
}

//get all teacher = teacher commponent
getAllTeacher(){
  return this._http.get(`${this.url}/${this.api}/Teachers/GetAllTeachers`)
}

//statistics
getAllStatistics(){
  return this._http.get(`${this.url}/${this.api}/Statistics/GetStatistics`)
  
}

//register
register(userInfo){

 return this._http.post(`${this.url}/${this.api}/Account/Register`,userInfo)
}

//login
loginUser(LoginData){
  return  this._http.post<any>(`${this.url}/${this.api}/Account/GetToken`,LoginData)
}

//forget password
sendCodeTomaile(Mymaile){
  return this._http.post(`${this.url}/${this.api}/Account/SendCode`,Mymaile)
}

//changePassword
forgetpassword(mycode){
  return this._http.post(`${this.url}/${this.api}/Account/ForgetPassword`,mycode)
}

//change password
ChangeMYPassword(myNewData){
  return this._http.post(`${this.url}/${this.api}/Account/ChangePassword`,myNewData)

}

//contact Us
contact(object){
  return this._http.post(`${this.url}/${this.api}/ContactUs/AddNewContactUs`,object)

}



//part of admin
//delete teacher 
deleteteacher(idteach){
// let headers =new Headers();
var t = localStorage.getItem('token');
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// var t = localStorage.getItem('token');
// headers.append("Authorization", "Bearer " + t )
// console.log(headers)
 return  this._http.delete(`${this.url}/${this.api}/Teachers/DeleteTeachers?TeachersId=${idteach}`,
 {headers}
 )

 alert(" تم الحذف ")
//  location .reload() ;
}

getToken(){
  return localStorage.getItem('token')
}

//add teacher 
addTeacher(teachobj){
  var t = localStorage.getItem('token');
  // console.log( "token fron jhgvf "+t)
  // console.log("from api i  receve  "+teachobj)
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// console.log("kjhgfghjk"+headers)
  return this._http.post(`${this.url}/${this.api}/Teachers/AddNewTeacher`,teachobj,
  {headers}
  
  )
}

//delete Course 
deleteCourse(CoursID){
  var t = localStorage.getItem('token');
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// var t = localStorage.getItem('token');
// headers.append("Authorization", "Bearer " + t )
// console.log(headers)
 return  this._http.delete(`${this.url}/${this.api}/Courses/DeleteCourses?CoursesId=${CoursID}`,
 {headers}
 )

 alert(" تم الحذف ")
}

//addCourse
addCourse(courseobj){
  var t = localStorage.getItem('token');
  // console.log( "token fron jhgvf "+t)
  // console.log("object is "+courseobj)
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// console.log("kjhgfghjk"+headers)
  return this._http.post(`${this.url}/${this.api}/Courses/AddNewCourse`,courseobj,
  {headers}
  
  )
  
}

}
