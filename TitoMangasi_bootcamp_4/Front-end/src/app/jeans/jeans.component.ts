import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {

  constructor(private http : Http, private route : Router) { }

  itemlist = [];

  ngOnInit() {
    this.loadItem();

  }

  loadItem(){
    this.http.get("http://localhost:3000/api/item/jeans")
    .subscribe(
      result => {
        this.itemlist = result.json();
      },
      error => {

      }
    );
  }

}
