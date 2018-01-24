import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  file : File;
  imagePath = "";
  constructor(private http : Http) { }

  ngOnInit() {
  }


  fileChange($event){
    this.file = $event.target.files[0];
    console.log(this.file);
  }

  upload(){

    let formData = new FormData();
    // formData.append("name", this.file);
    // formData.append("address", this.file);
    // formData.append("phoneNumber", this.file);
    // formData.append("salary", this.file);
    formData.append("image", this.file);


    // formData.append("name", this.file);
    // formData.append("name", "Employee1");

    let header = new Headers({ "Content-Type" : "multipart/form-data"});
    let options = new RequestOptions({ headers:header});
    this.http.post("http://localhost:3000/api/item", formData, options)
    .subscribe(
      result => {
        console.log(result.json());
        this.imagePath = result.json().path;
      }, 
      error => {
        console.log(error);
      },
    );
  }

}
