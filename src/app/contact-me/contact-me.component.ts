import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  sheetID = "1sh1N0sYLL--6hHoAB5C6Cx_mKFnrtbM8labuNkkyKZk"


  contact ={
    name: "",
    surname: "",
    email: "",
    message: ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitClicked(form: NgForm){

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*")

    this.http.post("https://script.google.com/macros/s/AKfycby-AmBgD2FIeG2nzjAgiSxB6rqRO3OGLjrOBLzONghHR4noRrqNirCsRK39YRFkA_g/exec",
      this.contact, {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "*"  
        })
      }).subscribe((response) => {
        console.log("Sent")
      })

  }
}
