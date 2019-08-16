import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/service/constants.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {

  constructor(private constService  : ConstantService) { }

  ngOnInit() {}

  save(){
    this.constService.setRegistrationStatus();
    console.log(this.constService.isProfileCreated);
  }

}
