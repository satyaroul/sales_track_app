import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

    isRegistered = false;
    isProfileCreated = false;
  constructor() { }
  getRegistrationStatus(){
      return this.isProfileCreated;
  }
  setRegistrationStatus(){
      this.isProfileCreated = true;
      console.log(this.isProfileCreated);
  }

  checkUserDetails(){
    this.isRegistered = false;
    return this.isRegistered;
  }
}