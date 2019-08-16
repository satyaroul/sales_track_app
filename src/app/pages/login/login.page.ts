import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
withpass = true;
  constructor() { }

  segmentChanged(value){
    console.log(value);
    this.withpass = value;
  }
  ngOnInit() {
  }

}
