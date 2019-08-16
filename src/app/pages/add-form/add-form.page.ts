import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})
export class AddFormPage implements OnInit {
from :string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   const from = params['where'];
    //   console.log(from);
    // });
    this.activatedRoute.queryParams.subscribe((params : Params)=>{
      this.from = params['where'];
      console.log(this.from);
    });
  }

}
