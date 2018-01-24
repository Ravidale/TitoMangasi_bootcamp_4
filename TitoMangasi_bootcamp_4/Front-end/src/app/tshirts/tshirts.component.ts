import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
