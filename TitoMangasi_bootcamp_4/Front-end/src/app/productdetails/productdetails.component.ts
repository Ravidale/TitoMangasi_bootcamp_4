import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  item = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getItemDetail(this.route.snapshot.params['id']);
  }

  getItemDetail(id) {
    this.http.get('http://localhost:3000/api/item/detail/'+id).subscribe(data => {
      this.item = data;
    });
  }
}
