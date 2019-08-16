import { Component, OnInit, DoCheck } from '@angular/core';
import { ConstantService } from 'src/app/service/constants.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
isRegister = false;
  constructor(private constService : ConstantService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    this.isRegister = this.constService.getRegistrationStatus();
  }

}
