import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private http : Http, private router : Router) { }

  itemlist = [];
  accessories = [];
  denim = [];
  footwear = [];
  jeans = [];
  outerwear = [];
  pants = [];
  shirts = [];
  shorts = [];
  tshirts = [];

  ngOnInit() {
    this.loadItem();
    this.loadItemJeans();
    this.loadItemAccessories();
    this.loadItemDenim();
    this.loadItemFootWear();
    this.loadItemPants();
    this.loadItemShirts();
    this.loadItemShorts();
    this.loadItemTshirt();


  }

  loadItem(){
    this.http.get("http://localhost:3000/api/item")
    .subscribe(
      result => {
        this.itemlist = result.json();
      },
      error => {

      }
    );
  }
  loadItemAccessories(){
    this.http.get("http://localhost:3000/api/item/accessories")
    .subscribe(
      result => {
        this.accessories = result.json();
      },
      error => {

      }
    );
  }

  loadItemDenim(){
    this.http.get("http://localhost:3000/api/item/denim")
    .subscribe(
      result => {
        this.denim = result.json();
      },
      error => {

      }
    );
  }

  loadItemFootWear(){
    this.http.get("http://localhost:3000/api/item/footwear")
    .subscribe(
      result => {
        this.footwear = result.json();
      },
      error => {

      }
    );
  }

  loadItemOuterWear(){
    this.http.get("http://localhost:3000/api/item/outerwear")
    .subscribe(
      result => {
        this.outerwear = result.json();
      },
      error => {

      }
    );
  }

  loadItemPants(){
    this.http.get("http://localhost:3000/api/item/pants")
    .subscribe(
      result => {
        this.pants = result.json();
      },
      error => {

      }
    );
  }

  loadItemShirts(){
    this.http.get("http://localhost:3000/api/item/shirts")
    .subscribe(
      result => {
        this.shirts = result.json();
      },
      error => {

      }
    );
  }
  loadItemShorts(){
    this.http.get("http://localhost:3000/api/item/shorts")
    .subscribe(
      result => {
        this.shorts = result.json();
      },
      error => {

      }
    );
  }
  loadItemTshirt(){
    this.http.get("http://localhost:3000/api/item/tshirt")
    .subscribe(
      result => {
        this.tshirts = result.json();
      },
      error => {

      }
    );
  }
  loadItemJeans(){
    this.http.get("http://localhost:3000/api/item/jeans")
    .subscribe(
      result => {
        this.jeans = result.json();
      },
      error => {

      }
    );
  }

}
